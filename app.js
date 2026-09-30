
const STATES={
'Andaman and Nicobar Islands':['Port Blair'],'Andhra Pradesh':['Visakhapatnam','Vijayawada','Guntur','Tirupati','Nellore','Kurnool','Rajahmundry','Kakinada','Anantapur'],'Arunachal Pradesh':['Itanagar','Naharlagun','Pasighat','Tawang'],'Assam':['Guwahati','Dibrugarh','Silchar','Jorhat','Tezpur'],'Bihar':['Patna','Gaya','Muzaffarpur','Bhagalpur','Darbhanga'],'Chandigarh':['Chandigarh'],'Chhattisgarh':['Raipur','Bhilai','Durg','Bilaspur','Korba'],'Dadra and Nagar Haveli and Daman and Diu':['Daman','Diu','Silvassa'],'Delhi':['New Delhi','Delhi','Dwarka','Rohini','Saket'],'Goa':['Panaji','Margao','Vasco da Gama','Mapusa','Ponda'],'Gujarat':['Ahmedabad','Surat','Vadodara','Rajkot','Gandhinagar','Bhavnagar','Jamnagar','Junagadh'],'Haryana':['Gurugram','Faridabad','Panchkula','Ambala','Panipat','Karnal','Hisar','Rohtak'],'Himachal Pradesh':['Shimla','Dharamshala','Solan','Mandi','Manali'],'Jammu and Kashmir':['Srinagar','Jammu','Anantnag','Baramulla'],'Jharkhand':['Ranchi','Jamshedpur','Dhanbad','Bokaro','Deoghar'],'Karnataka':['Bengaluru','Mysuru','Mangaluru','Hubballi','Belagavi','Kalaburagi','Shivamogga','Davanagere'],'Kerala':['Thiruvananthapuram','Kochi','Kozhikode','Thrissur','Kollam','Kannur','Kottayam','Alappuzha'],'Ladakh':['Leh','Kargil'],'Lakshadweep':['Kavaratti'],'Madhya Pradesh':['Bhopal','Indore','Jabalpur','Gwalior','Ujjain','Sagar'],'Maharashtra':['Mumbai','Pune','Nagpur','Nashik','Thane','Navi Mumbai','Aurangabad','Solapur','Kolhapur','Amravati','Sangli','Satara','Baramati','Panvel','Dombivli','Pandharpur'],'Manipur':['Imphal'],'Meghalaya':['Shillong','Tura'],'Mizoram':['Aizawl','Lunglei'],'Nagaland':['Kohima','Dimapur'],'Odisha':['Bhubaneswar','Cuttack','Rourkela','Puri','Sambalpur','Berhampur'],'Puducherry':['Puducherry','Karaikal'],'Punjab':['Ludhiana','Amritsar','Jalandhar','Patiala','Mohali','Bathinda'],'Rajasthan':['Jaipur','Jodhpur','Udaipur','Kota','Ajmer','Bikaner','Alwar'],'Sikkim':['Gangtok'],'Tamil Nadu':['Chennai','Coimbatore','Madurai','Tiruchirappalli','Salem','Tiruppur','Vellore','Erode','Thanjavur'],'Telangana':['Hyderabad','Warangal','Nizamabad','Karimnagar','Khammam'],'Tripura':['Agartala'],'Uttar Pradesh':['Lucknow','Noida','Ghaziabad','Kanpur','Varanasi','Agra','Prayagraj','Meerut','Bareilly','Gorakhpur','Mathura'],'Uttarakhand':['Dehradun','Haridwar','Rishikesh','Haldwani','Roorkee'],'West Bengal':['Kolkata','Howrah','Siliguri','Durgapur','Asansol','Darjeeling']};

const COUNTRY_DATA={
  'India':STATES,
  'USA':{
    'New York':['New York City','Buffalo','Rochester','Albany'],
    'California':['Los Angeles','San Francisco','San Diego','Sacramento'],
    'Texas':['Houston','Dallas','Austin','San Antonio'],
    'Florida':['Miami','Orlando','Tampa','Jacksonville'],
    'Illinois':['Chicago','Springfield'],
    'Massachusetts':['Boston','Cambridge'],
    'Washington':['Seattle','Tacoma'],
    'Pennsylvania':['Philadelphia','Pittsburgh'],
    'Georgia':['Atlanta','Savannah'],
    'Arizona':['Phoenix','Tucson']
  },
  'UK':{
    'England':['London','Birmingham','Manchester','Liverpool','Leeds','Bristol','Newcastle','Nottingham'],
    'Scotland':['Edinburgh','Glasgow','Aberdeen','Dundee'],
    'Wales':['Cardiff','Swansea','Newport'],
    'Northern Ireland':['Belfast','Derry']
  },
  'Brazil':{
    'São Paulo':['São Paulo','Campinas','Santos','Jundiaí'],
    'Rio de Janeiro':['Rio de Janeiro','Niterói'],
    'Minas Gerais':['Belo Horizonte','Uberlândia'],
    'Paraná':['Curitiba','Londrina'],
    'Rio Grande do Sul':['Porto Alegre','Caxias do Sul'],
    'Bahia':['Salvador','Feira de Santana'],
    'Distrito Federal':['Brasília']
  },
  'China':{
    'Beijing':['Beijing'],'Shanghai':['Shanghai'],
    'Guangdong':['Guangzhou','Shenzhen','Dongguan'],
    'Sichuan':['Chengdu'],'Zhejiang':['Hangzhou','Ningbo'],
    'Jiangsu':['Nanjing','Suzhou'],'Hubei':['Wuhan'],'Shaanxi':['Xi’an']
  },
  'Russia':{
    'Moscow':['Moscow'],'Saint Petersburg':['Saint Petersburg'],
    'Moscow Oblast':['Khimki','Balashikha','Odintsovo'],
    'Tatarstan':['Kazan'],'Krasnodar Krai':['Krasnodar','Sochi'],
    'Sverdlovsk Oblast':['Yekaterinburg'],'Novosibirsk Oblast':['Novosibirsk']
  },
  'Mexico':{
    'Ciudad de México':['Mexico City'],
    'Estado de México':['Toluca','Naucalpan','Ecatepec'],
    'Jalisco':['Guadalajara','Zapopan'],'Nuevo León':['Monterrey'],
    'Puebla':['Puebla'],'Querétaro':['Santiago de Querétaro'],'Guanajuato':['León','Guanajuato']
  },
  'Japan':{
    'Tokyo':['Tokyo'],'Osaka':['Osaka'],'Kanagawa':['Yokohama','Kawasaki'],
    'Aichi':['Nagoya'],'Hokkaido':['Sapporo'],'Fukuoka':['Fukuoka'],
    'Hyogo':['Kobe'],'Kyoto':['Kyoto']
  },
  'Germany':{
    'Berlin':['Berlin'],'Bavaria':['Munich','Nuremberg'],
    'North Rhine-Westphalia':['Cologne','Düsseldorf','Dortmund'],
    'Baden-Württemberg':['Stuttgart','Heidelberg'],'Hesse':['Frankfurt','Wiesbaden'],
    'Hamburg':['Hamburg'],'Lower Saxony':['Hanover'],'Saxony':['Dresden','Leipzig']
  },
  'Argentina':{
    'Buenos Aires (CABA)':['Buenos Aires'],
    'Buenos Aires Province':['La Plata','Mar del Plata'],
    'Córdoba':['Córdoba'],'Santa Fe':['Rosario','Santa Fe'],
    'Mendoza':['Mendoza'],'Tucumán':['San Miguel de Tucumán']
  }
};
const COUNTRY_CODES={'India':'in','USA':'us','UK':'gb','Brazil':'br','China':'cn','Russia':'ru','Mexico':'mx','Japan':'jp','Germany':'de','Argentina':'ar'};
const DEFAULT_COUNTRY='India';

