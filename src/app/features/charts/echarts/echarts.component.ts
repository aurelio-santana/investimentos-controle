import { Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';
import { AssetsService } from 'src/app/components/financial-assets/assets-list/assets.service';
import { Stock } from 'src/app/components/financial-assets/assets-list/model/Stock';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.css']
})
export class EchartsComponent implements OnInit {

  public stocks: Stock[];
  public stocksSum: Stock[];
  public testeStock: Stock[];
  public newstock:{name: string; value: number}[] = [];

  constructor(private assetsService : AssetsService) { }

  //testar loop do grafico no handleloadsum

  ngOnInit(): void {

    this.loadStocks();

      /* {
        id: 1,
        ticker: 'CMIG3',
        quantity: 2,
        averagePrice: 10,
        total: 20,
        currentQuote: 15,
        profit: 10,

        orderType: 1,
        date: new Date(1, 1, 2001)
      },
      {
        id: 2,
        ticker: 'WEGE3',
        quantity: 2,
        averagePrice: 15,
        total: 30,
        currentQuote: 15,
        profit: 101,

        orderType: 1,
        date: new Date(1, 1, 2001)
      },
      {
        id: 3,
        ticker: 'VALE3',
        quantity: 4,
        averagePrice: 15,
        total: 60,
        currentQuote: 25,
        profit: 25,

        orderType: 1,
        date: new Date(1, 1, 2001)
      } */

  }

  loadStocks()
  {
    this.assetsService.getStock().subscribe(

      (stocks: Stock[]) => {
        this.stocks = stocks;
        console.log("loadStocks: ", this.stocks);

        this.stocksSum = this.handleStocksSum();

        this.createChart1();
        this.createChart2();
        this.createChart3();
      },
      (erro:any) => {
        console.error(erro);
      }
    );
  }

  handleStocksSum() {

    return this.stocks.reduce((result: any, curr: Stock) => {
      const objInStock = result.find((o: any) => o.ticker === curr.ticker);
      if (objInStock)
      {
        objInStock.averagePrice =
          (objInStock.averagePrice * objInStock.quantity + curr.averagePrice * curr.quantity) /
          (objInStock.quantity + curr.quantity);

        objInStock.quantity += curr.quantity;
        objInStock.total = objInStock.quantity * objInStock.averagePrice;
        objInStock.currentQuote += curr.currentQuote;
        objInStock.profit = objInStock.total - objInStock.quantity * objInStock.currentQuote;
      }
      else
      {
        result.push(curr);

        this.newstock.push({name: curr.ticker, value: curr.total});
      }
      return result;
    },[]);
  }

  createChart(id: string){

    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('chart-container'+'-'+id)!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'/*  */
      },
      /* legend: {
        top: '5%',
        left: 'center'
      }, */
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['0%', '40%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 2
          },
          /* label: {
            show: true,
            position: 'outer',
          }, */
          label: {
            /* formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ', */ /* Caractere ：diferente */
            formatter: '{b|{b}: } {per|{d}%}  ',
/*             backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4, */

            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 11, //14
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#000', //fff
/*                 backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4, */
                fontSize: 10
              },
              d: {
                fontSize: 6
              }
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true //false
          },
/*           color: ['#F44336', '#E91E63', '#9C27B0'], */
          color: ['#00e396', '#feb019', '#ff4560', '#775dd0', '#008ffb' ],
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ]
        }
      ]
    };

    option && myChart.setOption(option);

  }

  createChart1(){

    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('chart-container-pizza-1')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'/*  */
      },
      /* legend: {
        top: '5%',
        left: 'center'
      }, */
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['0%', '40%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 2
          },
          /* label: {
            show: true,
            position: 'outer',
          }, */
          label: {
            /* formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ', */ /* Caractere ：diferente */
            formatter: '{b|{b}: } {per|{d}%}  ',
/*             backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4, */

            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 11, //14
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#000', //fff
/*                 backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4, */
                fontSize: 10
              },
              d: {
                fontSize: 6
              }
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true //false
          },
/*           color: ['#F44336', '#E91E63', '#9C27B0'], */
          color: ['#00e396', '#feb019', '#ff4560', '#775dd0', '#008ffb' ],
          data: [
            { value: 5000, name: 'Renda Variável' },
            { value: 1000, name: 'Renda Fixa' },
          ]
        }
      ]
    };

    option && myChart.setOption(option);

  }

  createChart2(){

    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('chart-container-pizza-2')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'/*  */
      },
      /* legend: {
        top: '5%',
        left: 'center'
      }, */
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['0%', '40%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 2
          },
          /* label: {
            show: true,
            position: 'outer',
          }, */
          label: {
            /* formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ', */ /* Caractere ：diferente */
            formatter: '{b|{b}: } {per|{d}%}  ',
/*             backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4, */

            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 11, //14
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#000', //fff
/*                 backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4, */
                fontSize: 10
              },
              d: {
                fontSize: 6
              }
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true //false
          },
/*           color: ['#F44336', '#E91E63', '#9C27B0'], */
          color: ['#00e396', '#feb019', '#ff4560', '#775dd0', '#008ffb' ],
          data: this.newstock //get data from backend
        }
      ]
    };

    option && myChart.setOption(option);

  }

  createChart3(){

    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('chart-container-pizza-3')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'/*  */
      },
      /* legend: {
        top: '5%',
        left: 'center'
      }, */
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['0%', '40%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderColor: '#fff',
            borderWidth: 2
          },
          /* label: {
            show: true,
            position: 'outer',
          }, */
          label: {
            /* formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ', */ /* Caractere ：diferente */
            formatter: '{b|{b}: } {per|{d}%}  ',
/*             backgroundColor: '#F6F8FC',
            borderColor: '#8C8D8E',
            borderWidth: 1,
            borderRadius: 4, */

            rich: {
              a: {
                color: '#6E7079',
                lineHeight: 22,
                align: 'center'
              },
              hr: {
                borderColor: '#8C8D8E',
                width: '100%',
                borderWidth: 1,
                height: 0
              },
              b: {
                color: '#4C5058',
                fontSize: 11, //14
                fontWeight: 'bold',
                lineHeight: 33
              },
              per: {
                color: '#000', //fff
/*                 backgroundColor: '#4C5058',
                padding: [3, 4],
                borderRadius: 4, */
                fontSize: 10
              },
              d: {
                fontSize: 6
              }
            }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 16,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true //false
          },
/*           color: ['#F44336', '#E91E63', '#9C27B0'], */
/*           color: ['#00e396', '#feb019', '#ff4560', '#775dd0', '#008ffb' ], */
          data: [
            { value: 1048, name: 'MXRF11' },
            { value: 735, name: 'VRTA11' },
            { value: 580, name: 'HGLG11' },
            { value: 484, name: 'VINO11' },
            { value: 300, name: 'HGRU11' },
          ]
        }
      ]
    };

    option && myChart.setOption(option);

  }



}
