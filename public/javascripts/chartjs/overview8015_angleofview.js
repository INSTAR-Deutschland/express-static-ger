var ctx = document.getElementById('angleofview8015');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['IN-8015 HD', 'IN-6012 HD', 'IN-3011', 'IN-9008 HD', 'IN-5907 HD', 'IN-5905 HD'],
        datasets: [
            {
                type: 'bar',
                label: 'Diagonal Angle [°]',
                data: [90, 45, 45.9, 90, 45, 90],
                backgroundColor: '#373a3c',
              },
							{
                type: 'bar',
                label: 'Horizontal Angle [°]',
                data: [81, 37, 36.8, 81, 37, 81],
                backgroundColor: 'rgba(2, 117, 216, 1)',
              },
            	{
                type: 'bar',
                label: 'Vertical Angle [°]',
                data: [61, 28, 28.4, 61, 28, 61],
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
              max: 100,
              beginAtZero: true,
            },
		      },],
		    },
		  },
  });
