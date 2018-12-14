d3.json( 'data.json' ).then(function(data){
  generate(data);
})

function generate(dataset){
  createPersonGraph( '#graphic-age', dataset.age );
  createPersonGraph( '#graphic-race', dataset.race );
  createPersonGraph( '#graphic-gender', dataset.gender );
  // createCircleGraph( '#graphic-time-of-day', dataset.time );
  createCircleGraph( '#graphic-income', dataset.income );
}

function createCircleGraph( target, data ) {
  let width = 150
      height = 150
      pi = Math.PI;

  let el = d3.select( target )
  .selectAll( 'p' )
  .data( Object.keys(data) )
  .enter()
  .append( 'div' )
  .attr( 'class', 'circle col-4' )

  el.append( 'p' )
  .text( function( d ){
    return data[d].title;
  });

  // let arc = d3.arc()
  //             .innerRadius(50)
  //             .outerRadius(70)
  //             .startAngle(0)
  //             .endAngle( pi * 2 );

  function drawArc( percent ){
    let arc = d3.arc()
              .innerRadius(50)
              .outerRadius(70)
              .startAngle(0)
              .endAngle( pi * 2 * (percent/100) );
    return arc();
  }

  // drawArc( 37.1 );

  el.append( 'svg')
    .attr( 'height', '150px' )
    .attr( 'width', '150px' )
    .append( 'path')
    .attr( 'd', function(d){
      return drawArc( data[d].percent );
      // return d3.arc()
      //           .innerRadius(50)
      //           .outerRadius(70)
      //           .startAngle(0)
      //           .endAngle( pi * 2 * (data[d].percent / 100) );
    })
    // function(d){
    // drawArc( 37.1 )
    //   return drawArc( data[d].percent );
    // })
    .attr( 'fill', 'red' )
    .attr( 'transform', 'translate(75,75)' )

//   var arc = d3.svg.arc()
//     .innerRadius(50)
//     .outerRadius(70)
//     .startAngle(45 * (pi/180)) //converting from degs to radians
//     .endAngle(3) //just radians
//
// vis.attr("width", "400").attr("height", "400") // Added height and width so arc is visible
//     .append("path")
//     .attr("d", arc)
//     .attr("fill", "red")
//     .attr("transform", "translate(200,200)");

  // let pie = d3.pie();
  //
  // let circle = d3.arc()
  //             .innerRadius( 55 )
  //             .outerRadius( 60 );
  //
  // let svg = el.append( 'svg' )
  //             .attr( 'width', width )
  //             .attr( 'height', height )
  //             .attr( 'fill', 'blue' );
  //
  // let arc = svg.selectAll( 'g.arc' )
  //               .append( 'g' )
  //               .attr( 'class', 'arc' )
  //               .attr( 'transform', 'translate(' + 55 + ',' + height/2 + ')')
  //
  // arcs.append( 'path' )
  //     .attr( 'fill', 'blue' )
  //     .attr( 'd', arc );
  //
  // let arcs = svg.selectAll( 'g.arc' )
  //               .data( pie( Object.keys(data) ) )
  //               .enter()
  //               .append( 'g' )
  //               .attr( 'class', 'arc' )
  //               .attr( 'transform',
  //                       'translate(' + 55 + ',' + height / 2 + ')' )
  //
  // arcs.append( 'path' )
  //     .attr( 'fill', 'blue' )
  //     .attr( 'd', arc );
  //
  // arcs.append('text')
  //     .attr('transform', function(d, i){
  //       console.log( d );
  //       return "translate(" + arc.centroid(d) + ")";
  //     })
  //     .attr( 'text-anchor', 'text-middle' )
  //     .text(function(d){
  //       return d.value;
  //     });

  // let circleGraph = el.append( 'svg' );
  // 6-3

  el.append( 'p' )
  .text( function( d ){
    return data[d].percent;
  })
}