const seed=[
{type:'Rescuer',name:'Bezuban Charitable Trust',state:'Gujarat',city:'Ahmedabad',phones:['+91 88664 21316'],address:'Ahmedabad, Gujarat',open24:true,services:['Animal emergency','Ambulance'],source:'https://www.bezubancharitabletrust.com/'},
{type:'Rescuer',name:'Asha and Pets Foundation',state:'Gujarat',city:'Ahmedabad',phones:['+91 97141 06509','+91 98796 65656'],address:'Satellite, Ahmedabad, Gujarat',open24:false,services:['Rescue','Animal care'],source:'https://ashaandpets.org/Contact%20us.html'},
{type:'Vet',name:'Jivdaya Charitable Trust',state:'Gujarat',city:'Ahmedabad',phones:['+91 99244 18184'],address:'Ahmedabad Panjrapol Campus, Ambawadi, Ahmedabad',open24:false,services:['Hospital','Street animals','Rehabilitation'],source:'https://www.jivdayatrust.org/contact'},
{type:'Rescuer',name:'CUPA Trauma & Rescue Centre',state:'Karnataka',city:'Bengaluru',phones:['+91 98454 25678','080 22947300'],address:'Veterinary College Campus, Bellary Road, Hebbal, Bengaluru',open24:false,services:['Rescue','Ambulance','Street animals'],source:'https://cupabangalore.org/trauma-rescue-centre/'},
{type:'Vet',name:'CUPA Small Animal Specialty Hospital',state:'Karnataka',city:'Bengaluru',phones:['+91 91088 55888','080 22947312','080 22947313'],address:'R.T. Nagar, Bengaluru, Karnataka',open24:false,services:['Vet','Surgery','Diagnostics','Pharmacy'],source:'https://cupabangalore.org/small-animal-specialty-hospital/'},
{type:'Shelter',name:'Sarvoham Animal Foundation',state:'Karnataka',city:'Bengaluru',phones:['1800 102 8032'],address:'JP Nagar, Bengaluru, Karnataka',open24:false,services:['Shelter','Rescue'],source:'https://sarvoham.org/'},
{type:'Rescuer',name:'SPCA Chandigarh',state:'Chandigarh',city:'Chandigarh',phones:['0172 2696450','0172 2696491'],address:'Chandigarh',open24:false,services:['Animal welfare','Hospital'],source:'https://chandigarh.gov.in/helpline'},
{type:'Rescuer',name:'MowgliAid Animal Rescue Ambulance',state:'Chandigarh',city:'Chandigarh',phones:['+91 80549 11911'],address:'Chandigarh Tricity',open24:false,services:['Animal rescue','Ambulance'],source:'https://mowgliaid.org/'},
{type:'Rescuer',name:'The Bhau Project',state:'Chandigarh',city:'Chandigarh',phones:['+91 88470 08090'],address:'Chandigarh Tricity',open24:false,services:['Animal rescue','Ambulance'],source:'https://thebhauproject.com/'},
{type:'Rescuer',name:'Blue Cross of India',state:'Tamil Nadu',city:'Chennai',phones:['+91 99629 98886'],address:'Chennai, Tamil Nadu',open24:false,services:['Rescue requests','Animal welfare'],source:'http://bluecrossofindia.org/'},
{type:'Shelter',name:'Animal Care Trust Chennai',state:'Tamil Nadu',city:'Chennai',phones:['+91 90031 50947'],address:'New Washermenpet, Chennai',open24:false,services:['Shelter','Animal care'],source:'https://animalrehab.org/'},
{type:'Vet',name:'Tamil Nadu Animal Welfare Board Help Desk',state:'Tamil Nadu',city:'Chennai',phones:['044 24575701','1962'],address:'Thiruvanmiyur, Chennai, Tamil Nadu',open24:false,services:['Animal welfare help desk','Emergency call route'],source:'https://tnawb.tn.gov.in/contact-us'},
{type:'Rescuer',name:'Humane Animal Society',state:'Tamil Nadu',city:'Coimbatore',phones:['+91 93661 27215','+91 97915 32266'],address:'Coimbatore, Tamil Nadu',open24:false,services:['Rescue','Ambulance','ABC'],source:'https://hasindia.org/'},
{type:'Rescuer',name:'The Pawsome People Project',state:'Tamil Nadu',city:'Coimbatore',phones:['+91 99408 54800'],address:'Avinashi Road, Coimbatore, Tamil Nadu',open24:false,services:['Street dog rescue','Treatment'],source:'https://pawsomepeople.org/contact'},
{type:'Vet',name:'Animal Husbandry Department, Coimbatore',state:'Tamil Nadu',city:'Coimbatore',phones:['0422 2381900'],address:'Veterinary Poly Clinic campus, Town Hall, Coimbatore',open24:false,services:['Government veterinary office'],source:'https://coimbatore.nic.in/animal-husbandry-department-2/'},
{type:'Vet',name:'Sanjay Gandhi Animal Care Centre',state:'Delhi',city:'Delhi',phones:['+91 95608 02425','+91 88823 25407'],address:'Delhi',open24:true,services:['24-hour OPD','Animal ambulance'],source:'https://sanjaygandhianimalcarecentre.org/'},
{type:'Rescuer',name:'Friendicoes SECA Delhi',state:'Delhi',city:'Delhi',phones:['011 35712913','011 35712939','+91 88829 31057'],address:'Defence Colony Flyover Market, New Delhi',open24:false,services:['Rescue','Ambulance','Shelter'],source:'https://friendicoes.org/'},
{type:'Shelter',name:'Sonadi Charitable Trust',state:'Delhi',city:'Delhi',phones:['+91 92127 97696','+91 98100 54693'],address:'Najafgarh, Delhi',open24:false,services:['Shelter','Animal welfare'],source:'https://sonadicharitabletrust.org/'},
{type:'Rescuer',name:'Friendicoes SECA Gurugram',state:'Haryana',city:'Gurugram',phones:['+91 70277 77951','+91 70277 77946'],address:'Sector 99, Gurugram, Haryana',open24:false,services:['Rescue','Ambulance'],source:'https://friendicoes.org/'},
{type:'Shelter',name:'Umeed For Animals Foundation',state:'Haryana',city:'Gurugram',phones:['+91 99999 56541'],address:'Gurugram, Haryana',open24:false,services:['Rehabilitation','Animal rescue'],source:'https://umeedforanimals.org/'},
{type:'Rescuer',name:'Municipal Corporation Gurugram Emergency',state:'Haryana',city:'Gurugram',phones:['1800 180 1817'],address:'Gurugram, Haryana',open24:true,services:['Municipal emergency','Ask for veterinary section'],source:'https://www.mcg.gov.in/'},
{type:'Rescuer',name:'People For Animals Hyderabad',state:'Telangana',city:'Hyderabad',phones:['+91 73374 50643','+91 94901 49601','+91 73309 62323'],address:'Hyderabad / Secunderabad, Telangana',open24:true,services:['Sick & injured animals','Cruelty complaints'],source:'https://pfahyd.org/contact/'},
{type:'Shelter',name:'Blue Cross of Hyderabad',state:'Telangana',city:'Hyderabad',phones:['+91 88866 76074'],address:'Jubilee Hills, Hyderabad, Telangana',open24:false,services:['Shelter','Animal welfare'],source:'https://bluecrossofhyd.org/'},
{type:'Rescuer',name:'AASRA Hyderabad',state:'Telangana',city:'Hyderabad',phones:['+91 78939 93955','+91 99498 72527'],address:'Bowrampet, Hyderabad, Telangana',open24:false,services:['Rescue','Animal care'],source:'https://weaasra.org/'},
{type:'Rescuer',name:'Arham Always Care Animal Ambulance',state:'Madhya Pradesh',city:'Indore',phones:['+91 89890 80848'],address:'Indore, Madhya Pradesh',open24:false,services:['Animal ambulance','Rescue'],source:'https://alwayscare.arham.org/'},
{type:'Shelter',name:'Jasraj Animal Shelter',state:'Madhya Pradesh',city:'Indore',phones:['+91 87706 72085'],address:'Near Rau Bypass, Indore, Madhya Pradesh',open24:false,services:['Shelter','Rescue','Treatment'],source:'https://www.facebook.com/jasrajanimalsheltertaws'},
{type:'Vet',name:'Animal Husbandry Department, Indore',state:'Madhya Pradesh',city:'Indore',phones:['0731 2380967','0731 2386669'],address:'M.O.G. Lines, Mhow Naka, Indore',open24:false,services:['Government veterinary department'],source:'https://indore.nic.in/en/animal-husbandry/'},
{type:'Rescuer',name:'Help in Suffering',state:'Rajasthan',city:'Jaipur',phones:['+91 81072 99711'],address:'Maharani Farm, Durgapura, Jaipur',open24:false,services:['Animal rescue','Treatment'],source:'https://helpinsuffering.org/'},
{type:'Rescuer',name:'Dakash Animal Welfare Foundation',state:'Rajasthan',city:'Jaipur',phones:['+91 96944 71194'],address:'Niwaru Road, Jaipur, Rajasthan',open24:true,services:['Emergency rescue','Shelter'],source:'https://www.dakashanimalwelfarefoundation.com/contact'},
{type:'Rescuer',name:'Jaipur Animal Welfare Association',state:'Rajasthan',city:'Jaipur',phones:['+91 99839 04242','+91 88753 33397'],address:'Jaipur, Rajasthan',open24:false,services:['Animal welfare guidance'],source:'https://www.jaipuranimalwelfareassociation.org/'},
{type:'Rescuer',name:'Animal Rescue Kochi',state:'Kerala',city:'Kochi',phones:['+91 97477 73950'],address:'Kochi, Kerala',open24:false,services:['Animal rescue','Immediate assistance'],source:'https://animalrescuekochi.org/'},
{type:'Rescuer',name:'DAYA Animal Welfare Organisation',state:'Kerala',city:'Kochi',phones:['+91 62384 17127'],address:'Ernakulam district, Kerala',open24:false,services:['Rescue','Relief','Rehabilitation'],source:'https://dayaawo.org/'},
{type:'Vet',name:'Kerala Mobile Veterinary Units',state:'Kerala',city:'Kochi',phones:['1962'],address:'Kerala statewide service',open24:true,services:['Mobile veterinary unit','Livestock emergency'],source:'https://ahd.kerala.gov.in/mobile-veterinary-unit/'},
{type:'Rescuer',name:'Animal Rescue and Care Kolkata',state:'West Bengal',city:'Kolkata',phones:['+91 78905 35353','+91 78908 38383'],address:'Kolkata, West Bengal',open24:false,services:['Rescue','Ambulance'],source:'https://www.arckolkata.org/'},
{type:'Rescuer',name:'Love N Care For Animals',state:'West Bengal',city:'Kolkata',phones:['+91 94330 75715','+91 98300 37693'],address:'Kolkata, West Bengal',open24:false,services:['Street animals','Rescue'],source:'https://www.lovencareforanimals.co.in/'},
{type:'Vet',name:'PRCA Chhaya Animal Hospital & Shelter',state:'West Bengal',city:'Kolkata',phones:['+91 98302 11138','+91 98302 79138'],address:'Kolkata, West Bengal',open24:false,services:['Hospital','Shelter','Rescue'],source:'https://prca-chhaya.in/'},
{type:'Rescuer',name:'Lucknow Nagar Nigam Control Room',state:'Uttar Pradesh',city:'Lucknow',phones:['1533','+91 92199 02911','+91 92199 02912'],address:'Lucknow, Uttar Pradesh',open24:false,services:['Municipal control room','Ask for animal/veterinary help'],source:'https://lmc.up.nic.in/helpline.aspx'},
{type:'Rescuer',name:'Indu Sewa Sansthan',state:'Uttar Pradesh',city:'Lucknow',phones:['+91 98382 22033','+91 98394 22033'],address:'Gomti Nagar, Lucknow, Uttar Pradesh',open24:false,services:['Stray rescue','Protection centre'],source:'https://igssngo.com/contact'},
{type:'Shelter',name:'Jeev Aashraya',state:'Uttar Pradesh',city:'Lucknow',phones:['+91 80093 92222','+91 80095 21111'],address:'Gomti Nagar, Lucknow, Uttar Pradesh',open24:false,services:['Rescue','Cattle','Dogs','Shelter'],source:'https://www.jeevaashraya.com/contact-us/'},
{type:'Vet',name:'BMC Veterinary Health Department',state:'Maharashtra',city:'Mumbai',phones:['+91 75649 76649'],address:'Mumbai, Maharashtra',open24:true,services:['Municipal veterinary helpline'],source:'https://vhd.mcgm.gov.in/'},
{type:'Vet',name:'Bombay SPCA Hospital for Animals',state:'Maharashtra',city:'Mumbai',phones:['+91 85916 59398','+91 93727 87750','+91 80972 61337'],address:'Dr. S. S. Rao Road, Parel, Mumbai',open24:true,services:['Hospital','Ambulance','Emergency'],source:'https://bombayspca.org/get-in-touch.html'},
{type:'Rescuer',name:'Animals Matter To Me',state:'Maharashtra',city:'Mumbai',phones:['+91 99207 37737','+91 99201 12227'],address:'Malad West, Mumbai, Maharashtra',open24:false,services:['Rescue','Shelter'],source:'https://amtmindia.org/contact-us/'},
{type:'Rescuer',name:'In Defense of Animals India - Turbhe',state:'Maharashtra',city:'Navi Mumbai',phones:['+91 93200 56585'],address:'Turbhe, Navi Mumbai, Maharashtra',open24:false,services:['Rescue','Night service'],source:'https://www.idaindia.org/contact'},
{type:'Rescuer',name:'In Defense of Animals India - Panvel',state:'Maharashtra',city:'Navi Mumbai',phones:['+91 93200 56589'],address:'New Panvel East, Maharashtra',open24:false,services:['Rescue','Animal care'],source:'https://www.idaindia.org/panvel-center'},
{type:'Rescuer',name:'Navi Mumbai Municipal Corporation Helpline',state:'Maharashtra',city:'Navi Mumbai',phones:['1800 222 309','1800 222 310','+91 82919 20504'],address:'Navi Mumbai, Maharashtra',open24:false,services:['Municipal helpline','Ask for veterinary section'],source:'https://www.nmmc.gov.in/'},
{type:'Shelter',name:'Nishabd Dog Shelter',state:'Uttar Pradesh',city:'Noida',phones:['+91 80101 00700'],address:'Sector 115, Noida, Uttar Pradesh',open24:false,services:['Shelter','Ambulance'],source:'https://nishabd.org/'},
{type:'Rescuer',name:'Save A Stray',state:'Uttar Pradesh',city:'Noida',phones:['+91 98996 00421'],address:'Sector 116, Noida, Uttar Pradesh',open24:false,services:['Animal care','Shelter','Medical care'],source:'https://saveastray.in/'},
{type:'Vet',name:'Noida Animal Shelter and Hospital',state:'Uttar Pradesh',city:'Noida',phones:['+91 99993 52343'],address:'Sector 94, Noida, Uttar Pradesh',open24:false,services:['Hospital','Shelter','Animal distress'],source:'https://spcanoida.blogspot.com/'},
{type:'Vet',name:'Pune Municipal Corporation Veterinary Section',state:'Maharashtra',city:'Pune',phones:['020 25501236','020 25501237','1800 1030 222'],address:'Shivajinagar, Pune, Maharashtra',open24:false,services:['Municipal veterinary section','ABC'],source:'https://www.pmc.gov.in/en/b/veterinary-department-0'},
{type:'Rescuer',name:'RESQ Charitable Trust',state:'Maharashtra',city:'Pune',phones:['+91 91725 11100','+91 98909 99111'],address:'Bavdhan, Pune, Maharashtra',open24:true,services:['Wildlife emergencies','Technical animal rescue'],source:'https://www.resqct.org/contact'},
{type:'Vet',name:'Blue Cross Society of Pune',state:'Maharashtra',city:'Pune',phones:['1800 419 9005'],address:'Pune, Maharashtra',open24:false,services:['Free OPD','Stray dogs & cats','Vaccination'],source:'https://bcspune.org/'},
{type:'Rescuer',name:'Saahas For Animals',state:'Maharashtra',city:'Pune',phones:['+91 84595 92034'],address:'Pune / PCMC, Maharashtra',open24:true,services:['Rescue','Rapid response'],source:'https://saahasforpune.org/'},
{type:'Vet',name:'Thane CPCA Animal Hospital',state:'Maharashtra',city:'Thane',phones:['+91 87676 12344','+91 93222 71966'],address:'Kolshet Road, Thane West, Maharashtra',open24:false,services:['Animal hospital','Rescue'],source:'https://www.thanecpca.org/contact-us/'},
{type:'Rescuer',name:'Wildlife Welfare Association',state:'Maharashtra',city:'Thane',phones:['+91 97573 22901','+91 97573 22902','+91 97573 22903'],address:'Manpada, Thane, Maharashtra',open24:false,services:['Wildlife rescue'],source:'https://www.wwaindia.org/web/page/service'},
{type:'Rescuer',name:'RAWW Wildlife Welfare',state:'Maharashtra',city:'Thane',phones:['+91 76666 80202','+91 98697 80202'],address:'Thane / Mumbai region, Maharashtra',open24:false,services:['Wildlife rescue','Ambulance'],source:'https://www.raww.in/ourservices-rescue.php'}

].map((x,i)=>({...x,country:'India',id:i+1,verified:true,community:false,email:'',website:x.source}));

