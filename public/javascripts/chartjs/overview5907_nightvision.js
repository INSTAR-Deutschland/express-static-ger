var ctx = document.getElementById('nightvision5907');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IN-5907 HD', 'IN-6014 HD', 'IN-3011', 'IN-9008 HD', 'IN-7011 HD', 'IN-5905 HD'],
        datasets: [
            {
                type: 'bar',
                label: 'Nightvision min. [m]',
                data: [15, 5, 8, 18, 8, 12],
                backgroundColor: 'rgba(2, 117, 216, 1)',
              },
            {
                type: 'bar',
                label: 'Nightvision max. [m]',
                data: [20, 10, 12, 25, 12, 20],
                backgroundColor: 'rgba(240, 173, 78, 1)',
              },
        ],
      },
		  options: {
      legend: {
        display: false,
      },
		    scales: {
		      yAxes: [{
		        ticks: {
              max: 30,
              beginAtZero: true,
            },
		      },],
		    },
		  },
  });
