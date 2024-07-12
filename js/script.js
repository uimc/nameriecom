const domain_names = {
  "akimbo.xyz": ["b", 19999], 
  "studious.xyz": ["b", 19999], 
  "000002.xyz": ["m", 0], 
  "000006.xyz": ["m", 0], 
  "tod.xyz": ["b", 9999], 
  "orc.xyz": ["b", 9999],
  "dab.xyz": ["b", 9999],
  "ron.xyz": ["m", 0],
  "itm.xyz": ["b", 9999],
  "2fa.xyz": ["b", 9999], 
  "uie.xyz": ["b", 9999],
  "dakimbo.com": ["m", 0],
  "savies.com": ["m", 0], 
  "uck.net": ["m", 0],
  "m4x.net": ["m", 0],
  "rpg.mobi": ["b", 1499],
  "p8.pw": ["b", 499], 
  "8d.pw": ["b", 499],   
  "iwnl.net": ["b", 499], 
  "irs.biz": ["b", 999],
  "profile.surf": ["b", 999], 
  "profile.casa": ["b", 999], 
  "profilesurf.com": ["b", 999],  
  "profilecasa.com": ["b", 999],
  "profile.social": ["m", 0], 
  "dappraise.com": ["m", 0], 
  "domainev.com": ["m", 0],
  "akimbos.com": ["m", 0],
  "dualakimbo.com": ["m", 0],
  "armsdeal.com": ["m", 0],
  "doton.org": ["b", 499],
  "nqe.us": ["b", 499],
  "profile.sn": ["m", 0],
  "bellryan.com": ["m", 0],
  "prfl.app": ["m", 0],
  "uie.net": ["m", 0],
  "satisfy.org": ["m", 0],
  "deluxo.com": ["m", 0]
};

let param = new URLSearchParams(location.search);
var url = param.get('url');
document.getElementById('urlid').innerHTML = url;
document.title = url.charAt(0).toUpperCase() + url.slice(1) + " is for sale!";
document.getElementById('urlid2').innerHTML = url.charAt(0).toUpperCase() + url.slice(1);

var isCaps = 0;

function capCheck() {
  if (isCaps == false) 
  {
    document.getElementById('urlid').innerHTML = url.toUpperCase();
    isCaps = true;
  }
  else if (isCaps == true) 
  {
    document.getElementById('urlid').innerHTML = url.toLowerCase();
    isCaps = false;
  }
  else 
  {
    document.getElementById('urlid').innerHTML = url;
  }
}

function binCheck() {
  if (!(url in domain_names))
  {
    document.getElementById('div-error').style.display = "inline-block";
    document.getElementById('div-banner').style.display = "none";
    document.getElementById('div-bin').style.display = "none";
    document.getElementById('div-offer').style.display = "none";
    document.getElementById('div-info').style.display = "none";
    return;
  }
  if (domain_names[url][0] == "m") 
  {
    document.getElementById('div-bin').style.display = "none";
    document.getElementById('bin-price-line').style.display = "none";
  }
  else if (domain_names[url][0] == "b") 
  {
    document.getElementById('bin-button').innerHTML = domain_names[url][1].toLocaleString();
  }
  
  document.getElementById('offer-price').setAttribute('value', domain_names[url][1]);
  document.getElementById('bin-price').setAttribute('value', domain_names[url][1]);
  document.getElementById('bin-img-title').setAttribute('src', "https://t.escrow.com/1px.gif?name=bin&price=" + domain_names[url][1] + "&title=" + url + "&user_id=2784092");
  document.getElementById('bin-name').setAttribute('value', url);
  document.getElementById('bin-title').setAttribute('value', url);
  document.getElementById('offer-name').setAttribute('value', url);
  document.getElementById('offer-title').setAttribute('value', url);
  document.getElementById('offer-img-title').setAttribute('src', "https://t.escrow.com/1px.gif?name=bin&price=0&title=" + url + "&user_id=2784092");
}

binCheck();
capCheck();