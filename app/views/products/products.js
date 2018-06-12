

var currentProduct = {};

$(document).ready( function() {
  
    
    $.ajax({
      url: ' http://json-server.devpointlabs.com/api/v1/products'
      method: 'GET',
      dataType: 'JSON'
    }).done( function(products) {

      products.forEach( function(products) {
        var li = '<li>' + products.name + '</li>'
        debugger
        $('.product-list').append(li)
      });
    });
  });
});


