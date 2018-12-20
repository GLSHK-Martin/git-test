const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Welcome GLSHK'))

app.get("/api/Test", (req, res, next) => {

	var strJSON=
{"UserID":"K5SG","FeatureID":"1067","ConnID":"1812141605550001_WebAPI_TnT_webapk.com@PWEB138","Data":[{"ReqID":"a5c2d382-8a4e-4f4b-bfd6-e67572bbf3d3","SenderRef":"TESTING1234","FreightStatus":{"MsgID":59347143,"AWBPrefix":"618","AWBSuffix":"63148960","Origin":"SIN","Destination":"HYD","QDDescCode":"T","QDPieces":21,"QDWeightCode":"K","QDWeight":372.0,"TCPDescCode":"","TCPPieces":-1,"CreateDT":"2018-12-14T05:35:19","FreightStatusDetails":[{"DetailSeq":0,"StatusCode":"DLV","MDCarrierCode":"","MDFlightNum":"","MDDate":"2018-12-10T19:03:00","MDDayChgIndicator":"","MDPort1":"HYD","MDPort2":"","QDDescCode":"T","QDPieces":21,"QDWeightCode":"K","QDWeight":372.0,"DTType":"","DTTime":"","DTDayChgIndicator":"","ATType":"","ATTime":"","ATDayChgIndicator":"","DDCode":"","Name":"","ManifestNum":"","ULDType":"","ULDSerNo":"","ULDOwnerCode":"","OSILine1":"","OSILine2":"","VolumeCode":"","VolumeAmount":0.0,"DensityGroup":"","ULDLoadInd":"","FlightDay":"10","FlightMonth":"DEC","FlightTime":"1903","DepartTime":"","ArrivalTime":"","CarrierCode2":"","STDDay":-1,"STDMonth":"","DepPort":"","ArrPort":"","FreightStatusOCIs":[]},{"DetailSeq":1,"StatusCode":"DIS","MDCarrierCode":"","MDFlightNum":"","MDDate":"2018-12-03T00:00:00","MDDayChgIndicator":"","MDPort1":"HYD","MDPort2":"","QDDescCode":"T","QDPieces":21,"QDWeightCode":"K","QDWeight":372.0,"DTType":"","DTTime":"","DTDayChgIndicator":"","ATType":"","ATTime":"","ATDayChgIndicator":"","DDCode":"MSCA","Name":"","ManifestNum":"","ULDType":"","ULDSerNo":"","ULDOwnerCode":"","OSILine1":"","OSILine2":"","VolumeCode":"","VolumeAmount":0.0,"DensityGroup":"","ULDLoadInd":"","FlightDay":"03","FlightMonth":"DEC","FlightTime":"","DepartTime":"","ArrivalTime":"","CarrierCode2":"","STDDay":-1,"STDMonth":"","DepPort":"","ArrPort":"","FreightStatusOCIs":[]}]},"ResponseTypeCase":11}]} ;

var stringified = JSON.stringify(strJSON);

stringified = stringified.replace('"AWBPrefix":"618"', '"AWBPrefix":"999"');

 res.json(stringified);


});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
