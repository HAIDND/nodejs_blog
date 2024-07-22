

class  MarketController{
    //idex root
    index(req,res,next){
res.render('./show/market/home')
    }

}

const marketController = new MarketController();

export default marketController ;