//(20[numberOne] is __ % of 100[numberTwo])
exports.getPercentage = (req, res, next)=>{
    const numberOne = req.body.numberOne;
    const numberTwo =req.body.numberTwo;

    res.status(200).json({
        output: (numberOne / numberTwo)*100 + "%",
    })
};

//(__ is 20%[numberOne] of 200[numberTwo])
exports.getNumber = (req, res, next)=>{
    const numberOne = req.body.numberOne;
    const numberTwo =req.body.numberTwo;

    res.status(200).json({
        output: (numberOne / 100)*numberTwo,
    })
};