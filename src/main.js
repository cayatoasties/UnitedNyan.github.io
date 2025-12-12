
/*anime({
  targets: '.box',
  translateX: [100, -100],
  translateY: "100",
  duration: 2000,   // 1 second
  easing: 'easeInOutQuad'
});







/* cat floating */
anime({
  targets: "#cat1",
  translateX: -500,
  translateY: 200,
  duration: 5000,
  easing: "easeInOutQuad"

});
/*cat sliding*/
anime({
  targets: "#cat2",
  translateY: [100, 1500],
  duration: 10000,
  easing: "easeInOutQuad",
  delay: 3000, 
  });

  /*cat hopping in a line*/
anime({
  targets: "#cat6",
  translateX: [-100, -300, -500],
  duration: 4000,
  easing: "easeOutBack(1.7)",
  loop: true,
  loopDelay: 1000
  });


/*cat gasp*/
anime({
  targets: "#cat4",
  scale: 1.5,
  duration: 2000,
  easing: "easeInOutQuint",
  });

  /*cat saying hi*/
anime({
  targets: "#cat5",
  translateX: [300, 700, 10, -80],
  duration: 2000,
  easing: "easeInOutBounce",
}) 

/*cat hopping randomly*/
anime({
  targets: "#cat3",
  translateY: [100, 125, 200, 400],
  translateX: [100, -50, -100, 200],
  duration: 3000, 
  easing: "easeInElastic(1, .7)",
  loop: true,
  loopDelay: 2000,
})
