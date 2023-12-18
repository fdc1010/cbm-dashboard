export const HousingTypes = ["", "Single house","Duplex","Multi-unit residential (three units or more)", "Commercial / Industrial / Agricultural building (office, factory and others)", "Other housing unit (boat, cave and others)"]

export const MadeTypes = ["","Strong materials (galvanized iron, aluminum, tile, concrete, brick, stone, asbestos)","Light materials (cogon, nipa, anahaw)","Salvaged/makeshift materials","Mixed but predominantly strong materials","Mixed but predominantly light materials","Mixed but predominantly salvaged materials","Not applicable"]

export const CbmOverviewData = [
  {
    id: "f69f88012978187a6c12897f",
    ref: "Apas",
    customer: {
      name: "Erika Sena",
    },
    createdAt: 1555016400000,
    status: "inprogress"
  },
  {
    id: "9eaa1c7dd4433f413c308ce2",
    ref: "Lahug",
    customer: {
      name: "Frank Carz",
    },
    createdAt: 1555016400000,
    status: "completed",
  },
  {
    id: "01a5230c811bd04996ce7c13",
    ref: "Apas",
    customer: {
      name: "Alexa Tolibao",
    },
    createdAt: 1554930000000,
    status: "flunk",
  },
  {
    id: "1f4e1bd0a87cea23cdb83d18",
    ref: "Talamban",
    customer: {
      name: "Steven Rusta",
    },
    createdAt: 1554757200000,
    status: "inprogress",
  },
  {
    id: "9f974f239d29ede969367103",
    ref: "Tisa",
    customer: {
      name: "Mark Tan",
    },
    createdAt: 1554670800000,
    status: "completed",
  },
  {
    id: "ffc83c1560ec2f66a1c05596",
    ref: "Labangon",
    customer: {
      name: "Lea Reyes",
    },
    createdAt: 1554670800000,
    status: "completed",
  },
]

export const HousingCharacteristicsData = [
  {
    id: CbmOverviewData[0].id,
    ref: CbmOverviewData[0].ref,
    housing_characteristics: {
      type: HousingTypes[1], 
      bedrooms: "2",
      roof: MadeTypes[5],
      outerwall: MadeTypes[3]
    },
    createdAt: CbmOverviewData[0].createdAt,
    status: CbmOverviewData[0].status,
  },
  {
    id: CbmOverviewData[1].id,
    ref: CbmOverviewData[1].ref,
    housing_characteristics: {
      type: HousingTypes[1], 
      bedrooms: "2",
      roof: MadeTypes[5],
      outerwall: MadeTypes[3]
    },
    createdAt: CbmOverviewData[1].createdAt,
    status: CbmOverviewData[1].status,
  },
  {
    id: CbmOverviewData[2].id,
    ref: CbmOverviewData[2].ref,
    housing_characteristics: {
      type: HousingTypes[1], 
      bedrooms: "2",
      roof: MadeTypes[5],
      outerwall: MadeTypes[3]
    },
    createdAt: CbmOverviewData[2].createdAt,
    status: CbmOverviewData[2].status,
  },
  {
    id: CbmOverviewData[3].id,
    ref: CbmOverviewData[3].ref,
    housing_characteristics: {
      type: HousingTypes[1], 
      bedrooms: "2",
      roof: MadeTypes[5],
      outerwall: MadeTypes[3]
    },
    createdAt: CbmOverviewData[3].createdAt,
    status: CbmOverviewData[3].status,
  },
  {
    id: CbmOverviewData[4].id,
    ref: CbmOverviewData[4].ref,
    housing_characteristics: {
      type: HousingTypes[1], 
      bedrooms: "2",
      roof: MadeTypes[5],
      outerwall: MadeTypes[3]
    },
    createdAt: CbmOverviewData[4].createdAt,
    status: CbmOverviewData[4].status,
  },
  {
    id: CbmOverviewData[5].id,
    ref: CbmOverviewData[5].ref,
    housing_characteristics: {
      type: HousingTypes[1], 
      bedrooms: "2",
      roof: MadeTypes[5],
      outerwall: MadeTypes[3]
    },
    createdAt: CbmOverviewData[5].createdAt,
    status: CbmOverviewData[5].status,
  },
]

