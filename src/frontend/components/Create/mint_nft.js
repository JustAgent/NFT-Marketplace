const daiToken = new web3.eth.Contract

daiToken.methods.mint('').call(function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    console.log("The balance is: ", res)
  })
  