const globalSeed=[
  {country:'USA',type:'Vet',name:'ASPCA Animal Hospital',state:'New York',city:'New York City',phones:['+1 844 692 7722'],address:'New York City, New York',open24:false,services:['Animal hospital','Veterinary care'],source:'https://www.aspca.org/about-us/contact-us'},
  {country:'USA',type:'Vet',name:'ASPCA Animal Poison Control Center',state:'National',city:'Nationwide',phones:['+1 888 426 4435'],address:'United States nationwide hotline',open24:true,national:true,services:['24/7 poison control','Veterinary toxicology'],source:'https://www.aspca.org/about-us/contact-us'},
  {country:'USA',type:'Shelter',name:'Animal Care Centers of NYC',state:'New York',city:'New York City',phones:['+1 212 788 4000','311'],address:'326 E 110th Street, New York, NY',open24:false,services:['Shelter','Lost & found','Field services via 311'],source:'https://www.nycacc.org/contact/'},
  {country:'USA',type:'Vet',name:'Animal Medical Center',state:'New York',city:'New York City',phones:['+1 212 838 8100'],address:'510 E 62nd Street, New York, NY',open24:true,services:['24-hour veterinary emergency'],source:'https://www.aspca.org/nyc/nyc-faq'},

  {country:'UK',type:'Rescuer',name:'RSPCA Cruelty & Emergency Helpline',state:'National',city:'Nationwide',phones:['0300 1234 999'],address:'United Kingdom nationwide service',open24:false,national:true,services:['Injured animals','Cruelty reports','Animal rescue triage'],source:'https://www.rspca.org.uk/reportaconcern'},
  {country:'UK',type:'Vet',name:'PDSA Veterinary Enquiries',state:'National',city:'Nationwide',phones:['0300 3737 223'],address:'United Kingdom',open24:false,national:true,services:['Veterinary enquiries','Pet hospital support'],source:'https://www.pdsa.org.uk/contact-us'},
  {country:'UK',type:'Shelter',name:'Battersea Dogs & Cats Home',state:'England',city:'London',phones:['0800 001 4444'],address:'4 Battersea Park Road, London SW8 4AA',open24:false,services:['Shelter','Rehoming','Pet advice'],source:'https://www.battersea.org.uk/about-us/contact-us'},

  {country:'Brazil',type:'Vet',name:'São Paulo Municipal Veterinary Hospital – East Unit I',state:'São Paulo',city:'São Paulo',phones:['156','+55 11 5461 5600'],address:'Av. Salim Farah Maluf at R. Ulisses Cruz, Tatuapé, São Paulo',open24:true,services:['Public veterinary hospital','Urgency & emergency','Dogs & cats'],source:'https://prefeitura.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/hospitais-veterinarios-publicos'},
  {country:'Brazil',type:'Vet',name:'São Paulo Municipal Veterinary Hospital – North Unit',state:'São Paulo',city:'São Paulo',phones:['156','+55 11 5461 5600'],address:'Rua Atílio Piffer, 687, Casa Verde, São Paulo',open24:false,services:['Public veterinary hospital','Dogs & cats'],source:'https://prefeitura.sp.gov.br/web/saude/w/saude_e_protecao_ao_animal_domestico/hospitais-veterinarios-publicos'},
  {country:'Brazil',type:'Rescuer',name:'Jundiaí Animal Welfare Department (DEBEA)',state:'São Paulo',city:'Jundiaí',phones:['156','+55 11 4589 9306','+55 11 4589 9307'],address:'Rua Abraão Farrão, 08, Jundiaí, São Paulo',open24:false,services:['Animal welfare','Clinical service','Adoption'],source:'https://debea.jundiai.sp.gov.br/contato/'},

  {country:'China',type:'Rescuer',name:'China Small Animal Protection Association',state:'Beijing',city:'Beijing',phones:['+86 10 8855 3597'],address:'Haidian District, Beijing',open24:false,services:['Animal protection','Rescue network'],source:'https://www.google.com/maps/search/?api=1&query=China+Small+Animal+Protection+Association+Beijing'},
  {country:'China',type:'Vet',name:'Beijing Guanshang Animal Hospital',state:'Beijing',city:'Beijing',phones:['+86 10 6204 9742'],address:'7 N 3rd Ring Middle Rd, Xicheng District, Beijing',open24:false,services:['Veterinary hospital'],source:'https://www.google.com/maps/search/?api=1&query=Beijing+Guanshang+Animal+Hospital'},
  {country:'China',type:'Vet',name:'Beijing Xintiandi International Animal Hospital',state:'Beijing',city:'Beijing',phones:['+86 10 8456 1939'],address:'Wangjing, Chaoyang District, Beijing',open24:false,services:['Animal hospital','Veterinary care'],source:'https://www.google.com/maps/search/?api=1&query=Beijing+Xintiandi+International+Animal+Hospital'},
  {country:'China',type:'Shop',name:'Donna Pet Shop',state:'Beijing',city:'Beijing',phones:['+86 10 6433 2394'],address:'Jiangtai West Road, Chaoyang District, Beijing',open24:false,services:['Pet supplies'],source:'https://www.google.com/maps/search/?api=1&query=Donna+Pet+Shop+Beijing'},

  {country:'Russia',type:'Shelter',name:'Murkoshа Cat Shelter',state:'Moscow',city:'Moscow',phones:['+7 495 135 51 03'],address:'Ostashkovskaya Ulitsa 14c2, Moscow',open24:false,services:['Cat shelter','Adoption'],source:'https://www.google.com/maps/search/?api=1&query=Murkosha+Cat+Shelter+Moscow'},
  {country:'Russia',type:'Vet',name:'Gor-vet Veterinary Clinic',state:'Moscow',city:'Moscow',phones:['+7 499 444 02 53'],address:'Sadovaya-Karetnaya Ulitsa 10, Moscow',open24:true,services:['24-hour veterinarian'],source:'https://www.google.com/maps/search/?api=1&query=Gor-vet+Moscow'},
  {country:'Russia',type:'Rescuer',name:'Ray Fund for Homeless Animals',state:'Moscow',city:'Moscow',phones:['+7 985 066 77 49'],address:'Ulitsa Kotsyubinskogo 4, Moscow',open24:false,services:['Homeless animal support','Rescue network'],source:'https://www.google.com/maps/search/?api=1&query=Ray+Fund+Moscow+animals'},
  {country:'Russia',type:'Shop',name:'Petshop.ru',state:'Moscow',city:'Moscow',phones:['+7 800 700 00 50'],address:'Taganskaya Ulitsa 31/22, Moscow',open24:false,services:['Pet supplies'],source:'https://www.google.com/maps/search/?api=1&query=Petshop.ru+Taganskaya+Moscow'},

  {country:'Mexico',type:'Vet',name:'LOCATEL Veterinary Advice',state:'Ciudad de México',city:'Mexico City',phones:['*0311','+52 55 5658 1111'],address:'Mexico City telephone veterinary guidance service',open24:false,services:['Veterinary advice','Government service referrals','Lost pets'],source:'https://311locatel.cdmx.gob.mx/Veterinaria.xhtml'},
  {country:'Mexico',type:'Rescuer',name:'Agencia de Atención Animal (AGATAN)',state:'Ciudad de México',city:'Mexico City',phones:['+52 55 5693 9892'],address:'Ciudad de México',open24:false,services:['Animal welfare agency','Government resource'],source:'https://transparencia.cdmx.gob.mx/agencia-de-atencion-animal'},
  {country:'Mexico',type:'Rescuer',name:'Mexico City Emergency / LOCATEL',state:'Ciudad de México',city:'Mexico City',phones:['911','+52 55 5658 1111'],address:'Mexico City',open24:true,services:['Emergency routing','City information'],source:'https://www.mexicocity.cdmx.gob.mx/e/emergency/?lang=en'},

  {country:'Japan',type:'Vet',name:'TRVA Animal Medical Center – Night Emergency',state:'Tokyo',city:'Tokyo',phones:['+81 3 5760 1212','+81 3 5760 1211'],address:'8-19-12 Fukasawa, Setagaya-ku, Tokyo',open24:false,services:['Night veterinary emergency','Secondary care'],source:'https://trva.jp/'},
  {country:'Japan',type:'Rescuer',name:'Japan Animal Welfare Society (JAWS)',state:'Tokyo',city:'Tokyo',phones:['+81 3 6455 7733'],address:'5-21-15 Higashigotanda, Shinagawa-ku, Tokyo',open24:false,services:['Animal welfare consultation'],source:'https://www.jaws.or.jp/about01/about04/'},
  {country:'Japan',type:'Shelter',name:'Tokyo ARK – Animal Refuge Kansai',state:'Tokyo',city:'Tokyo',phones:['050 1557 2763'],address:'Tokyo facility (location not publicly disclosed)',open24:false,services:['Animal rescue','Shelter','Adoption'],source:'https://arkbark.net/en/contact/'},

  {country:'Germany',type:'Shelter',name:'Tierheim Berlin',state:'Berlin',city:'Berlin',phones:['+49 30 76888 0','+49 30 76888 201','+49 30 76888 250'],address:'Hausvaterweg 39, 13057 Berlin',open24:false,services:['Animal shelter','Found animals','Shelter veterinary service'],source:'https://tierschutz-berlin.de/kontakt/'},
  {country:'Germany',type:'Vet',name:'Freie Universität Berlin Small Animal Clinic',state:'Berlin',city:'Berlin',phones:['+49 30 838 62422','+49 160 3758447'],address:'Oertzenweg 19b, 14163 Berlin',open24:true,services:['Small animal clinic','Emergency service','Intensive care'],source:'https://www.vetmed.fu-berlin.de/einrichtungen/kliniken/we20/tierhalter/notdienst/index.html'},
  {country:'Germany',type:'Vet',name:'Tiernotarzt Berlin',state:'Berlin',city:'Berlin',phones:['+49 174 1601606'],address:'Berlin mobile emergency veterinarian',open24:false,services:['Emergency veterinarian','Mobile service'],source:'https://tierschutz-berlin.de/kontakt/'},

  {country:'Argentina',type:'Vet',name:'Desivet Veterinary Emergency Clinic',state:'Buenos Aires (CABA)',city:'Buenos Aires',phones:['+54 11 4501 7400','+54 11 4503 1389','+54 9 11 2335 2383'],address:'Av. San Martín 4428, Buenos Aires',open24:true,services:['24-hour emergency','Hospitalisation','Veterinary clinic'],source:'https://desivet.com.ar/'},
  {country:'Argentina',type:'Vet',name:'UBA Veterinary Teaching Hospital',state:'Buenos Aires (CABA)',city:'Buenos Aires',phones:['+54 11 5287 2000'],address:'Av. San Martín 4351, Buenos Aires',open24:false,services:['Small animal hospital','Veterinary specialties'],source:'https://www.fvet.uba.ar/'},
  {country:'Argentina',type:'Rescuer',name:'Buenos Aires Wildlife Rescue / Civil Defence',state:'Buenos Aires (CABA)',city:'Buenos Aires',phones:['103'],address:'Buenos Aires City',open24:true,services:['Wildlife emergencies','Civil Defence'],source:'https://buenosaires.gob.ar/gcaba_historico/ecoparque/programas-de-conservacion/centro-de-rescate-de-fauna-silvestre-crfs'},
  {country:'Argentina',type:'Vet',name:'Luis Pasteur Zoonosis Institute',state:'Buenos Aires (CABA)',city:'Buenos Aires',phones:['+54 11 4958 9900'],address:'Av. Díaz Vélez 4821, Buenos Aires',open24:false,services:['Zoonosis','Rabies services','Animal health'],source:'https://buenosaires.gob.ar/gcaba_historico/institutopasteur/servicios'}
].map((x,i)=>({...x,id:'g'+(i+1),verified:true,community:false,email:'',website:x.source}));
seed.push(...globalSeed);

