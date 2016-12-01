var express = require('express');
var productRouter = express.Router();
var appdata = require('../views/_partials/data/cameras.json');

/* ****************************************** GET /General Product Routes ****************************************** */
productRouter.route('/')
  .get(function(req, res) {
      res.render('./Products/Products', {
          title: 'INSTAR Produkte',
        });
    });
	
productRouter.route('/Usermanuals')
  .get(function(req, res) {
      res.render('./Products/Usermanuals', {
          title: 'INSTAR Produkte Handbücher',
          uplink: '/Products',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-7011_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-7011 HD Sicherheitswarnungen',
          model: 'IN-7011_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-7011_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-7011 HD Garantie & Verfügbarkeit',
          model: 'IN-7011_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-7011_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-7011 HD Video Streaming',
          model: 'IN-7011_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-7011_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-7011 HD Hardware Reset',
          model: 'IN-7011_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5907_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5907 HD Sicherheitswarnungen',
          model: 'IN-5907_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5907_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5907 HD Garantie & Verfügbarkeit',
          model: 'IN-5907_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5907_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5907 HD Video Streaming',
          model: 'IN-5907_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5907_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5907 HD Hardware Reset',
          model: 'IN-5907_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5905_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-5905 HD Sicherheitswarnungen',
          model: 'IN-5905_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5905_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-5905 HD Garantie & Verfügbarkeit',
          model: 'IN-5905_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5905_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-5905 HD Video Streaming',
          model: 'IN-5905_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Outdoor_Cameras/IN-5905_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-5905 HD Hardware Reset',
          model: 'IN-5905_HD',
		  type: 'Outdoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-8015_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-8015 HD Safety Warnings',
          model: 'IN-8015_HD',
		  type: 'Indoor'
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-8015_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-8015 HD Warranty & Disposal',
          model: 'IN-8015_HD',
		  type: 'Indoor'
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-8015_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-8015 HD Video Streaming',
          model: 'IN-8015_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/'
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-8015_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-8015 HD Hardware Reset',
          model: 'IN-8015_HD',
		  type: 'Indoor',
		  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/'
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6014_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6014 HD Sicherheitswarnungen',
          model: 'IN-6014_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6014_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6014 HD Garantie & Verfügbarkeit',
          model: 'IN-6014_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6014_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6014 HD Video Streaming',
          model: 'IN-6014_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6014_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6014 HD Hardware Reset',
          model: 'IN-6014_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6012_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6012 HD Sicherheitswarnungen',
          model: 'IN-6012_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6012_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6012 HD Garantie & Verfügbarkeit',
          model: 'IN-6012_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6012_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6012 HD Video Streaming',
          model: 'IN-6012_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6012_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6012 HD Hardware Reset',
          model: 'IN-6012_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6001_HD/Safety_Warnings')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Safety_Warnings', {
          title: 'IN-6001 HD Sicherheitswarnungen',
          model: 'IN-6001_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6001_HD/Warranty')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Warranty', {
          title: 'IN-6001 HD Garantie & Verfügbarkeit',
          model: 'IN-6001_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6001_HD/Video_Streaming')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Video_Streaming', {
          title: 'IN-6001 HD Video Streaming',
          model: 'IN-6001_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });
	
productRouter.route('/Indoor_Cameras/IN-6001_HD/Camera_Reset')
  .get(function(req, res) {
      res.render('./Products/Usermanuals_Camera_Reset', {
          title: 'IN-6001 HD Hardware Reset',
          model: 'IN-6001_HD',
		  type: 'Indoor',
          uplink: '/Products/Usermanuals',
        });
    });

/* ****************************************** GET /Indoor_Cameras ****************************************** */
productRouter.get('/Indoor_Cameras', function(req, res) {

    /* Get all Pictures from cameras.json für    the gallery */

    var indoorPicture = [];
    var indoorPictureAlt = [];
    var indoorHref = [];
    appdata.articles.forEach(function(item) {
        indoorPicture = indoorPicture.concat(item.indoorPic);
        indoorPictureAlt = indoorPictureAlt.concat(item.indoorPicAlt);
        indoorHref = indoorHref.concat(item.indoorUrl);
      });

    res.render('./Products/Indoor_Cameras', {
        title: 'INSTAR Indoor IP Cameras',
        indoorPic: indoorPicture,
        indoorPicAlt: indoorPictureAlt,
        indoorUrl: indoorHref,
      });
  });

productRouter.route('/Indoor_Cameras/IN-8015_HD')
.get(function(req, res) {
  res.render('./Products/IN-8015_Overview', {
      title: 'IN-8015 HD Overview',
	  uplink: '/Products/Indoor_Cameras/'
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-8015_Usermanual', {
      title: 'IN-8015 HD Usermanual',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/'
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-8015_Product_Features', {
      title: 'IN-8015 HD Product Features',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/'
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-8015_Point2Point', {
      title: 'IN-8015 HD Point 2 Point',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/'
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-8015_Quick_Installation', {
      title: 'IN-8015 HD Quick Installation',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/'
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-8015_Lense_Adjustment', {
      title: 'IN-8015 HD Lense Adjustment',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/'
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-8015_Tech_Specs', {
      title: 'IN-8015 HD Technical Specifications'
    });
});

productRouter.route('/Indoor_Cameras/IN-8015_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-8015_Downloads', {
      title: 'IN-8015 HD Downloads',
	  uplink: '/Products/Indoor_Cameras/IN-8015_HD/Usermanual/'
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD')
.get(function(req, res) {
  res.render('./Products/IN-6014_Overview', {
      title: 'IN-6014 HD Überblick',
      uplink: '/Products',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-6014_Usermanual', {
      title: 'IN-6014 HD Handbuch',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-6014_Product_Features', {
      title: 'IN-6014 HD Produktfeatures',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-6014_Point2Point', {
      title: 'IN-6014 HD Point 2 Point',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-6014_Quick_Installation', {
      title: 'IN-6014 HD Schnellinstallation',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-6014_Lense_Adjustment', {
      title: 'IN-6014 HD Linse einstellen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-6014_Tech_Specs', {
      title: 'IN-6014 HD Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6014_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-6014_Downloads', {
      title: 'IN-6014 HD Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD')
.get(function(req, res) {
  res.render('./Products/IN-6012_Overview', {
      title: 'IN-6012 HD Überblick',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-6012_Usermanual', {
      title: 'IN-6012 HD Handbuch',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-6012_Product_Features', {
      title: 'IN-6012 HD Produktfeatures',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-6012_Point2Point', {
      title: 'IN-6012 HD Point 2 Point',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-6012_Quick_Installation', {
      title: 'IN-6012 HD Schnellinstallation',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-6012_Lense_Adjustment', {
      title: 'IN-6012 HD Linse einstellen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-6012_Tech_Specs', {
      title: 'IN-6012 HD Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6012_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-6012_Downloads', {
      title: 'IN-6012 HD Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD')
.get(function(req, res) {
  res.render('./Products/IN-6001_Overview', {
      title: 'IN-6001 HD Überblick',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-6001_Usermanual', {
      title: 'IN-6001 HD Handbuch',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-6001_Product_Features', {
      title: 'IN-6001 HD Produktfeatures',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-6001_Point2Point', {
      title: 'IN-6001 HD Point 2 Point',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-6001_Quick_Installation', {
      title: 'IN-6001 HD Schnellinstallation',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-6001_Lense_Adjustment', {
      title: 'IN-6001 HD Linse einstellen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-6001_Tech_Specs', {
      title: 'IN-6001 HD Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-6001_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-6001_Downloads', {
      title: 'IN-6001 HD Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-3011')
.get(function(req, res) {
  res.render('./Products/IN-3011_Overview', {
      title: 'IN-3011 Overview',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-3011/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-3011_Tech_Specs', {
      title: 'IN-3011 Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Indoor_Cameras/IN-3011/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-3011_Downloads', {
      title: 'IN-3011 Downloads',
      uplink: '/Products/Usermanuals',
    });
});

/* ****************************************** GET /Outdoor_Cameras ****************************************** */
productRouter.get('/Outdoor_Cameras', function(req, res) {

  /* Get all Pictures from cameras.json für    the gallery */

  var outdoorPicture = [];
  var outdoorPictureAlt = [];
  var outdoorHref = [];
  appdata.articles.forEach(function(item) {
      outdoorPicture = outdoorPicture.concat(item.outdoorPic);
      outdoorPictureAlt = outdoorPictureAlt.concat(item.outdoorPicAlt);
      outdoorHref = outdoorHref.concat(item.outdoorUrl);
    });

  res.render('./Products/Outdoor_Cameras', {
      title: 'INSTAR Outdoor IP Cameras',
      outdoorPic: outdoorPicture,
      outdoorPicAlt: outdoorPictureAlt,
      outdoorUrl: outdoorHref,
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD')
.get(function(req, res) {
  res.render('./Products/IN-7011_Overview', {
      title: 'IN-7011 HD Überblick',
      uplink: '/Products',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-7011_Usermanual', {
      title: 'IN-7011 HD Handbuch',
      uplink: '/Products',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-7011_Product_Features', {
      title: 'IN-7011 HD Produktfeatures',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-7011_Point2Point', {
      title: 'IN-7011 HD Point 2 Point',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-7011_Quick_Installation', {
      title: 'IN-7011 HD Schnellinstallation',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-7011_Lense_Adjustment', {
      title: 'IN-7011 HD Linse einstellen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-7011_Tech_Specs', {
      title: 'IN-7011 HD Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-7011_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-7011_Downloads', {
      title: 'IN-7011 HD Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD')
.get(function(req, res) {
  res.render('./Products/IN-5907_Overview', {
      title: 'IN-5907 HD Überblick',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-5907_Usermanual', {
      title: 'IN-5907 HD Handbuch',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-5907_Product_Features', {
      title: 'IN-5907 HD Produktfeatures',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-5907_Point2Point', {
      title: 'IN-5907 HD Point 2 Point',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-5907_Quick_Installation', {
      title: 'IN-5907 HD Schnellinstallation',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-5907_Lense_Adjustment', {
      title: 'IN-5907 HD Linse einstellen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-5907_Tech_Specs', {
      title: 'IN-5907 HD Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5907_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-5907_Downloads', {
      title: 'IN-5907 HD Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD')
.get(function(req, res) {
  res.render('./Products/IN-5905_Overview', {
      title: 'IN-5905 HD Überblick',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Usermanual')
.get(function(req, res) {
  res.render('./Products/IN-5905_Usermanual', {
      title: 'IN-5905 HD Handbuch',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Product_Features')
.get(function(req, res) {
  res.render('./Products/IN-5905_Product_Features', {
      title: 'IN-5905 HD Produktfeatures',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Point2Point')
.get(function(req, res) {
  res.render('./Products/IN-5905_Point2Point', {
      title: 'IN-5905 HD Point 2 Point',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Quick_Installation')
.get(function(req, res) {
  res.render('./Products/IN-5905_Quick_Installation', {
      title: 'IN-5905 HD Schnellinstallation',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Lense_Adjustment')
.get(function(req, res) {
  res.render('./Products/IN-5905_Lense_Adjustment', {
      title: 'IN-5905 HD Linse einstellen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-5905_Tech_Specs', {
      title: 'IN-5905 HD Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-5905_HD/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-5905_Downloads', {
      title: 'IN-5905 HD Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4011')
.get(function(req, res) {
  res.render('./Products/IN-4011_Overview', {
      title: 'IN-4011 Overview',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4011/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-4011_Tech_Specs', {
      title: 'IN-4011 Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4011/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-4011_Downloads', {
      title: 'IN-4011 Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4010_V2')
.get(function(req, res) {
  res.render('./Products/IN-4010_V2_Overview', {
      title: 'IN-4010 V2 Überblick',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4010_V2/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-4010_V2_Tech_Specs', {
      title: 'IN-4010 V2 Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-4010_V2/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-4010_V2_Downloads', {
      title: 'IN-4010 V2 Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2908')
.get(function(req, res) {
  res.render('./Products/IN-2908_Overview', {
      title: 'IN-2908 Overview',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2908/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-2908_Tech_Specs', {
      title: 'IN-2908 Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2908/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-2908_Downloads', {
      title: 'IN-2908 Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2905_V2')
.get(function(req, res) {
  res.render('./Products/IN-2905_V2_Overview', {
      title: 'IN-2905 V2 Überblick',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2905_V2/Technical_Specifications')
.get(function(req, res) {
  res.render('./Products/IN-2905_V2_Tech_Specs', {
      title: 'IN-2905 V2 Technische Spezifikationen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Outdoor_Cameras/IN-2905_V2/Downloads')
.get(function(req, res) {
  res.render('./Products/IN-2905_V2_Downloads', {
      title: 'IN-2905 V2 Downloads',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/SMA_RP-SMA_Antenna_Connector')
.get(function(req, res) {
  res.render('./Products/SMA_RP-SMA_Antenna_Connector', {
      title: 'SMA oder RP-SMA Antennen Stecker',
      uplink: '/Products/Usermanuals',
    });
});

/* ****************************************** GET Camera Lenses ****************************************** */
productRouter.route('/Lenses')
.get(function(req, res) {
  res.render('./Products/Lenses', {
      title: 'Kamera Objektive',
      uplink: '/Products',
    });
});

/* ****************************************** GET S-Mount Lenses ****************************************** */
productRouter.route('/Lenses/S-Mount/IN-0180')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0180', {
      title: 'IN-0180 Weitwinkel',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0220')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0220', {
      title: 'IN-0220 Weitwinkel',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0290')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0290', {
      title: 'IN-0290 Weitwinkel',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0360')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0360', {
      title: 'IN-0360 Weitwinkel',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0430')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0430', {
      title: 'IN-0430 Standard',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0600', {
      title: 'IN-0600 Standard',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Lenses/S-Mount/IN-0800')
.get(function(req, res) {
  res.render('./Products/Lense_IN-0800', {
      title: 'IN-0800 Tele',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1200')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1200', {
      title: 'IN-1200 Tele',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Lenses/S-Mount/IN-1600')
.get(function(req, res) {
  res.render('./Products/Lense_IN-1600', {
      title: 'IN-1600 Tele',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Lenses/S-Mount/Lense_Comparison')
.get(function(req, res) {
  res.render('./Products/Lense_Comparison', {
      title: 'S-Mount Objektiv Vergleich',
      uplink: '/Products/Usermanuals',
    });
});

/* ****************************************** GET /IN-LAN ****************************************** */

productRouter.route('/IN-LAN')
.get(function(req, res) {
  res.render('./Products/IN-LAN_500', {
      title: 'IN-LAN 500 Powerline Kommunikation',
      uplink: '/Products/Usermanuals',
    });
});

/* ****************************************** GET /IN-Lighting ****************************************** */

productRouter.route('/IR_Lighting')
.get(function(req, res) {
  res.render('./Products/IR-Lighting', {
      title: 'INSTAR Infrarot Scheinwerfer',
      uplink: '/Products/Usermanuals',
    });
});

/* ****************************************** GET /IN-PoE ****************************************** */

productRouter.route('/Power_over_Ethernet')
.get(function(req, res) {
  res.render('./Products/IN-PoE_1000', {
      title: 'IN-PoE 1000 Power over Ethernet',
      uplink: '/Products/Usermanuals',
    });
});

/* ****************************************** GET /IN-Mikro ****************************************** */

productRouter.route('/IN-Mikro')
.get(function(req, res) {
  res.render('./Products/IN-Mikro', {
      title: 'IN-Mikro IP Kamera Mikrofone',
      uplink: '/Products/Usermanuals',
    });
});

/* ****************************************** GET /IN-Route ****************************************** */

productRouter.route('/IN-Route')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products',
    });
});

productRouter.route('/IN-Route/First_Steps')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/First_Steps/Introduction')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Introduction', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/First_Steps/Charging')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Charging', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/First_Steps/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Login', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/First_Steps/Wizard')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_Wizard', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Router_Modes')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Router', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/Repeater_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_Repeater', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/First_Steps/Quick_Access/3G_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_First_Steps_QA_3G', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Overview')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Overview', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Overview/Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Status', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Overview/WAN_Status')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_WAN', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Overview/Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_Mode', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Overview/File_Explorer')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_O_File', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Network')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Network/LAN')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_LAN', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Network/WiFi_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_WiFi', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Network/Repeater_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Repeater', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Network/3G_Settings')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_3G', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Network/Router_Mode')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_Router', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Network/DHCP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DHCP', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Network/DDNS')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_DDNS', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Network/FTP')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Network_FTP', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Firewall')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Firewall/Port_Forwarding')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Forwarding', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Firewall/Device_Filter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Filter', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Firewall/DMZ_Host')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_DMZ', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Firewall/Webfilter')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Firewall_Webfilter', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/System')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/System/Log')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Log', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/System/Login')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Login', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/System/NTP_Setup')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_NTP', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/System/Statistics')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Statistics', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/System/Import')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Import', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/System/Reboot')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Reboot', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/System/Upgrade')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_System_Upgrade', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Help')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Help/Features')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_Features', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Route/Help/About_Us')
.get(function(req, res) {
  res.render('./Products/IN-Route_P52_Help_About', {
      title: 'IN-Route P52 Travel Router',
      uplink: '/Products/Usermanuals',
    });
});

/* ****************************************** GET /IN-Motion ****************************************** */

productRouter.route('/IN-Motion')
.get(function(req, res) {
  res.render('./Products/IN-Motion', {
      title: 'IN-Motion',
      uplink: '/Products',
    });
});

productRouter.route('/IN-Motion/300')
.get(function(req, res) {
  res.render('./Products/IN-Motion_300', {
      title: 'IN-Motion 300',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Motion/500')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500', {
      title: 'IN-Motion 500',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Motion/500/Dual_Sensor')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Dual_Sensor', {
      title: 'IN-Motion 500 - Dual Sensor',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Motion/500/Setup')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Setup', {
      title: 'IN-Motion 500 - Setup',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Motion/500/Wiring')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Wiring', {
      title: 'IN-Motion 500 - Wiring',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Motion/500/User_Interface')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_User_Interface', {
      title: 'IN-Motion 500 - Benutzeroberfläche',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Motion/500/Considerations')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Considerations', {
      title: 'IN-Motion 500 - Berücksichtigungen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/IN-Motion/500/Recorder')
.get(function(req, res) {
  res.render('./Products/IN-Motion_500_Recorder', {
      title: 'IN-Motion 500 - Recorder',
      uplink: '/Products/Usermanuals',
    });
});



/* ****************************************** GET /Software ****************************************** */
productRouter.get('/Software', function(req, res) {

  /* Get all Pictures from software.json für    the gallery */

  var softwarePicture = [];
  var softwarePictureAlt = [];
  var softwareHref = [];
  appdata.articles.forEach(function(item) {
      softwarePicture = softwarePicture.concat(item.Pic);
      softwarePictureAlt = softwarePictureAlt.concat(item.PicAlt);
      softwareHref = softwareHref.concat(item.url);
    });

  res.render('./Products/Software', {
      title: 'INSTAR Software',
      Pic: softwarePicture,
      PicAlt: softwarePictureAlt,
      url: softwareHref,
    });
});

/* ****************************  GET InstarVision für    Windows /Windows ************************************* */
productRouter.route('/Software/Windows')
.get(function(req, res) {
  res.render('./Products/Windows', {
      title: 'Software für Windows',
      uplink: '/Products',
    });
});

productRouter.route('/Software/Windows/InstarVision')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision', {
      title: 'InstarVision für Windows',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Camera_List')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Camera_List', {
      title: 'InstarVision v2 Kamera Liste',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Layout')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Layout', {
      title: 'InstarVision v2 Layout',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/PTZ')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_PTZ', {
      title: 'InstarVision v2 Schwenken, Neigen & Zoomen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Image_Adjust')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Image_Adjust', {
      title: 'InstarVision v2 Bildeinstellungen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Webserver')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Webserver', {
      title: 'InstarVision v2 Webserver',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Record')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Record', {
      title: 'InstarVision v2 Aufnahme',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Record/General')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Record_General', {
      title: 'InstarVision v2 Allgemeine Aufnahme',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Record/Schedule')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Record_Schedule', {
      title: 'InstarVision v2 Aufnahme Zeitplan',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Record/Alarm')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Record_Alarm', {
      title: 'InstarVision v2 Alarmaufnahme',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Record/Photoseries')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Record_Photoseries', {
      title: 'InstarVision v2 Fotoserie aufnehmen',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Record/Email')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Record_Email', {
      title: 'InstarVision v2 Aufnahmen per Email',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Record/FTP')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Record_FTP', {
      title: 'InstarVision v2 Aufnahmen auf FTP',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/System')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_System', {
      title: 'InstarVision v2 System',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Users')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Users', {
      title: 'InstarVision v2 Benutzer',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Advanced')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Advanced', {
      title: 'InstarVision v2 Erweitert',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Advanced/License')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Advanced_License', {
      title: 'InstarVision v2 Erweitert Lizenz',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Advanced/Log')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Advanced_Log', {
      title: 'InstarVision v2 Erweitert Log',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Advanced/Export')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Advanced_Export', {
      title: 'InstarVision v2 Erweitert Exportieren',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Advanced/Player')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Advanced_Player', {
      title: 'InstarVision v2 Erweitert Player',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Advanced/Explorer')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_Advanced_Explorer', {
      title: 'InstarVision v2 Erweitert Explorer',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/About')
.get(function(req, res) {
  res.render('./Products/Windows_InstarVision_About', {
      title: 'InstarVision v2 Über',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Windows_Phone')
.get(function(req, res) {
  res.render('./Products/Windows_Phone_InstarVision', {
      title: 'InstarVision für WindowsPhone',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Windows_Phone/DDNS')
.get(function(req, res) {
  res.render('./Products/Windows_Phone_InstarVision_DDNS', {
      title: 'InstarVision für Windows Phone - DDNS',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Windows_Phone/P2P')
.get(function(req, res) {
  res.render('./Products/Windows_Phone_InstarVision_P2P', {
      title: 'InstarVision für Windows Phone - P2P',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Windows_Phone/Multiview')
.get(function(req, res) {
  res.render('./Products/Windows_Phone_InstarVision_Multiview', {
      title: 'InstarVision für Windows Phone - Multiview',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Windows_Phone/Recording')
.get(function(req, res) {
  res.render('./Products/Windows_Phone_InstarVision_Recording', {
      title: 'InstarVision für Windows Phone - Recording',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Windows_Phone/Settings')
.get(function(req, res) {
  res.render('./Products/Windows_Phone_InstarVision_Settings', {
      title: 'InstarVision für Windows Phone - Settings',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Metro')
.get(function(req, res) {
  res.render('./Products/Windows_Metro_InstarVision', {
      title: 'InstarVision für Windows Metro',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Metro/DDNS')
.get(function(req, res) {
  res.render('./Products/Windows_Metro_InstarVision_DDNS', {
      title: 'InstarVision für Windows Metro - DDNS',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Metro/P2P')
.get(function(req, res) {
  res.render('./Products/Windows_Metro_InstarVision_P2P', {
      title: 'InstarVision für Windows Metro - P2P',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Metro/Multiview')
.get(function(req, res) {
  res.render('./Products/Windows_Metro_InstarVision_Multiview', {
      title: 'InstarVision für Windows Metro - Multiview',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Metro/Recording')
.get(function(req, res) {
  res.render('./Products/Windows_Metro_InstarVision_Recording', {
      title: 'InstarVision für Windows Metro - Recording',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/InstarVision/Metro/Settings')
.get(function(req, res) {
  res.render('./Products/Windows_Metro_InstarVision_Settings', {
      title: 'InstarVision für Windows Metro - Settings',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/iSpy')
.get(function(req, res) {
  res.render('./Products/Windows_iSpy', {
      title: 'iSpy Connect',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/Sighthound')
.get(function(req, res) {
  res.render('./Products/Windows_Sighthound', {
      title: 'Sighthound',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/P2P_Client')
.get(function(req, res) {
  res.render('./Products/Windows_P2P_Client', {
      title: 'P2P Client',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/go1984')
.get(function(req, res) {
  res.render('./Products/Windows_go1984', {
      title: 'Logiware go1984',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/VLC_Player')
.get(function(req, res) {
  res.render('./Products/Windows_VLC', {
      title: 'VLC Player',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/CCTV_Chrome_Plugin')
.get(function(req, res) {
  res.render('./Products/Windows_CCTV_Plugin', {
      title: 'CCTV Plugin',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/Blue_Iris')
.get(function(req, res) {
  res.render('./Products/Windows_Blue_Iris', {
      title: 'Blue Iris',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/YAW_Cam')
.get(function(req, res) {
  res.render('./Products/Windows_YAW_Cam', {
      title: 'YAW Cam',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/Zone_Trigger')
.get(function(req, res) {
  res.render('./Products/Windows_Zone_Trigger', {
      title: 'Zone Trigger',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/Webcam_XP')
.get(function(req, res) {
  res.render('./Products/Windows_Webcam_XP', {
      title: 'WebcamXP',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/Webcam_Motion_Detector')
.get(function(req, res) {
  res.render('./Products/Windows_Webcam_Motion_Detector', {
      title: 'Webcam Motion Detector',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Windows/Zebra_Surveillance')
.get(function(req, res) {
  res.render('./Products/Windows_Zebra_Surveillance', {
      title: 'Zebra Surveillance',
      uplink: '/Products/Usermanuals',
    });
});

/* *************************  GET InstarVision für    macOS /macOS *********************************** */
productRouter.route('/Software/macOS')
.get(function(req, res) {
  res.render('./Products/MacOS', {
      title: 'Software für macOS',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/macOS/Sighthound')
.get(function(req, res) {
  res.render('./Products/Windows_Sighthound', {
      title: 'Sighthound',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/macOS/EvoCam')
.get(function(req, res) {
  res.render('./Products/macOS_EvoCam', {
      title: 'EvoCam',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/macOS/VLC_Player')
.get(function(req, res) {
  res.render('./Products/Windows_VLC', {
      title: 'VLC Player',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/macOS/SecuritySpy')
.get(function(req, res) {
  res.render('./Products/macOS_SecuritySpy', {
      title: 'SecuritySpy',
      uplink: '/Products/Usermanuals',
    });
});

/* ************************************ GET InstarVision für    Android /Android ************************ */
productRouter.route('/Software/Android')
.get(function(req, res) {
  res.render('./Products/Android', {
      title: 'Software für Android',
      uplink: '/Products',
    });
});

productRouter.route('/Software/Android/InstarVision')
.get(function(req, res) {
  res.render('./Products/Android_InstarVision', {
      title: 'InstarVision für Android',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Android/InstarVision/DDNS')
.get(function(req, res) {
  res.render('./Products/Android_InstarVision_DDNS', {
      title: 'InstarVision für Android - DDNS',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Android/InstarVision/P2P')
.get(function(req, res) {
  res.render('./Products/Android_InstarVision_P2P', {
      title: 'InstarVision für Android - P2P',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Android/InstarVision/Multiview')
.get(function(req, res) {
  res.render('./Products/Android_InstarVision_Multiview', {
      title: 'InstarVision für Android - Multiview',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Android/InstarVision/Recording')
.get(function(req, res) {
  res.render('./Products/Android_InstarVision_Recording', {
      title: 'InstarVision für Android - Recording',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Android/InstarVision/Settings')
.get(function(req, res) {
  res.render('./Products/Android_InstarVision_Settings', {
      title: 'InstarVision für Android - Settings',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Android/TinyCam_Monitor')
.get(function(req, res) {
  res.render('./Products/Android_TinyCam', {
      title: 'TinyCam Monitor',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Android/IP_Cam_Viewer')
.get(function(req, res) {
  res.render('./Products/Android_IP_CamViewer', {
      title: 'IP Cam Viewer',
      uplink: '/Products/Usermanuals',
    });
});

/* *********************************** GET InstarVision für    iOS /iOS ******************************* */
productRouter.route('/Software/iOS')
.get(function(req, res) {
  res.render('./Products/iOS', {
      title: 'Software für    iOS',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPhone')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPhone', {
      title: 'InstarVision für iPhone',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPhone/DDNS')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPhone_DDNS', {
      title: 'InstarVision für iOS - DDNS',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPhone/P2P')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPhone_P2P', {
      title: 'InstarVision für iOS - P2P',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPhone/Multiview')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPhone_Multiview', {
      title: 'InstarVision für iOS - Multiview',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPhone/Recording')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPhone_Recording', {
      title: 'InstarVision für iOS - Recording',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPhone/Settings')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPhone_Settings', {
      title: 'InstarVision füriOS - Settings',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPad')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPad', {
      title: 'InstarVision für iPad',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPad/DDNS')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPad_DDNS', {
      title: 'InstarVision für iOS - DDNS',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPad/P2P')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPad_P2P', {
      title: 'InstarVision für iOS - P2P',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPad/Multiview')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPad_Multiview', {
      title: 'InstarVision für iOS - Multiview',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPad/Recording')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPad_Recording', {
      title: 'InstarVision für iOS - Recording',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision/iPad/Settings')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision_iPad_Settings', {
      title: 'InstarVision für iOS - Settings',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/InstarVision')
.get(function(req, res) {
  res.render('./Products/iOS_InstarVision', {
      title: 'InstarVision für iOS',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/LiveCams')
.get(function(req, res) {
  res.render('./Products/iOS_LiveCams', {
      title: 'LiveCams',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/IP_Vision_Pro')
.get(function(req, res) {
  res.render('./Products/iOS_IP_Vision_Pro', {
      title: 'IP Vision Pro',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/ICCAM')
.get(function(req, res) {
  res.render('./Products/iOS_ICCAM', {
      title: 'ICCAM',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/IP_Cam_Viewer')
.get(function(req, res) {
  res.render('./Products/Android_IP_CamViewer', {
      title: 'IP Cam Viewer',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/iOS/P2P_Cam_Live')
.get(function(req, res) {
  res.render('./Products/iOS_P2P_Cam_Live', {
      title: 'P2P Cam Live',
      uplink: '/Products/Usermanuals',
    });
});

/* ************************************ GET InstarVision für    Windows Phone /Other_Platforms *************** */
productRouter.route('/Software/Other_Platforms')
.get(function(req, res) {
  res.render('./Products/Other_Platforms', {
      title: 'Other Platforms',
      uplink: '/Products',
    });
});

productRouter.route('/Software/Other_Platforms/InstarVision_Blackberry')
.get(function(req, res) {
  res.render('./Products/Android_InstarVision_Blackberry', {
      title: 'InstarVision Blackberry',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Other_Platforms/QNAP')
.get(function(req, res) {
  res.render('./Products/Other_Platforms_QNAP', {
      title: 'QNAP',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Other_Platforms/Synology')
.get(function(req, res) {
  res.render('./Products/Other_Platforms_Synology', {
      title: 'Synology',
      uplink: '/Products/Usermanuals',
    });
});

productRouter.route('/Software/Other_Platforms/AVM_Fritzphone')
.get(function(req, res) {
  res.render('./Products/Other_Platforms_AVM_Fritzphone', {
      title: 'AVM Fritzphone',
      uplink: '/Products/Usermanuals',
    });
});

module.exports = productRouter;