export const HouseholdCharacteristicsData = [
  {
    id: CbmOverviewData[0].id,
    ref: CbmOverviewData[0].ref,
    characteristics: {
      nuclear: "2",
      overseas: "0",
      solo_parent: "",
      pregnant: "",
      disabled: ""
    },
    createdAt: CbmOverviewData[0].createdAt,
    status: CbmOverviewData[0].status,
  },
  {
    id: CbmOverviewData[1].id,
    ref: CbmOverviewData[1].ref,
    characteristics: {
      nuclear: "2",
      overseas: "0",
      solo_parent: "",
      pregnant: "",
      disabled: ""
    },
    createdAt: CbmOverviewData[1].createdAt,
    status: CbmOverviewData[1].status,
  },
  {
    id: CbmOverviewData[2].id,
    ref: CbmOverviewData[2].ref,
    characteristics: {
      nuclear: "2",
      overseas: "0",
      solo_parent: "",
      pregnant: "",
      disabled: ""
    },
    createdAt: CbmOverviewData[2].createdAt,
    status: CbmOverviewData[2].status,
  },
  {
    id: CbmOverviewData[3].id,
    ref: CbmOverviewData[3].ref,
    characteristics: {
      nuclear: "2",
      overseas: "0",
      solo_parent: "",
      pregnant: "",
      disabled: ""
    },
    createdAt: CbmOverviewData[3].createdAt,
    status: CbmOverviewData[3].status,
  },
  {
    id: CbmOverviewData[4].id,
    ref: CbmOverviewData[4].ref,
    characteristics: {
      nuclear: "2",
      overseas: "0",
      solo_parent: "",
      pregnant: "",
      disabled: ""
    },
    createdAt: CbmOverviewData[4].createdAt,
    status: CbmOverviewData[4].status,
  },
  {
    id: CbmOverviewData[5].id,
    ref: CbmOverviewData[5].ref,
    characteristics: {
      nuclear: "2",
      overseas: "0",
      solo_parent: "",
      pregnant: "",
      disabled: ""
    },
    createdAt: CbmOverviewData[5].createdAt,
    status: CbmOverviewData[5].status,
  },
]

export const DemographyData = [
  {
    id: CbmOverviewData[0].id,
    ref: CbmOverviewData[0].ref,
    demography: {
      relation: "",
      marital: ""
    },
    createdAt: CbmOverviewData[0].createdAt,
    status: CbmOverviewData[0].status,
  },
  {
    id: CbmOverviewData[1].id,
    ref: CbmOverviewData[1].ref,
    demography: {
      relation: "",
      marital: ""
    },
    createdAt: CbmOverviewData[1].createdAt,
    status: CbmOverviewData[1].status,
  },
  {
    id: CbmOverviewData[2].id,
    ref: CbmOverviewData[2].ref,
    demography: {
      relation: "",
      marital: ""
    },
    createdAt: CbmOverviewData[2].createdAt,
    status: CbmOverviewData[2].status,
  },
  {
    id: CbmOverviewData[3].id,
    ref: CbmOverviewData[3].ref,
    demography: {
      relation: "",
      marital: ""
    },
    createdAt: CbmOverviewData[3].createdAt,
    status: CbmOverviewData[3].status,
  },
  {
    id: CbmOverviewData[4].id,
    ref: CbmOverviewData[4].ref,
    demography: {
      relation: "",
      marital: ""
    },
    createdAt: CbmOverviewData[4].createdAt,
    status: CbmOverviewData[4].status,
  },
  {
    id: CbmOverviewData[5].id,
    ref: CbmOverviewData[5].ref,
    demography: {
      relation: "",
      marital: ""
    },
    createdAt: CbmOverviewData[5].createdAt,
    status: CbmOverviewData[5].status,
  },
]