const TIPS=[
  ['Fresh water check','Refresh bowls, wash them, and notice whether your pet is drinking much more or less than usual.'],
  ['Two-minute body check','Run your hands gently over your pet and notice new lumps, tender spots, ticks, wounds or coat changes.'],
  ['Dental habit','Let your pet get comfortable with mouth handling gradually. Use only pet-safe dental products.'],
  ['Enrichment matters','A short sniff walk, training game, food puzzle or play session can be meaningful enrichment.'],
  ['Check the paws','Look between toes and around pads after outdoor activity for thorns, cuts, heat injury or trapped debris.'],
  ['Weight trend, not guesswork','Track weight periodically. A sustained unexplained gain or loss is more useful than one isolated measurement.'],
  ['Groom gently','Regular brushing helps you notice skin or coat changes early. Stop if the animal becomes distressed.']
];

const FOOD_DB={
  chocolate:{dog:['danger','Toxic risk. Chocolate contains methylxanthines; darker chocolate is generally more dangerous.','Contact a veterinarian promptly if eaten.'],cat:['danger','Chocolate can be harmful to cats as well.','Contact a veterinarian promptly if eaten.']},
  grapes:{dog:['danger','Grapes and raisins can cause serious kidney injury in dogs.','Treat ingestion as urgent.'],cat:['danger','Safety is uncertain and there is no benefit to offering them.','Avoid and contact a vet if a significant amount was eaten.']},
  raisins:{dog:['danger','Raisins are a concentrated grape product and can cause serious kidney injury in dogs.','Treat ingestion as urgent.'],cat:['danger','Avoid.','Contact a vet if a significant amount was eaten.']},
  onion:{dog:['danger','Onion and related allium foods can damage red blood cells.','Avoid cooked, raw and powdered forms.'],cat:['danger','Cats are especially sensitive to allium toxicity.','Contact a vet if eaten.']},
  garlic:{dog:['danger','Garlic is an allium and can be harmful.','Avoid as a routine food or supplement unless a vet specifically directs otherwise.'],cat:['danger','Cats are particularly sensitive to alliums.','Avoid and seek veterinary advice after ingestion.']},
  xylitol:{dog:['danger','Xylitol can cause dangerous low blood sugar and liver injury in dogs.','Emergency veterinary care is appropriate.'],cat:['danger','Do not offer xylitol-containing products.','If ingestion occurred, contact a veterinarian.']},
  coffee:{dog:['danger','Caffeine can cause serious toxicity.','Treat ingestion as urgent.'],cat:['danger','Caffeine can cause serious toxicity.','Treat ingestion as urgent.']},
  caffeine:{dog:['danger','Caffeine can cause serious toxicity.','Treat ingestion as urgent.'],cat:['danger','Caffeine can cause serious toxicity.','Treat ingestion as urgent.']},
  alcohol:{dog:['danger','Alcohol exposure can be life-threatening.','Seek veterinary help urgently.'],cat:['danger','Alcohol exposure can be life-threatening.','Seek veterinary help urgently.']},
  'raw dough':{dog:['danger','Yeast dough can expand and also produce alcohol in the stomach.','Seek veterinary help promptly.'],cat:['danger','Yeast dough can expand and produce alcohol.','Seek veterinary help promptly.']},
  bones:{dog:['danger','Cooked or brittle bones can splinter, obstruct or injure the digestive tract.','Avoid. If swallowed and symptoms occur, contact a vet.'],cat:['danger','Bones can cause choking, obstruction or internal injury.','Avoid.']},
  milk:{dog:['caution','Many adult dogs do not digest lactose well.','Small amounts may cause digestive upset; water should be the main drink.'],cat:['caution','Many adult cats do not digest lactose well.','Milk is not a necessary part of an adult cat diet.']},
  cheese:{dog:['caution','Cheese is calorie-dense and some dogs are lactose-sensitive.','Use only small amounts if tolerated.'],cat:['caution','Many cats are lactose-sensitive and cheese is calorie-dense.','Use only small amounts if tolerated.']},
  egg:{dog:['safe','Plain, fully cooked egg can be an occasional food for many healthy dogs.','Avoid seasoning, excess oil and raw egg.'],cat:['safe','Plain, fully cooked egg can be an occasional food for many healthy cats.','Keep portions small and unseasoned.']},
  chicken:{dog:['safe','Plain, fully cooked boneless chicken can be suitable as an occasional addition for many healthy dogs.','No onions, garlic, bones or heavy seasoning.'],cat:['safe','Plain, fully cooked boneless chicken can be suitable as an occasional addition.','It should not replace a complete cat diet.']},
  fish:{dog:['safe','Plain, fully cooked, boneless fish can be an occasional addition.','Avoid seasoning and bones.'],cat:['safe','Plain cooked, boneless fish can be an occasional treat.','It should not replace a complete diet.']},
  rice:{dog:['safe','Plain cooked rice is generally tolerated by many dogs.','Use as an occasional part of a balanced diet, not the sole diet.'],cat:['caution','Plain cooked rice is not usually toxic but cats have little nutritional need for it.','Keep amounts small.']},
  banana:{dog:['safe','Small pieces of banana are generally safe for many healthy dogs.','It is sugary, so keep portions modest.'],cat:['caution','A tiny amount is not usually toxic, but cats do not need fruit.','Keep portions very small if offered at all.']},
  apple:{dog:['safe','Small pieces of apple flesh can be a treat.','Remove core and seeds.'],cat:['caution','Small pieces of flesh are not usually toxic, but cats do not need fruit.','Remove seeds and core.']},
  carrot:{dog:['safe','Plain carrot can be a low-calorie snack for many dogs.','Cut to a safe size for chewing.'],cat:['caution','Plain cooked carrot is not usually toxic.','Cats do not need vegetables; keep any amount small.']},
  pumpkin:{dog:['safe','Plain cooked pumpkin can be used in small amounts for some dogs.','Avoid sweetened pie filling or spices.'],cat:['safe','Plain cooked pumpkin can be used in small amounts for some cats.','Avoid sweetened or spiced products.']},
  curd:{dog:['caution','Plain unsweetened curd/yogurt may be tolerated by some dogs, but dairy can upset others.','Start very small and avoid sweeteners.'],cat:['caution','Dairy can cause digestive upset in adult cats.','Not necessary for nutrition.']},
  yogurt:{dog:['caution','Plain unsweetened yogurt may be tolerated by some dogs.','Avoid xylitol and added sugar.'],cat:['caution','Many cats are lactose-sensitive.','Use only tiny amounts if tolerated.']},
  paneer:{dog:['caution','Paneer is high in fat and dairy may upset some dogs.','Use only a small occasional amount if tolerated.'],cat:['caution','Paneer is dairy and calorie-dense.','Not needed; use sparingly if at all.']},
  macadamia:{dog:['danger','Macadamia nuts can cause weakness, vomiting, tremors and overheating in dogs.','Contact a veterinarian if eaten.'],cat:['caution','Not an appropriate cat food and high in fat.','Avoid.']}
};

