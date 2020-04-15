(function ($) {
  "use strict";
  $(function () {
    Chart.defaults.global.legend.labels.usePointStyle = true;

    if ($("#inline-datepicker").length) {
      $("#inline-datepicker").datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
        templates: {
          leftArrow: '<i class="mdi mdi-chevron-left"></i>',
          rightArrow: '<i class="mdi mdi-chevron-right"></i>',
        },
      });
    }
    // flot chart bar script
    $(function () {
      var data = [
        ["0", 6],
        ["1", 8],
        ["2", 4],
        ["3", 5],
        ["4", 6],
        ["5", 7],
      ];

      if ($("#earningChart").length) {
        $.plot("#earningChart", [data], {
          series: {
            bars: {
              show: true,
              barWidth: 0.5,
              align: "center",
              fillColor: "#3f50f6",
            },
            color: "#3f50f6",
            lines: {
              fill: true,
            },
          },
          xaxis: {
            mode: "categories",
            tickLength: 0,
            ticks: [],
          },
          yaxis: {
            ticks: [],
          },
          grid: {
            borderWidth: 0,
            labelMargin: 10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius: 6,
          },
        });
      }
    });
    $(function () {
      var data = [
        ["0", 6],
        ["1", 8],
        ["2", 4],
        ["3", 5],
        ["4", 6],
        ["5", 7],
      ];

      if ($("#productChart").length) {
        $.plot("#productChart", [data], {
          series: {
            bars: {
              show: true,
              barWidth: 0.5,
              align: "center",
              fillColor: "#3f50f6",
            },
            color: "#3f50f6",
            lines: {
              fill: true,
            },
          },
          xaxis: {
            mode: "categories",
            tickLength: 0,
            ticks: [],
          },
          yaxis: {
            ticks: [],
          },
          grid: {
            borderWidth: 0,
            labelMargin: 10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius: 6,
          },
        });
      }
    });
    $(function () {
      var data = [
        ["0", 6],
        ["1", 8],
        ["2", 4],
        ["3", 5],
        ["4", 6],
        ["5", 7],
      ];

      if ($("#orderChart").length) {
        $.plot("#orderChart", [data], {
          series: {
            bars: {
              show: true,
              barWidth: 0.5,
              align: "center",
              fillColor: "#3f50f6",
            },
            color: "#3f50f6",
            lines: {
              fill: true,
            },
          },
          xaxis: {
            mode: "categories",
            tickLength: 0,
            ticks: [],
          },
          yaxis: {
            ticks: [],
          },
          grid: {
            borderWidth: 0,
            labelMargin: 10,
            hoverable: true,
            clickable: true,
            mouseActiveRadius: 6,
          },
        });
      }
    });
    var areaData1 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["#e2f8f8"],
          borderColor: ["#00cccd"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptions1 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    var areaDataDark1 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["#00cccd33"],
          borderColor: ["#00cccd"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptionsDark1 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    var areaData2 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [13, 2, 15, 3, 19, 12],
          backgroundColor: ["#e2f8f8"],
          borderColor: ["#00cccd"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptions2 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    var areaDataDark2 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [13, 2, 15, 3, 19, 12],
          backgroundColor: ["#00cccd33"],
          borderColor: ["#00cccd"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptionsDark2 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    var areaData3 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 9, 13, 5, 12, 3],
          backgroundColor: ["#ffed92"],
          borderColor: ["#ffab2d"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptions3 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    var areaDataDark3 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 9, 13, 5, 12, 3],
          backgroundColor: ["#ffed924f"],
          borderColor: ["#ffab2d"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptionsDark3 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    var areaData4 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [2, 19, 13, 5, 12, 10],
          backgroundColor: ["#ffed92"],
          borderColor: ["#ffab2d"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptions4 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    var areaDataDark4 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [2, 19, 13, 5, 12, 10],
          backgroundColor: ["#ffed924f"],
          borderColor: ["#ffab2d"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptionsDark4 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    var areaData5 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 15, 2, 12],
          backgroundColor: ["#e2f8f8"],
          borderColor: ["#00cccd"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptions5 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    var areaDataDark5 = {
      labels: ["", "", "", "", ""],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 15, 2, 12],
          backgroundColor: ["#00cccd33"],
          borderColor: ["#00cccd"],
          borderWidth: 1,
          pointRadius: 0,
          fill: true, // 3: no fill
        },
      ],
    };
    var areaOptionsDark5 = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              display: false,
            },
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    };
    if ($("#areaChart1").length) {
      var areaChartCanvas = $("#areaChart1").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaData1,
        options: areaOptions1,
      });
    }
    if ($("#areaChart2").length) {
      var areaChartCanvas = $("#areaChart2").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaData2,
        options: areaOptions2,
      });
    }
    if ($("#areaChart3").length) {
      var areaChartCanvas = $("#areaChart3").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaData3,
        options: areaOptions3,
      });
    }
    if ($("#areaChart4").length) {
      var areaChartCanvas = $("#areaChart4").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaData4,
        options: areaOptions4,
      });
    }
    if ($("#areaChart5").length) {
      var areaChartCanvas = $("#areaChart5").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaData5,
        options: areaOptions5,
      });
    }
    if ($("#areaChartDark1").length) {
      var areaChartCanvas = $("#areaChartDark1").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaDataDark1,
        options: areaOptionsDark1,
      });
    }
    if ($("#areaChartDark2").length) {
      var areaChartCanvas = $("#areaChartDark2").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaDataDark2,
        options: areaOptionsDark2,
      });
    }
    if ($("#areaChartDark3").length) {
      var areaChartCanvas = $("#areaChartDark3").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaDataDark3,
        options: areaOptionsDark3,
      });
    }
    if ($("#areaChartDark4").length) {
      var areaChartCanvas = $("#areaChartDark4").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaDataDark4,
        options: areaOptionsDark4,
      });
    }
    if ($("#areaChartDark5").length) {
      var areaChartCanvas = $("#areaChartDark5").get(0).getContext("2d");
      var areaChart = new Chart(areaChartCanvas, {
        type: "line",
        data: areaDataDark5,
        options: areaOptionsDark5,
      });
    }
    if ($("#surveyBar").length) {
      Chart.elements.Rectangle.prototype.draw = function () {
        var ctx = this._chart.ctx;
        var vm = this._view;
        var left, right, top, bottom, signX, signY, borderSkipped, radius;
        var borderWidth = vm.borderWidth;
        // Set Radius Here
        // If radius is large enough to cause drawing errors a max radius is imposed
        var cornerRadius = 10;

        if (!vm.horizontal) {
          // bar
          left = vm.x - vm.width / 2;
          right = vm.x + vm.width / 2;
          top = vm.y;
          bottom = vm.base;
          signX = 1;
          signY = bottom > top ? 1 : -1;
          borderSkipped = vm.borderSkipped || "bottom";
        } else {
          // horizontal bar
          left = vm.base;
          right = vm.x;
          top = vm.y - vm.height / 2;
          bottom = vm.y + vm.height / 2;
          signX = right > left ? 1 : -1;
          signY = 1;
          borderSkipped = vm.borderSkipped || "left";
        }

        // Canvas doesn't allow us to stroke inside the width so we can
        // adjust the sizes to fit if we're setting a stroke on the line
        if (borderWidth) {
          // borderWidth shold be less than bar width and bar height.
          var barSize = Math.min(
            Math.abs(left - right),
            Math.abs(top - bottom)
          );
          borderWidth = borderWidth > barSize ? barSize : borderWidth;
          var halfStroke = borderWidth / 2;
          // Adjust borderWidth when bar top position is near vm.base(zero).
          var borderLeft =
            left + (borderSkipped !== "left" ? halfStroke * signX : 0);
          var borderRight =
            right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
          var borderTop =
            top + (borderSkipped !== "top" ? halfStroke * signY : 0);
          var borderBottom =
            bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
          // not become a vertical line?
          if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
          }
          // not become a horizontal line?
          if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = vm.backgroundColor;
        ctx.strokeStyle = vm.borderColor;
        ctx.lineWidth = borderWidth;

        // Corner points, from bottom-left to bottom-right clockwise
        // | 1 2 |
        // | 0 3 |
        var corners = [
          [left, bottom],
          [left, top],
          [right, top],
          [right, bottom],
        ];

        // Find first (starting) corner with fallback to 'bottom'
        var borders = ["bottom", "left", "top", "right"];
        var startCorner = borders.indexOf(borderSkipped, 0);
        if (startCorner === -1) {
          startCorner = 0;
        }

        function cornerAt(index) {
          return corners[(startCorner + index) % 4];
        }

        // Draw rectangle from 'startCorner'
        var corner = cornerAt(0);
        var width, height, x, y, nextCorner, nextCornerId;
        ctx.moveTo(corner[0], corner[1]);

        for (var i = 1; i < 4; i++) {
          corner = cornerAt(i);
          nextCornerId = i + 1;
          if (nextCornerId == 4) {
            nextCornerId = 0;
          }

          nextCorner = cornerAt(nextCornerId);

          width = corners[2][0] - corners[1][0];
          height = corners[0][1] - corners[1][1];
          x = corners[1][0];
          y = corners[1][1];

          var radius = cornerRadius;

          // Fix radius being too large
          if (radius > height / 2) {
            radius = height / 2;
          }
          if (radius > width / 2) {
            radius = width / 2;
          }

          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
          ctx.lineTo(x + width, y + height - radius);
          ctx.quadraticCurveTo(
            x + width,
            y + height,
            x + width - radius,
            y + height
          );
          ctx.lineTo(x + radius, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
        }

        ctx.fill();
        if (borderWidth) {
          ctx.stroke();
        }
      };
      var data = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
          {
            data: [14, 12, 9, 15, 10, 12, 10],
            backgroundColor: "#3f50f6",
            borderColor: "#3f50f6",
            pointRadius: 0,
            lineTension: 0,
            borderWidth: 1,
          },
          {
            data: [17, 17, 17, 17, 17, 17, 17],
            backgroundColor: "#e6e6e6",
            borderColor: "#e6e6e6",
            pointRadius: 0,
            lineTension: 0,
            borderWidth: 1,
          },
        ],
      };
      var options = {
        responsive: true,
        legend: {
          display: false,
        },
        barRoundness: 1,
        scales: {
          xAxes: [
            {
              display: true,
              stacked: true,
              gridLines: {
                display: false,
                drawBorder: false,
              },
              barPercentage: 0.3,
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                beginAtZero: true,
              },
              display: true,
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
      };
      var ctxBar = document.getElementById("surveyBar");
      var myBarChart = new Chart(ctxBar, {
        type: "bar",
        data: data,
        options: options,
      });
    }
    if ($("#surveyBarDark").length) {
      Chart.elements.Rectangle.prototype.draw = function () {
        var ctx = this._chart.ctx;
        var vm = this._view;
        var left, right, top, bottom, signX, signY, borderSkipped, radius;
        var borderWidth = vm.borderWidth;
        // Set Radius Here
        // If radius is large enough to cause drawing errors a max radius is imposed
        var cornerRadius = 10;

        if (!vm.horizontal) {
          // bar
          left = vm.x - vm.width / 2;
          right = vm.x + vm.width / 2;
          top = vm.y;
          bottom = vm.base;
          signX = 1;
          signY = bottom > top ? 1 : -1;
          borderSkipped = vm.borderSkipped || "bottom";
        } else {
          // horizontal bar
          left = vm.base;
          right = vm.x;
          top = vm.y - vm.height / 2;
          bottom = vm.y + vm.height / 2;
          signX = right > left ? 1 : -1;
          signY = 1;
          borderSkipped = vm.borderSkipped || "left";
        }

        // Canvas doesn't allow us to stroke inside the width so we can
        // adjust the sizes to fit if we're setting a stroke on the line
        if (borderWidth) {
          // borderWidth shold be less than bar width and bar height.
          var barSize = Math.min(
            Math.abs(left - right),
            Math.abs(top - bottom)
          );
          borderWidth = borderWidth > barSize ? barSize : borderWidth;
          var halfStroke = borderWidth / 2;
          // Adjust borderWidth when bar top position is near vm.base(zero).
          var borderLeft =
            left + (borderSkipped !== "left" ? halfStroke * signX : 0);
          var borderRight =
            right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
          var borderTop =
            top + (borderSkipped !== "top" ? halfStroke * signY : 0);
          var borderBottom =
            bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
          // not become a vertical line?
          if (borderLeft !== borderRight) {
            top = borderTop;
            bottom = borderBottom;
          }
          // not become a horizontal line?
          if (borderTop !== borderBottom) {
            left = borderLeft;
            right = borderRight;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = vm.backgroundColor;
        ctx.strokeStyle = vm.borderColor;
        ctx.lineWidth = borderWidth;

        // Corner points, from bottom-left to bottom-right clockwise
        // | 1 2 |
        // | 0 3 |
        var corners = [
          [left, bottom],
          [left, top],
          [right, top],
          [right, bottom],
        ];

        // Find first (starting) corner with fallback to 'bottom'
        var borders = ["bottom", "left", "top", "right"];
        var startCorner = borders.indexOf(borderSkipped, 0);
        if (startCorner === -1) {
          startCorner = 0;
        }

        function cornerAt(index) {
          return corners[(startCorner + index) % 4];
        }

        // Draw rectangle from 'startCorner'
        var corner = cornerAt(0);
        var width, height, x, y, nextCorner, nextCornerId;
        ctx.moveTo(corner[0], corner[1]);

        for (var i = 1; i < 4; i++) {
          corner = cornerAt(i);
          nextCornerId = i + 1;
          if (nextCornerId == 4) {
            nextCornerId = 0;
          }

          nextCorner = cornerAt(nextCornerId);

          width = corners[2][0] - corners[1][0];
          height = corners[0][1] - corners[1][1];
          x = corners[1][0];
          y = corners[1][1];

          var radius = cornerRadius;

          // Fix radius being too large
          if (radius > height / 2) {
            radius = height / 2;
          }
          if (radius > width / 2) {
            radius = width / 2;
          }

          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width - radius, y);
          ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
          ctx.lineTo(x + width, y + height - radius);
          ctx.quadraticCurveTo(
            x + width,
            y + height,
            x + width - radius,
            y + height
          );
          ctx.lineTo(x + radius, y + height);
          ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
          ctx.lineTo(x, y + radius);
          ctx.quadraticCurveTo(x, y, x + radius, y);
        }

        ctx.fill();
        if (borderWidth) {
          ctx.stroke();
        }
      };
      var data = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
          {
            data: [14, 12, 9, 15, 10, 12, 10],
            backgroundColor: "#3f50f6",
            borderColor: "#3f50f6",
            pointRadius: 0,
            lineTension: 0,
            borderWidth: 1,
          },
          {
            data: [17, 17, 17, 17, 17, 17, 17],
            backgroundColor: "#383e5d",
            borderColor: "#383e5d",
            pointRadius: 0,
            lineTension: 0,
            borderWidth: 1,
          },
        ],
      };
      var options = {
        responsive: true,
        legend: {
          display: false,
        },
        barRoundness: 1,
        scales: {
          xAxes: [
            {
              display: true,
              stacked: true,
              gridLines: {
                display: false,
                drawBorder: false,
              },
              barPercentage: 0.3,
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                beginAtZero: true,
              },
              display: true,
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
        },
      };
      var ctxBar = document.getElementById("surveyBarDark");
      var myBarChart = new Chart(ctxBar, {
        type: "bar",
        data: data,
        options: options,
      });
    }

    // flot chart script
    $(function () {
      "use strict";

      var dashData2 = [
        [0, 69],
        [1, 68],
        [2, 63],
        [3, 68],
        [4, 62],
        [5, 67],
        [6, 65],
        [7, 65],
        [8, 64],
        [9, 67],
        [10, 66],
        [11, 64],
        [12, 62],
        [13, 63],
        [14, 60],
        [15, 64],
        [16, 63],
        [17, 60],
        [18, 62],
        [19, 63],
        [20, 67],
        [21, 64],
        [22, 62],
        [23, 63],
        [24, 62],
        [25, 67],
        [26, 63],
        [27, 65],
        [28, 68],
        [29, 70],
        [30, 73],
        [31, 72],
        [32, 79],
        [33, 72],
        [34, 76],
        [35, 72],
        [36, 73],
        [37, 71],
        [38, 78],
        [39, 70],
        [40, 75],
        [41, 74],
        [42, 75],
        [43, 72],
        [44, 74],
        [45, 72],
        [46, 75],
        [47, 75],
        [48, 71],
        [49, 72],
        [50, 75],
        [51, 61],
        [52, 60],
        [53, 66],
        [54, 66],
        [55, 60],
        [56, 64],
        [57, 61],
        [58, 60],
        [59, 64],
        [60, 61],
        [61, 66],
        [62, 61],
        [63, 65],
        [64, 65],
        [65, 60],
        [66, 61],
        [67, 64],
        [68, 60],
        [69, 62],
        [70, 60],
        [71, 63],
        [72, 60],
        [73, 64],
        [74, 61],
        [75, 65],
        [76, 61],
        [77, 60],
        [78, 60],
        [79, 65],
      ];

      var dashData3 = [
        [0, 15],
        [1, 15],
        [2, 13],
        [3, 14],
        [4, 12],
        [5, 13],
        [6, 15],
        [7, 13],
        [8, 14],
        [9, 13],
        [10, 16],
        [11, 14],
        [12, 12],
        [13, 13],
        [14, 10],
        [15, 14],
        [16, 13],
        [17, 10],
        [18, 12],
        [19, 13],
        [20, 17],
        [21, 14],
        [22, 12],
        [23, 13],
        [24, 12],
        [25, 17],
        [26, 13],
        [27, 15],
        [28, 10],
        [29, 10],
        [30, 13],
        [31, 12],
        [32, 19],
        [33, 12],
        [34, 16],
        [35, 12],
        [36, 13],
        [37, 11],
        [38, 18],
        [39, 10],
        [40, 15],
        [41, 14],
        [42, 15],
        [43, 12],
        [44, 14],
        [45, 12],
        [46, 15],
        [47, 15],
        [48, 11],
        [49, 12],
        [50, 15],
        [51, 11],
        [52, 10],
        [53, 16],
        [54, 16],
        [55, 10],
        [56, 14],
        [57, 11],
        [58, 10],
        [59, 14],
        [60, 11],
        [61, 16],
        [62, 11],
        [63, 15],
        [64, 15],
        [65, 10],
        [66, 11],
        [67, 14],
        [68, 10],
        [69, 12],
        [70, 10],
        [71, 13],
        [72, 10],
        [73, 14],
        [74, 11],
        [75, 15],
        [76, 11],
        [77, 10],
        [78, 10],
        [79, 15],
      ];

      var dashData4 = [
        [0, 25],
        [1, 25],
        [2, 23],
        [3, 24],
        [4, 22],
        [5, 23],
        [6, 25],
        [7, 23],
        [8, 24],
        [9, 23],
        [10, 26],
        [11, 24],
        [12, 22],
        [13, 23],
        [14, 20],
        [15, 24],
        [16, 23],
        [17, 20],
        [18, 22],
        [19, 23],
        [20, 27],
        [21, 24],
        [22, 22],
        [23, 23],
        [24, 22],
        [25, 27],
        [26, 23],
        [27, 25],
        [28, 20],
        [29, 25],
        [30, 23],
        [31, 22],
        [32, 23],
        [33, 25],
        [34, 22],
        [35, 22],
        [36, 26],
        [37, 21],
        [38, 28],
        [39, 27],
        [40, 28],
        [41, 25],
        [42, 24],
        [43, 24],
        [44, 24],
        [45, 20],
        [46, 28],
        [47, 26],
        [48, 21],
        [49, 22],
        [50, 25],
        [51, 21],
        [52, 20],
        [53, 26],
        [54, 26],
        [55, 20],
        [56, 24],
        [57, 21],
        [58, 20],
        [59, 24],
        [60, 21],
        [61, 26],
        [62, 21],
        [63, 25],
        [64, 25],
        [65, 20],
        [66, 21],
        [67, 24],
        [68, 20],
        [69, 22],
        [70, 20],
        [71, 23],
        [72, 20],
        [73, 24],
        [74, 21],
        [75, 25],
        [76, 21],
        [77, 20],
        [78, 20],
        [79, 25],
      ];

      function bgFlotData(num, val) {
        var data = [];
        for (var i = 0; i < num; ++i) {
          data.push([i, val]);
        }
        return data;
      }

      function bgFlotData(num, val) {
        var data = [];
        for (var i = 0; i < num; ++i) {
          data.push([i, val]);
        }
        return data;
      }

      var plot = $.plot(
        "#flotChart",
        [
          {
            data: dashData4,
            color: "#bcc1f3",
            lines: {
              fillColor: "#bcc1f3",
            },
          },
          {
            data: dashData3,
            color: "#3f50f6",
            lines: {
              fillColor: "#3f50f6",
            },
          },
          {
            data: dashData2,
            color: "#ffab2d",
            lines: {
              fillColor: { colors: [{ opacity: 0 }, { opacity: 0 }] },
            },
          },
        ],
        {
          series: {
            shadowSize: 0,
            lines: {
              show: true,
              lineWidth: 2,
              fill: true,
            },
          },
          grid: {
            borderWidth: 0,
            labelMargin: 8,
          },
          yaxis: {
            show: true,
            min: 0,
            max: 100,
            ticks: true,
          },
          xaxis: {
            show: true,
            color: "#fff",
            tickColor: "#eee",
            ticks: [
              [0, "2000"],
              [10, "2500"],
              [20, "3000"],
              [30, "3500"],
              [40, "4000"],
              [50, "4500"],
              [60, "5000"],
              [70, "5500"],
            ],
          },
        }
      );
    });
  });
})(jQuery);
