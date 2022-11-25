const ClassExample = `
classDiagram
    PositionResponse <|-- Costs
    PositionResponse *-- DisplayAndFormat
    PositionResponse o-- Greeks : Synthetic
    PositionResponse <--> PositionBase : Dependency
    PositionResponse -- PositionView
    PositionResponse : +String NetPositionId 
    PositionResponse : +String PositionId
    class Costs{
      +String CloseCost
      +String CloseCostInBaseCurrency
      +String CurrencyCutPct
      +String OpenCost
      +String OpenCostInBaseCurrency
    }
    class DisplayAndFormat{
      +Int BarrierDecimals
      +String Currency
      +String Decimals
      +String Description
      +Int OrderDecimals
    }
    class Greeks{
      +String Delta
      +String Gamma
      +String InstrumentDelta
      +String InstrumentTheta
      +String MidVol
      +String Phi
    }
    class PositionBase{
      +String AccountId
      +String AccountKey
      +String Amount
      +String AssetType
    }
    class PositionView{
      +String Ask
      +String Bid
      +String CurrentPrice
      +String Exposure
      +String IndexRatio
      +String MarketState
    }
        
`;

export default ClassExample;