function createPersonGraph( target, data){
  let personIcon = "m 0.34647678,289.96481 h 8.785e-4 c 0.003833,0.40928 0.19080972,0.70411 0.59239329,0.70411 0.40158353,0 0.59296573,-0.27758 0.59296573,-0.70411 v -5.00823 c 0,0 -0.043308,-1.09056 0.3371961,-1.09058 0.3803796,-10e-6 0.3371962,1.09019 0.3371962,1.09019 v 4.36657 6.24841 c 0,0.39933 0.3245094,0.68495 0.7463872,0.71248 0.5018588,-0.009 0.7469508,-0.31315 0.7469508,-0.71248 v -6.24841 h 1.2891228 v 6.24663 c 0,0.40193 0.3474355,0.68764 0.7462759,0.71259 0.5020028,-0.009 0.7470629,-0.31148 0.7470629,-0.71259 v -6.24663 -0.0146 l 0,-4.3461 c 0,0 -0.062059,-1.10267 0.3206653,-1.10269 0.3827246,-2e-5 0.3206653,1.10229 0.3206653,1.10229 0,0.96793 7.601e-4,4.04746 7.601e-4,5.01631 0.00399,0.40923 0.2030597,0.70351 0.6123091,0.70358 0.4091621,-2.2e-4 0.5914968,-0.29444 0.5953858,-0.70358 h 7.6e-4 v -6.26123 c 0,-0.621 -0.6531675,-1.31464 -3.2130955,-1.42954 0.6841822,-0.32232 1.1211408,-1.0103 1.1220388,-1.7666 2.05e-5,-1.07992 -0.8753992,-1.95539 -1.9553183,-1.95543 -1.0799611,-2e-5 -1.9554464,0.87547 -1.9554259,1.95543 9.541e-4,0.76066 0.4429485,1.45174 1.1330826,1.77163 -2.47357277,0.12887 -3.11855438,0.81037 -3.11853281,1.42451 z"
  const personIconHeight = 18;
  const personIconWidth = 9.8;
  const scale = 2;

  let el = d3.select( target )
  .selectAll( 'p' )
  .data( Object.keys(data) )
  .enter()
  .append( 'div' )
  .attr( 'class', 'person' )

  el.append( 'p' )
  .text( function( d ){
    return data[d].title;
  })

  let iconBar = el.append( 'svg' )
                  .append( 'g' )

  for (let i = 1; i <= 10; i++){
    iconBar
      .attr( 'transform', 'translate( 0,' + scale * -277.59724 + ')')
      .append('path')
      .attr( 'transform', 'translate(' + i * scale * 10 + ', 0) scale(' + 2 + ')')
      .attr( 'd', personIcon )
      .attr( 'fill', function(d){
        if( (data[d].percent / 10) > i ){
          return 'blue'
        } else {
          return 'gray'
        }
      })

    iconBar.filter( function(d){
      return ( (data[d].percent / 10) - (i - 1) > 0
      && (data[d].percent / 10) - (i - 1) < 1 )
    })
    .append( 'defs')
    .append( 'clipPath' )
    .attr( 'id', function(d){
      return 'clipPath' + d + '' + i;
    })
    .append('path')
    .attr( 'transform', 'translate(' + i * scale * 10 + ', 0) scale(' + scale + ')' )
    // .attr( 'transform', 'scale(1.1)')
    .attr( 'd', personIcon )
    .attr( 'stroke-width', 2 )
    .attr( 'stroke', 'blue' )
    .attr( 'fill', 'none' )

    iconBar.filter( function(d){
      return ( (data[d].percent / 10) - (i - 1) > 0
      && (data[d].percent / 10) - (i - 1) < 1 )
    })
    .append( 'rect' )
    .attr( 'x', personIconWidth * scale + ( ( i - 1 ) * 10 * scale ) )
    .attr( 'y', 277.59724 * scale )
    .attr( 'height', personIconHeight * scale )
    .attr( 'width', function(d){
      // console.log( 20 * ((data[d].percent - ( (i-1) * 10 )) * 0.1) );
      return ( ( personIconWidth * scale ) * ((data[d].percent - ( (i-1) * 10 )) * 0.1) );
    })
    .attr( 'fill', 'blue' )
    .attr( 'clip-path', function(d){
      return ( 'url(#clipPath' + d + '' + i + ')' );
    })
  }

  el.append('p')
  .text( function( d ){
    return data[d].percent;
  })
}