export const LiteracyData = [
  {
    id: CbmOverviewData[0].id,
    ref: CbmOverviewData[0].ref,
    literacy: {
      grade: "",
      reason: ""
    },
    createdAt: CbmOverviewData[0].createdAt,
    status: CbmOverviewData[0].status,
  },
  {
    id: CbmOverviewData[1].id,
    ref: CbmOverviewData[1].ref,
    literacy: {
      grade: "",
      reason: ""
    },
    createdAt: CbmOverviewData[1].createdAt,
    status: CbmOverviewData[1].status,
  },
  {
    id: CbmOverviewData[2].id,
    ref: CbmOverviewData[2].ref,
    literacy: {
      grade: "",
      reason: ""
    },
    createdAt: CbmOverviewData[2].createdAt,
    status: CbmOverviewData[2].status,
  },
  {
    id: CbmOverviewData[3].id,
    ref: CbmOverviewData[3].ref,
    literacy: {
      grade: "",
      reason: ""
    },
    createdAt: CbmOverviewData[3].createdAt,
    status: CbmOverviewData[3].status,
  },
  {
    id: CbmOverviewData[4].id,
    ref: CbmOverviewData[4].ref,
    literacy: {
      grade: "",
      reason: ""
    },
    createdAt: CbmOverviewData[4].createdAt,
    status: CbmOverviewData[4].status,
  },
  {
    id: CbmOverviewData[5].id,
    ref: CbmOverviewData[5].ref,
    literacy: {
      grade: "",
      reason: ""
    },
    createdAt: CbmOverviewData[5].createdAt,
    status: CbmOverviewData[5].status,
  },
]

export const PoliticalParticipationData = [
  {
    id: CbmOverviewData[0].id,
    ref: CbmOverviewData[0].ref,    
    political: {
      registered_voter: "",
      voted_last_election: ""
    },
    createdAt: CbmOverviewData[0].createdAt,
    status: CbmOverviewData[0].status,
  },
  {
    id: CbmOverviewData[1].id,
    ref: CbmOverviewData[1].ref,    
    political: {
      registered_voter: "",
      voted_last_election: ""
    },
    createdAt: CbmOverviewData[1].createdAt,
    status: CbmOverviewData[1].status,
  },
  {
    id: CbmOverviewData[2].id,
    ref: CbmOverviewData[2].ref,   
    political: {
      registered_voter: "",
      voted_last_election: ""
    },
    createdAt: CbmOverviewData[2].createdAt,
    status: CbmOverviewData[2].status,
  },
  {
    id: CbmOverviewData[3].id,
    ref: CbmOverviewData[3].ref,    
    political: {
      registered_voter: "",
      voted_last_election: ""
    },
    createdAt: CbmOverviewData[3].createdAt,
    status: CbmOverviewData[3].status,
  },
  {
    id: CbmOverviewData[4].id,
    ref: CbmOverviewData[4].ref,    
    political: {
      registered_voter: "",
      voted_last_election: ""
    },
    createdAt: CbmOverviewData[4].createdAt,
    status: CbmOverviewData[4].status,
  },
  {
    id: CbmOverviewData[5].id,
    ref: CbmOverviewData[5].ref,  
    political: {
      registered_voter: "",
      voted_last_election: ""
    },
    createdAt: CbmOverviewData[5].createdAt,
    status: CbmOverviewData[5].status,
  },
]