const NEWS_DATE='30 Sep 2026';
let custom=JSON.parse(localStorage.getItem('pawsosCustomContacts')||'[]').map(x=>({...x,country:x.country||'India'}));
let saved=JSON.parse(localStorage.getItem('pawsosSaved')||'[]').map(String);
let pets=JSON.parse(localStorage.getItem('pawsosPets')||'[]');
let reminders=JSON.parse(localStorage.getItem('pawsosReminders')||'[]');
let checkins=JSON.parse(localStorage.getItem('pawsosCheckins')||'[]');
let filter='All', savedOnly=false;

const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function escAttr(v){return esc(v)} function cleanPhone(v){return String(v||'').replace(/[^+\d*#]/g,'')}
function store(k,v){localStorage.setItem(k,JSON.stringify(v))}

function init(){
  const countries=Object.keys(COUNTRY_DATA);
  $('#country').innerHTML=countries.map(c=>`<option ${c===DEFAULT_COUNTRY?'selected':''}>${esc(c)}</option>`).join('');
  $('#fCountry').innerHTML=countries.map(c=>`<option ${c===DEFAULT_COUNTRY?'selected':''}>${esc(c)}</option>`).join('');
  refreshRegions(); refreshAddRegions();
  $('#chips').innerHTML=['All','Vet','Rescuer','Shelter','Shop'].map(x=>`<button class="chip ${x==='All'?'active':''}" data-filter="${x}">${x}</button>`).join('');
  $$('.chip').forEach(b=>b.onclick=()=>setFilter(b.dataset.filter));
  $('#country').onchange=()=>{refreshRegions();renderDirectory()}; $('#state').onchange=()=>{refreshCities();renderDirectory()}; $('#city').oninput=renderDirectory; $('#search').oninput=renderDirectory; $('#only24').onchange=renderDirectory;
  $('#fCountry').onchange=refreshAddRegions;
  $('#addForm').onsubmit=saveContact; $('#petForm').onsubmit=savePet; $('#reminderForm').onsubmit=saveReminder; $('#checkinForm').onsubmit=saveCheckin;
  $('#foodQuery').oninput=renderFoodSuggestions; $('#foodSpecies').onchange=renderFoodSuggestions;
  $('#assistantInput').addEventListener('keydown',e=>{if(e.key==='Enter')askAssistant()});
  renderDirectory(); renderPets(); renderReminders(); renderCheckinChooser(); updateHomeMetrics(); nextTip(true);
  const start=localStorage.getItem('pawsosLastPage')||'home'; go(start,false);
  if('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(()=>{});
}

function go(id,careView,scroll=true){
  $$('.page').forEach(p=>p.classList.toggle('active',p.id===id));
  $$('[data-go]').forEach(b=>b.classList.toggle('active',b.dataset.go===id));
  localStorage.setItem('pawsosLastPage',id);
  if(id==='care'&&careView) showCare(careView);
  if(id==='pets'){renderPets();renderReminders();renderCheckinChooser()}
  if(id==='help')renderDirectory();
  if(scroll)window.scrollTo({top:0,behavior:'smooth'});
}

let tipIndex=0;
function nextTip(first=false){
  if(first) tipIndex=(new Date().getDate()-1)%TIPS.length; else tipIndex=(tipIndex+1)%TIPS.length;
  $('#dailyTipTitle').textContent=TIPS[tipIndex][0]; $('#dailyTipText').textContent=TIPS[tipIndex][1];
}

function updateHomeMetrics(){
  $('#petCount').textContent=pets.length; $('#savedCount').textContent=saved.length;
  const now=new Date(); now.setHours(0,0,0,0);
  const due=reminders.filter(r=>new Date(r.date+'T00:00:00')<=now).length; $('#dueCount').textContent=due;
  let note='Add a pet to start a care dashboard.';
  if(pets.length&&due) note=`${due} reminder${due===1?' is':'s are'} due. Open My Pets to review.`;
  else if(pets.length) note=`${pets[0].name} and your pet dashboard are ready. No reminders are currently due.`;
  $('#homeReminder').textContent=note;
}

function currentRegions(country){return COUNTRY_DATA[country]||{}}
function refreshRegions(){
  const country=$('#country').value||DEFAULT_COUNTRY, regions=currentRegions(country);
  $('#state').innerHTML=['All regions',...Object.keys(regions).sort()].map(s=>`<option>${esc(s)}</option>`).join('');
  refreshCities();
}
function refreshAddRegions(){
  const country=$('#fCountry').value||DEFAULT_COUNTRY, regions=currentRegions(country), previous=$('#fState').value;
  $('#fState').innerHTML=Object.keys(regions).sort().map(s=>`<option>${esc(s)}</option>`).join('');
  if(previous&&Object.prototype.hasOwnProperty.call(regions,previous))$('#fState').value=previous;
}
function refreshCities(){
  const country=$('#country').value||DEFAULT_COUNTRY, regions=currentRegions(country), s=$('#state').value;
  const cities=s==='All regions'?[...new Set(Object.values(regions).flat())]:(regions[s]||[]);
  $('#citySuggestions').innerHTML=cities.sort().map(c=>`<option value="${esc(c)}"></option>`).join('');
  $('#city').placeholder=`Type any city in ${country}`;
}
function allContacts(){return [...seed,...custom]}
function renderDirectory(){
  const term=$('#search').value.trim().toLowerCase(), country=$('#country').value||DEFAULT_COUNTRY, state=$('#state').value, city=$('#city').value.trim().toLowerCase(), only24=$('#only24').checked;
  let items=allContacts().filter(i=>{
    const sameCountry=(i.country||'India')===country;
    const regionOK=i.national||state==='All regions'||i.state===state;
    const cityOK=i.national||!city||(i.city||'').toLowerCase().includes(city);
    const hay=`${i.name} ${i.country||'India'} ${i.state||''} ${i.city||''} ${i.address||''} ${(i.phones||[]).join(' ')} ${(i.services||[]).join(' ')}`.toLowerCase();
    return sameCountry&&regionOK&&cityOK&&(filter==='All'||i.type===filter)&&(!only24||i.open24)&&hay.includes(term);
  });
  if(savedOnly) items=items.filter(i=>saved.includes(String(i.id)));
  $('#resultCount').textContent=`${items.length} contact${items.length===1?'':'s'} ${savedOnly?'saved':'shown'} • ${country}`;
  $('#cards').innerHTML=items.length?items.map(contactCard).join(''):`<div class="empty-soft" style="grid-column:1/-1">No matching directory contact yet. Try a live city search or add a known contact.<br><br><button class="primary" onclick="loadCityPack()">Build city emergency pack</button> <button class="secondary" onclick="openAdd()">+ Add contact</button></div>`;
}
function contactCard(i){
  const phones=(i.phones||[]).filter(Boolean),primary=phones[0]||'', country=i.country||'India';
  const where=i.national?`${country} • nationwide`:[i.city,i.state,country].filter(Boolean).join(', ');
  return `<article class="contact-card"><div class="card-top"><span class="type-badge ${i.type.toLowerCase()}">${esc(i.type)}</span><button class="save-btn" onclick="toggleSave('${i.id}')">${saved.includes(String(i.id))?'♥':'♡'}</button></div><h3>${esc(i.name)}</h3><div class="location">📍 ${esc(i.address)}<br>${esc(where)}</div><div class="services">${(i.services||[]).map(s=>`<span>${esc(s)}</span>`).join('')}</div><div class="phones">${phones.length?phones.map((p,n)=>`<div class="phone"><span>${n?'Alternate':'Primary'}</span><a href="tel:${cleanPhone(p)}">${esc(p)}</a></div>`).join(''):'<div class="muted">No published phone</div>'}</div><div class="card-meta"><span>${i.open24?'● Listed 24/7':'Check hours'}</span><span class="${i.community?'community':'verified'}">${i.community?'◷ Community-added':'✓ Public-source record'}</span></div><div class="contact-actions">${primary?`<a href="tel:${cleanPhone(primary)}">📞 Call</a>`:`<button onclick="openMapsSearch('${esc(i.name)}')">⌕ Search</button>`}${i.source?`<a target="_blank" rel="noreferrer" href="${escAttr(i.source)}">↗ Source</a>`:`<span></span>`}<a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(i.name+', '+i.address+', '+where)}">🧭 Map</a></div></article>`;
}
function toggleSave(id){id=String(id);saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];store('pawsosSaved',saved);renderDirectory();updateHomeMetrics()}
function showSaved(){savedOnly=!savedOnly;renderDirectory()}
function setFilter(v){filter=v;savedOnly=false;$$('.chip').forEach(x=>x.classList.toggle('active',x.dataset.filter===v));renderDirectory()}
function openAdd(){
  const country=$('#country').value||DEFAULT_COUNTRY;$('#fCountry').value=country;refreshAddRegions();
  const s=$('#state').value;if(s&&s!=='All regions'&&[...$('#fState').options].some(o=>o.value===s))$('#fState').value=s;
  if($('#city').value)$('#fCity').value=$('#city').value;show('addModal')
}
function saveContact(e){
  e.preventDefault();const phones=[$('#fPhone1').value.trim(),$('#fPhone2').value.trim()].filter(Boolean);
  custom.unshift({id:'c'+Date.now(),country:$('#fCountry').value,type:$('#fType').value,name:$('#fName').value.trim(),state:$('#fState').value,city:$('#fCity').value.trim(),phones,address:$('#fAddress').value.trim(),email:$('#fEmail').value.trim(),website:$('#fWebsite').value.trim(),source:$('#fWebsite').value.trim(),open24:$('#f24').checked,services:$('#fServices').value.split(',').map(x=>x.trim()).filter(Boolean),verified:false,community:true});
  store('pawsosCustomContacts',custom);e.target.reset();$('#fCountry').value=$('#country').value||DEFAULT_COUNTRY;refreshAddRegions();hide('addModal');renderDirectory()
}

async function geocodeCity(){
 const city=$('#city').value.trim(), state=$('#state').value, country=$('#country').value||DEFAULT_COUNTRY;if(!city)throw new Error('Enter a city first.');
 const q=[city,state!=='All regions'?state:'',country].filter(Boolean).join(', '), code=COUNTRY_CODES[country]||'';
 const r=await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=${encodeURIComponent(code)}&q=${encodeURIComponent(q)}`);
 if(!r.ok)throw new Error('Could not reach the public map service.');const data=await r.json();if(!data.length)throw new Error('City not found in public map data.');return{lat:+data[0].lat,lon:+data[0].lon};
}
async function fetchLivePlaces(type,g){
 const radius=type==='Shelter'||type==='Rescuer'?30000:18000;let query;
 if(type==='Rescuer')query=`[out:json][timeout:18];(nwr["office"="ngo"]["name"~"animal|rescue|welfare|SPCA|PFA|Blue Cross|care",i](around:${radius},${g.lat},${g.lon});nwr["amenity"="animal_shelter"]["name"~"rescue|welfare|SPCA|animal|care",i](around:${radius},${g.lat},${g.lon}););out center tags 50;`;
 else{const key=type==='Vet'?'["amenity"="veterinary"]':type==='Shelter'?'["amenity"="animal_shelter"]':'["shop"="pet"]';query=`[out:json][timeout:18];(nwr${key}(around:${radius},${g.lat},${g.lon}););out center tags 40;`;}
 const r=await fetch('https://overpass-api.de/api/interpreter?data='+encodeURIComponent(query));if(!r.ok)throw new Error('Live directory service is temporarily busy.');const data=await r.json();return data.elements.map(osmPlace).filter(x=>x.name).sort((a,b)=>(b.phone?1:0)-(a.phone?1:0));
}
function osmPlace(e){const t=e.tags||{},lat=e.lat||(e.center&&e.center.lat),lon=e.lon||(e.center&&e.center.lon),phone=t['contact:phone']||t.phone||t['contact:mobile']||'',email=t['contact:email']||t.email||'',website=t['contact:website']||t.website||'',address=[t['addr:housenumber'],t['addr:street'],t['addr:suburb'],t['addr:city']].filter(Boolean).join(', ');return{name:t.name||t.operator||'',phone,email,website,address,lat,lon}}
function liveCard(p){const map=p.lat&&p.lon?`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lon}`:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name+' '+$('#city').value+' '+($('#country').value||DEFAULT_COUNTRY))}`;return`<div class="live-item"><strong>${esc(p.name)}</strong><small>${esc(p.address||'Address not published in public map data')}</small><small>${p.phone?'☎ '+esc(p.phone):'Phone not published'}${p.email?' • ✉ '+esc(p.email):''}</small><div class="mini-actions">${p.phone?`<a href="tel:${cleanPhone(p.phone)}">Call</a>`:''}<a target="_blank" rel="noreferrer" href="${map}">Directions</a>${p.website?`<a target="_blank" rel="noreferrer" href="${escAttr(p.website)}">Website</a>`:''}</div></div>`}
async function loadLive(type){try{$('#liveStatus').textContent='Searching public map data…';$('#liveResults').innerHTML='<div class="empty-soft">Loading…</div>';const g=await geocodeCity(),places=(await fetchLivePlaces(type,g)).slice(0,12);$('#liveTitle').textContent=`${type} listings near ${$('#city').value.trim()}`;$('#liveStatus').textContent=`Found ${places.length} public map listing${places.length===1?'':'s'}. Published phone availability varies.`;$('#liveResults').innerHTML=places.length?places.map(liveCard).join(''):'<div class="empty-soft">No usable public listings returned. Try another category or add a known local contact.</div>';}catch(err){$('#liveStatus').textContent=err.message;$('#liveResults').innerHTML=`<div class="empty-soft">${esc(err.message)}</div>`}}
async function loadCityPack(){try{const city=$('#city').value.trim();if(!city)throw new Error('Enter a city first.');$('#liveStatus').textContent='Building city emergency pack…';$('#liveResults').innerHTML='<div class="empty-soft">Searching vets, rescuers, shelters and pet shops…</div>';const g=await geocodeCity();const groups=await Promise.all(['Vet','Rescuer','Shelter','Shop'].map(async type=>{try{return[type,(await fetchLivePlaces(type,g)).slice(0,3)]}catch(e){return[type,[]]}}));$('#liveTitle').textContent=`Emergency pack for ${city}`;let total=0;$('#liveResults').innerHTML=groups.map(([type,items])=>{total+=items.length;return`<div class="live-item"><strong>${type==='Vet'?'🩺':type==='Rescuer'?'🛟':type==='Shelter'?'🏠':'🛍️'} ${type}s</strong>${items.length?items.map(x=>liveCard(x)).join(''):'<small>No usable public listing returned.</small>'}</div>`}).join('');$('#liveStatus').textContent=`Found ${total} public listings. Confirm availability before travelling.`;}catch(err){$('#liveStatus').textContent=err.message;$('#liveResults').innerHTML=`<div class="empty-soft">${esc(err.message)}</div>`}}
function openMapsSearch(q){window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q+' '+($('#city').value||'')+' '+($('#country').value||DEFAULT_COUNTRY))}`,'_blank','noopener')}

function petEmoji(s){return s==='Dog'?'🐶':s==='Cat'?'🐱':s==='Bird'?'🐦':'🐾'}
function openPetForm(){show('petModal')}
function savePet(e){e.preventDefault();pets.push({id:'p'+Date.now(),name:$('#pName').value.trim(),species:$('#pSpecies').value,breed:$('#pBreed').value.trim(),age:$('#pAge').value.trim(),weight:$('#pWeight').value,sex:$('#pSex').value,coat:$('#pCoat').value.trim(),city:$('#pCity').value.trim(),notes:$('#pNotes').value.trim()});store('pawsosPets',pets);e.target.reset();hide('petModal');renderPets();renderCheckinChooser();updateHomeMetrics()}
function renderPets(){
 $('#petList').innerHTML=pets.length?pets.map(p=>`<div class="pet-card"><div class="pet-avatar">${petEmoji(p.species)}</div><div><b>${esc(p.name)}</b><small>${esc([p.species,p.breed,p.age,p.weight?p.weight+' kg':''].filter(Boolean).join(' • '))}</small>${p.notes?`<small>${esc(p.notes)}</small>`:''}</div><button class="icon-btn" onclick="deletePet('${p.id}')">⋯</button></div>`).join(''):'<div class="empty-soft">No pets yet. Add a profile to unlock reminders and daily check-ins.</div>';
}
function deletePet(id){if(!confirm('Remove this pet profile?'))return;pets=pets.filter(p=>p.id!==id);reminders=reminders.filter(r=>r.petId!==id);store('pawsosPets',pets);store('pawsosReminders',reminders);renderPets();renderReminders();renderCheckinChooser();updateHomeMetrics()}
function openReminderForm(){if(!pets.length){openPetForm();return};$('#rPet').innerHTML=pets.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('');show('reminderModal')}
function saveReminder(e){e.preventDefault();reminders.push({id:'r'+Date.now(),petId:$('#rPet').value,type:$('#rType').value,title:$('#rTitle').value.trim(),date:$('#rDate').value,done:false});store('pawsosReminders',reminders);e.target.reset();hide('reminderModal');renderReminders();updateHomeMetrics()}
function renderReminders(){
 const sorted=[...reminders].sort((a,b)=>a.date.localeCompare(b.date));const today=new Date();today.setHours(0,0,0,0);
 $('#reminderList').innerHTML=sorted.length?sorted.map(r=>{const pet=pets.find(p=>p.id===r.petId),due=new Date(r.date+'T00:00:00')<=today&&!r.done;return`<div class="reminder"><div><b class="${due?'due':''}">${esc(r.title)}</b><small>${esc(pet?pet.name:'Pet')} • ${esc(r.type)} • ${esc(r.date)}</small></div><button class="icon-btn" onclick="toggleReminder('${r.id}')">${r.done?'✓':'○'}</button></div>`}).join(''):'<div class="empty-soft">No reminders yet. Add vaccination, deworming, grooming or vet-check dates.</div>';
}
function toggleReminder(id){const r=reminders.find(x=>x.id===id);if(r)r.done=!r.done;store('pawsosReminders',reminders);renderReminders();updateHomeMetrics()}
function renderCheckinChooser(){$('#checkinChooser').innerHTML=pets.length?`<select id="ciPet" class="control">${pets.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select>`:'<div class="empty-soft">Add a pet first to use daily check-ins.</div>';$('#checkinForm').style.display=pets.length?'grid':'none'}
function saveCheckin(e){e.preventDefault();if(!pets.length)return;const scores=[+$('#ciAppetite').value,+$('#ciEnergy').value,+$('#ciWater').value,+$('#ciToilet').value],zeros=scores.filter(x=>x===0).length,ones=scores.filter(x=>x===1).length,petId=$('#ciPet').value,pet=pets.find(p=>p.id===petId);checkins.unshift({id:'c'+Date.now(),petId,date:new Date().toISOString().slice(0,10),scores});store('pawsosCheckins',checkins.slice(0,200));let msg=`Saved for ${pet.name}. `;if(zeros>=1)msg+='One or more major changes were reported. Contact a veterinarian promptly, especially for breathing trouble, collapse, repeated vomiting, blood, inability to urinate, seizures or suspected poisoning.';else if(ones>=2)msg+='Several changes are different from normal. Monitor closely and contact your vet if they persist, worsen or concern you.';else msg+='Everything entered is close to normal today. Keep watching for changes from your pet’s usual pattern.';$('#checkinResult').textContent=msg}

function showCare(which){$$('.care-view').forEach(v=>v.classList.toggle('active',v.id==='care-'+which));$$('.care-tab').forEach(b=>b.classList.toggle('active',b.dataset.care===which));if(which==='food')renderFoodSuggestions()}
function normaliseFood(q){q=q.trim().toLowerCase();if(q.includes('raisin'))return'raisins';if(q.includes('grape'))return'grapes';if(q.includes('yoghurt'))return'yogurt';if(q.includes('chocol'))return'chocolate';if(q.includes('bone'))return'bones';if(q.includes('dough'))return'raw dough';return q}
function renderFoodSuggestions(){
 const q=normaliseFood($('#foodQuery').value),keys=Object.keys(FOOD_DB).filter(k=>!q||k.includes(q)).slice(0,8);$('#foodSuggestions').innerHTML=keys.map(k=>`<button onclick="checkFood('${k}')">${k}</button>`).join('');if(q&&FOOD_DB[q])checkFood(q);
}
function checkFood(key){$('#foodQuery').value=key;const sp=$('#foodSpecies').value,row=FOOD_DB[key]?.[sp];if(!row)return;const[status,why,next]=row,icon=status==='safe'?'✅':status==='caution'?'🟡':'🚫',label=status==='safe'?'Generally okay':status==='caution'?'Use caution':'Avoid / potentially dangerous';$('#foodResult').innerHTML=`<span class="food-status ${status}">${label}</span><span class="big-icon">${icon}</span><h3>${key.charAt(0).toUpperCase()+key.slice(1)}</h3><p>${why}</p><small>${next}</small>`}
function buildGrooming(){
 const sp=$('#gSpecies').value,coat=$('#gCoat').value,life=$('#gLifestyle').value;let brush,bathe,ears,nails,teeth;
 if(sp==='cat'){brush=coat==='long'?'Brush gently every day or most days to reduce tangles and hairballs.':coat==='medium'?'Brush several times a week, increasing during shedding.':'A weekly gentle brush is a useful coat and skin check for many short-haired cats.';bathe='Most healthy cats do not need routine baths. Bathe only when genuinely necessary or advised, using cat-safe products.';ears='Check ears periodically for redness, discharge, odour or persistent scratching. Do not push cotton buds deep into the canal.';nails='Check claws regularly and trim only if needed and if you know the safe technique. Provide suitable scratching surfaces.';teeth='Build a gradual dental routine with cat-safe products; persistent bad breath or mouth pain needs veterinary assessment.';}
 else{brush=coat==='long'?'Brush daily or near-daily, paying attention behind ears, armpits, tail and friction areas.':coat==='medium'?'Brush a few times each week and more during shedding.':'Brush about weekly as a skin/coat check, more often during shedding.';bathe='Bathe when dirty or odorous and according to coat/skin needs, using dog-safe shampoo. Excessive bathing can irritate some skin types.';ears='Check ears regularly, especially after swimming or outdoor activity. Redness, strong odour, pain or discharge should be assessed by a vet.';nails='Check nail length every few weeks. If you are unsure where the quick is, ask a groomer or vet to demonstrate.';teeth='Aim for a regular dog-safe dental routine; never use human toothpaste.';}
 const outdoor=life==='outdoor'?'After outdoor sessions, add a quick paw, tick, burr and wound check.':life==='mixed'?'After longer outdoor activity, check paws, coat and ticks.':'Indoor pets still benefit from skin, coat, claw and dental checks.';
 $('#groomPlan').innerHTML=`<span class="label">YOUR ROUTINE</span><h2>${sp==='dog'?'Dog':'Cat'} • ${coat} coat</h2><div class="groom-list"><div class="groom-item"><span>🪮</span><div><b>Brushing</b><small>${brush}</small></div></div><div class="groom-item"><span>🛁</span><div><b>Bathing</b><small>${bathe}</small></div></div><div class="groom-item"><span>👂</span><div><b>Ears</b><small>${ears}</small></div></div><div class="groom-item"><span>✂️</span><div><b>Nails / claws</b><small>${nails}</small></div></div><div class="groom-item"><span>🦷</span><div><b>Dental</b><small>${teeth}</small></div></div><div class="groom-item"><span>🌿</span><div><b>Lifestyle check</b><small>${outdoor}</small></div></div></div><div class="soft-note" style="margin-top:12px">Skin disease, severe matting, pain, ear problems or sudden coat changes need professional assessment rather than aggressive home grooming.</div>`;
}

function show(id){$('#'+id).classList.remove('hidden')} function hide(id){$('#'+id).classList.add('hidden')} function sheetBackdrop(e,id){if(e.target.id===id)hide(id)}
function openAssistant(){show('assistantSheet');setTimeout(()=>$('#assistantInput').focus(),150)} function quickAsk(q){$('#assistantInput').value=q;askAssistant()}
function assistantAnswer(q){
 const t=q.toLowerCase();
 if(/chocolate|grape|raisin|onion|garlic|xylitol|coffee|caffeine|alcohol/.test(t))return'Potentially dangerous food exposure can be urgent. Do not induce vomiting unless a veterinarian specifically tells you to. Note the product, amount and time, and contact a vet promptly. You can also use Care → Food checker for a quick explanation.';
 if(/not eating|won.?t eat|no appetite/.test(t))return'A reduced appetite can have many causes. If your pet refuses food and is also weak, repeatedly vomiting, painful, very young/old, diabetic, or has another illness, contact a vet promptly. For a persistent appetite change without those red flags, arrange a veterinary assessment rather than trying medicines at home.';
 if(/vomit|diarr/.test(t))return'Watch hydration, frequency, blood, pain, behaviour and whether your pet can keep water down. Repeated vomiting, blood, severe lethargy, abdominal swelling, very young/old pets or suspected toxin exposure should be assessed urgently. Avoid giving human anti-diarrhoeal or anti-vomiting medicines unless a vet directs you.';
 if(/groom|bath|brush|nail|coat/.test(t))return'Grooming depends on species, coat, skin and lifestyle. Open Care → Grooming coach for a routine. In general, brush gently, use pet-safe products, avoid deep ear cleaning, and stop if the animal becomes distressed or painful.';
 if(/bleed|blood/.test(t))return'For external bleeding, use clean cloth or gauze and steady gentle pressure while arranging urgent veterinary help. Do not repeatedly lift the cloth to check. Heavy bleeding, pale gums, collapse or breathing trouble are emergencies.';
 if(/heat|hot car|overheat/.test(t))return'Move the animal to shade or a cooler place, start gradual cooling with room-temperature water and airflow, and seek veterinary help. Avoid ice-cold immersion. Collapse, confusion or breathing difficulty is an emergency.';
 if(/found|injured animal|rescue/.test(t))return'Keep yourself and traffic safe first. Avoid unnecessary handling, especially with wildlife or a frightened animal. Use the “I found an animal” flow on Home, then open Find Help for vets/rescuers in the city.';
 if(/food|eat|diet|nutrition/.test(t))return'For healthy pets, use a complete diet appropriate for species and life stage as the foundation. Human foods should be occasional and species-safe. Open Care → Food checker for common foods. Medical or weight-loss diets should be planned with a veterinarian.';
 return'I can help with food safety, grooming, rescue first-response, reminders and basic care education. If your pet has breathing trouble, collapse, seizures, severe bleeding, repeated vomiting, inability to urinate, severe pain or suspected poisoning, use emergency contacts now.';
}
function askAssistant(){const i=$('#assistantInput'),q=i.value.trim();if(!q)return;$('#assistantChat').insertAdjacentHTML('beforeend',`<div class="user-msg">${esc(q)}</div>`);i.value='';const a=assistantAnswer(q);setTimeout(()=>{$('#assistantChat').insertAdjacentHTML('beforeend',`<div class="bot-msg">${esc(a)}</div>`);$('#assistantChat').scrollTop=$('#assistantChat').scrollHeight},120)}

function openEmergency(){show('emergencyModal')}
function emergencyChoice(t){
 const m={
  road:'Move out of traffic danger first. Avoid unnecessary movement. If safe, use a blanket or firm board to support the body and contact a vet or trained rescuer.',
  bleeding:'Apply steady gentle pressure with clean cloth or gauze. Heavy or uncontrolled bleeding needs urgent veterinary care.',
  poison:'Do not induce vomiting or give home remedies unless a veterinarian instructs you. Keep the product/packaging and seek veterinary help urgently.',
  heat:'Move to shade/cooling, use room-temperature water and airflow, and seek veterinary help. Avoid ice-cold immersion.',
  breathing:'Breathing difficulty is an emergency. Keep handling minimal, keep the airway area unobstructed and transport to veterinary care as soon as possible.',
  other:'Keep yourself safe, minimise handling and contact a veterinarian or trained rescuer. If the animal is wildlife, avoid close handling unless trained.'
 };$('#emergencyAdvice').textContent=m[t];
}
function openFoundWizard(){show('foundModal')}
function foundChoice(t){
 const m={
  injured:'Approach slowly and watch for defensive behaviour. Keep handling minimal, control bleeding with gentle pressure if needed, and arrange veterinary/rescue help.',
  road:'Protect yourself from traffic first. Do not drag an injured animal by the legs. If safe, use a blanket or firm support for movement and call a vet/rescuer.',
  abandoned:'Observe from a safe distance first—especially very young animals—to make sure the mother is not nearby. If truly abandoned, arrange a safe temporary space and contact a rescuer.',
  lost:'Take a clear photo, note exact location and distinguishing features, check for an ID tag, and share only necessary location/contact information. A vet may be able to check for a microchip.',
  wildlife:'Do not attempt close handling unless trained. Keep people/pets away and contact a wildlife rescuer or appropriate local authority. Different species need different handling.',
  babies:'Avoid separating babies from the mother unless there is immediate danger. Observe discreetly and contact a rescuer if injured, orphaned or in an unsafe location.'
 };$('#foundAdvice').textContent=m[t];
}

init();
