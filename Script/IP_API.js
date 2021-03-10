if ($response.statusCode != 200) {
  $done(null);
}

const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']
var city0 = "中国大陆";
var isp0 = "Microsoft Azure CDN";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return city0
//emojis[getRandomInt(emojis.length)]
  }
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
//emojis[getRandomInt(emojis.length)]
  }
}

function Area_check(para) {
  if(para=="中华民国"){
  return "台湾"
  } else
  {
  return para
  }
}
var flags = new Map([[ "AC" , "" ] , [ "AF" , "" ] , [ "AI" , "" ] , [ "AL" , "" ] , [ "AM" , "" ] , [ "AQ" , "" ] , [ "AR" , "" ] , [ "AS" , "" ] , [ "AT" , "" ] , [ "AU" , "" ] , [ "AW" , "" ] , [ "AX" , "" ] , [ "AZ" , "" ] , [ "BB" , "" ] , [ "BD" , "" ] , [ "BE" , "" ] , [ "BF" , "" ] , [ "BG" , "" ] , [ "BH" , "" ] , [ "BI" , "" ] , [ "BJ" , "" ] , [ "BM" , "" ] , [ "BN" , "" ] , [ "BO" , "" ] , [ "BR" , "" ] , [ "BS" , "" ] , [ "BT" , "" ] , [ "BV" , "" ] , [ "BW" , "" ] , [ "BY" , "" ] , [ "BZ" , "" ] , [ "CA" , "" ] , [ "CF" , "" ] , [ "CH" , "" ] , [ "CK" , "" ] , [ "CL" , "" ] , [ "CM" , "" ] , [ "CN" , "" ] , [ "CO" , "" ] , [ "CP" , "" ] , [ "CR" , "" ] , [ "CU" , "" ] , [ "CV" , "" ] , [ "CW" , "" ] , [ "CX" , "" ] , [ "CY" , "" ] , [ "CZ" , "" ] , [ "DE" , "" ] , [ "DG" , "" ] , [ "DJ" , "" ] , [ "DK" , "" ] , [ "DM" , "" ] , [ "DO" , "" ] , [ "DZ" , "" ] , [ "EA" , "" ] , [ "EC" , "" ] , [ "EE" , "" ] , [ "EG" , "" ] , [ "EH" , "" ] , [ "ER" , "" ] , [ "ES" , "" ] , [ "ET" , "" ] , [ "EU" , "" ] , [ "FI" , "" ] , [ "FJ" , "" ] , [ "FK" , "" ] , [ "FM" , "" ] , [ "FO" , "" ] , [ "FR" , "" ] , [ "GA" , "" ] , [ "GB" , "" ] , [ "HK" , "" ] , [ "ID" , "" ] , [ "IE" , "" ] , [ "IL" , "" ] , [ "IM" , "" ] , [ "IN" , "" ] , [ "IS" , "" ] , [ "IT" , "" ] , [ "JP" , "" ] , [ "KR" , "" ] , [ "MO" , "" ] , [ "MX" , "" ] , [ "MY" , "" ] , [ "NL" , "" ] , [ "PH" , "" ] , [ "RO" , "" ] , [ "RS" , "" ] , [ "RU" , "" ] , [ "RW" , "" ] , [ "SA" , "" ] , [ "SB" , "" ] , [ "SC" , "" ] , [ "SD" , "" ] , [ "SE" , "" ] , [ "SG" , "" ] , [ "TH" , "" ] , [ "TN" , "" ] , [ "TO" , "" ] , [ "TR" , "" ] , [ "TV" , "" ] , [ "TW" , "" ] , [ "UK" , "" ] , [ "UM" , "" ] , [ "US" , "" ] , [ "UY" , "" ] , [ "UZ" , "" ] , [ "VA" , "" ] , [ "VE" , "" ] , [ "VG" , "" ] , [ "VI" , "" ] , [ "VN" , "" ] , [ "ZA" , ""]])
var body = $response.body;
var obj = JSON.parse(body);
var title =flags.get(obj['countryCode']) + ' '+ Area_check(obj['country']);
var subtitle =ISP_ValidCheck(obj['org']);
var ip = obj['query'];
var description = '服务商:'+obj['isp'] + '\n'+'地区:' +City_ValidCheck(obj['regionName'])+ '\n' + 'IP:'+ obj['query'] + '\n' +'时区:'+ obj['timezone'];
$done({title, subtitle, ip, description});