export const EconomicActivityData = [
  {
    id: CbmOverviewData[0].id,
    ref: CbmOverviewData[0].ref,    
    economic: {
      worked: "",
      not: ""
    },
    createdAt: CbmOverviewData[0].createdAt,
    status: CbmOverviewData[0].status,
  },
  {
    id: CbmOverviewData[1].id,
    ref: CbmOverviewData[1].ref,    
    economic: {
      worked: "",
      not: ""
    },
    createdAt: CbmOverviewData[1].createdAt,
    status: CbmOverviewData[1].status,
  },
  {
    id: CbmOverviewData[2].id,
    ref: CbmOverviewData[2].ref,    
    economic: {
      worked: "",
      not: ""
    },
    createdAt: CbmOverviewData[2].createdAt,
    status: CbmOverviewData[2].status,
  },
  {
    id: CbmOverviewData[3].id,
    ref: CbmOverviewData[3].ref,    
    economic: {
      worked: "",
      not: ""
    },
    createdAt: CbmOverviewData[3].createdAt,
    status: CbmOverviewData[3].status,
  },
  {
    id: CbmOverviewData[4].id,
    ref: CbmOverviewData[4].ref,    
    economic: {
      worked: "",
      not: ""
    },
    createdAt: CbmOverviewData[4].createdAt,
    status: CbmOverviewData[4].status,
  },
  {
    id: CbmOverviewData[5].id,
    ref: CbmOverviewData[5].ref,    
    economic: {
      worked: "",
      not: ""
    },
    createdAt: CbmOverviewData[5].createdAt,
    status: CbmOverviewData[5].status,
  },
]

export const ByBrgy = [
  {
    id: "f69f88012978187a6c12897f",
    ref: "Apas",
    amount: 30.5,
    customer: {
      name: "Erika Sena",
    },
    housing_characteristics: {
      type: HousingTypes[1], 
      bedrooms: "2",
      roof: MadeTypes[5],
      outerwall: MadeTypes[3]
    },
    characteristics: {
      nuclear: "2",
      overseas: "0",
      solo_parent: "",
      pregnant: "",
      disabled: ""
    },
    demography: {
      relation: "",
      marital: ""
    },
    literacy: {
      grade: "",
      reason: ""
    },
    political: {
      registered_voter: "",
      voted_last_election: ""
    },
    economic: {
      worked: "",
      not: ""
    },
    health: "",
    crime: "",
    nutrition: "",
    sanitation: "",
    housing: "",
    waste_management: "",
    income: "",
    entrepreneurial: "",
    agricultural: "",
    livestock: "",
    fishing: "",
    climate: "",
    hunger: "",
    deceased: "",
    programs: "",
    createdAt: 1555016400000,
    status: "inprogress",
  },
  {
    id: "9eaa1c7dd4433f413c308ce2",
    ref: "Lahug",
    amount: 25.1,
    customer: {
      name: "Frank Carz",
    },
    characteristics: '',
    demography: '',
    literacy: '',
    political: '',
    economic: '',
    createdAt: 1555016400000,
    status: "completed",
  },
  {
    id: "01a5230c811bd04996ce7c13",
    ref: "Apas",
    amount: 10.99,
    customer: {
      name: "Alexa Tolibao",
    },
    characteristics: '',
    demography: '',
    literacy: '',
    political: '',
    economic: '',
    createdAt: 1554930000000,
    status: "flunk",
  },
  {
    id: "1f4e1bd0a87cea23cdb83d18",
    ref: "Talamban",
    amount: 96.43,
    customer: {
      name: "Steven Rusta",
    },
    characteristics: '',
    demography: '',
    literacy: '',
    political: '',
    economic: '',
    createdAt: 1554757200000,
    status: "inprogress",
  },
  {
    id: "9f974f239d29ede969367103",
    ref: "Tisa",
    amount: 32.54,
    customer: {
      name: "Mark Tan",
    },
    characteristics: '',
    demography: '',
    literacy: '',
    political: '',
    economic: '',
    createdAt: 1554670800000,
    status: "completed",
  },
  {
    id: "ffc83c1560ec2f66a1c05596",
    ref: "Labangon",
    amount: 16.76,
    customer: {
      name: "Lea Reyes",
    },
    characteristics: '',
    demography: '',
    literacy: '',
    political: '',
    economic: '',
    createdAt: 1554670800000,
    status: "completed",
  },
]