
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
  ['Groom gently','Regular brushing helps you notice skin or coat changes early. Stop if the animal becomes distressed.'],
  ['Large-animal leg check','For cattle, buffaloes, horses, camels, goats and sheep, notice limping, swelling, hoof changes or reluctance to move.'],
  ['Ruminant routine','For cattle, buffaloes, goats and sheep, a sudden drop in eating, drinking or rumination deserves prompt attention.'],
  ['Rabbit fibre first','Healthy rabbits need a high-fibre diet built around good-quality grass hay, plus fresh water and appropriate greens/pellets.']
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

const FEED_GUIDES={
  rabbit:{icon:'🐇',name:'Rabbit',title:'High fibre comes first',body:'Healthy rabbits are herbivores with a specialised digestive system. Build the diet around unlimited good-quality grass hay, constant fresh water, an appropriate measured pellet and suitable leafy vegetables. Fruit should be an occasional treat.',watch:'Reduced appetite or reduced droppings can become serious quickly in rabbits. Contact a rabbit-experienced veterinarian promptly.'},
  horse:{icon:'🐎',name:'Horse',title:'Forage + water are the foundation',body:'Most healthy horses should have consistent access to suitable forage and clean water. Concentrates depend on body condition, workload, life stage and forage quality. Make feed changes gradually.',watch:'Colic signs, repeated rolling, severe sweating, choke, sudden lameness or refusal of feed need prompt veterinary attention.'},
  donkey:{icon:'🫏',name:'Donkey',title:'Fibre-rich, carefully managed feeding',body:'Donkeys are adapted to fibrous forage and can gain excess weight on energy-dense diets. Use suitable forage, clean water and species-appropriate minerals; avoid abrupt ration changes.',watch:'A donkey that stops eating can deteriorate quickly. Contact an equine veterinarian, especially with pain, colic signs or lethargy.'},
  cow:{icon:'🐄',name:'Cow / Cattle',title:'Forage, water and a balanced ration',body:'Cattle are ruminants. Good-quality forage or pasture and unrestricted clean water are the base; energy, protein, vitamins and minerals should be balanced for age, growth, pregnancy, lactation and production level.',watch:'Bloat, inability to stand, sudden appetite loss, calving difficulty, severe diarrhoea, breathing trouble or major injury need veterinary assessment.'},
  buffalo:{icon:'🐃',name:'Buffalo',title:'Ruminant feeding with heat-aware care',body:'Buffaloes need suitable forage/roughage, clean water and a balanced ration matched to life stage and milk/work demands. In hot climates, shade, water access and cooling opportunities are especially important.',watch:'Bloat, collapse, breathing trouble, sudden feed refusal, calving problems or severe heat distress require prompt veterinary help.'},
  goat:{icon:'🐐',name:'Goat',title:'Quality forage and browse first',body:'Goats are ruminants and intermediate browsers. A suitable diet is primarily good-quality forage or browse with clean fresh water and a goat-appropriate mineral programme.',watch:'Sudden bloat, inability to urinate, severe diarrhoea, weakness, kidding problems or abrupt appetite loss need veterinary advice.'},
  sheep:{icon:'🐑',name:'Sheep',title:'Forage + sheep-specific minerals',body:'Sheep are grazing ruminants. Base feeding on good-quality forage/pasture, constant fresh water and minerals formulated for sheep. Do not assume goat mineral products are interchangeable.',watch:'Bloat, sudden weakness, lambing problems, severe lameness, parasite-related decline or abrupt appetite changes should be assessed promptly.'},
  camel:{icon:'🐪',name:'Camel',title:'Roughage and species-appropriate browsing',body:'Camels are adapted to fibrous browse and roughage. Provide suitable forage/browse, clean water, appropriate minerals and gradual ration changes. Individual needs vary with work, climate, pregnancy and lactation.',watch:'Severe dehydration, inability to rise, colic-like pain, major wounds or sustained refusal to eat need a veterinarian familiar with camelids.'},
  pig:{icon:'🐖',name:'Pig',title:'Balanced complete feed, not scraps',body:'Pigs need a nutritionally balanced ration appropriate for age and production stage, plus constant clean water. Avoid relying on table scraps or abrupt diet changes.',watch:'Breathing difficulty, high fever, repeated vomiting, severe diarrhoea, neurologic signs or sudden feed refusal require veterinary attention.'}
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
  let note='Add an animal to start a care dashboard.';
  if(pets.length&&due) note=`${due} reminder${due===1?' is':'s are'} due. Open My Pets to review.`;
  else if(pets.length) note=`${pets[0].name} and your animal dashboard are ready. No reminders are currently due.`;
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

function petEmoji(s){return ({Dog:'🐶',Cat:'🐱',Rabbit:'🐇',Cow:'🐄',Buffalo:'🐃',Horse:'🐎',Donkey:'🫏',Camel:'🐪',Goat:'🐐',Sheep:'🐑',Pig:'🐖','Llama / Alpaca':'🦙',Bird:'🐦'})[s]||'🐾'}
function openPetForm(){show('petModal')}
function savePet(e){e.preventDefault();pets.push({id:'p'+Date.now(),name:$('#pName').value.trim(),species:$('#pSpecies').value,breed:$('#pBreed').value.trim(),age:$('#pAge').value.trim(),weight:$('#pWeight').value,sex:$('#pSex').value,coat:$('#pCoat').value.trim(),city:$('#pCity').value.trim(),notes:$('#pNotes').value.trim()});store('pawsosPets',pets);e.target.reset();hide('petModal');renderPets();renderCheckinChooser();updateHomeMetrics()}
function renderPets(){
 $('#petList').innerHTML=pets.length?pets.map(p=>`<div class="pet-card"><div class="pet-avatar">${petEmoji(p.species)}</div><div><b>${esc(p.name)}</b><small>${esc([p.species,p.breed,p.age,p.weight?p.weight+' kg':''].filter(Boolean).join(' • '))}</small>${p.notes?`<small>${esc(p.notes)}</small>`:''}</div><button class="icon-btn" onclick="deletePet('${p.id}')">⋯</button></div>`).join(''):'<div class="empty-soft">No animals yet. Add a profile to unlock reminders and daily check-ins.</div>';
}
function deletePet(id){if(!confirm('Remove this animal profile?'))return;pets=pets.filter(p=>p.id!==id);reminders=reminders.filter(r=>r.petId!==id);store('pawsosPets',pets);store('pawsosReminders',reminders);renderPets();renderReminders();renderCheckinChooser();updateHomeMetrics()}
function openReminderForm(){if(!pets.length){openPetForm();return};$('#rPet').innerHTML=pets.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('');show('reminderModal')}
function saveReminder(e){e.preventDefault();reminders.push({id:'r'+Date.now(),petId:$('#rPet').value,type:$('#rType').value,title:$('#rTitle').value.trim(),date:$('#rDate').value,done:false});store('pawsosReminders',reminders);e.target.reset();hide('reminderModal');renderReminders();updateHomeMetrics()}
function renderReminders(){
 const sorted=[...reminders].sort((a,b)=>a.date.localeCompare(b.date));const today=new Date();today.setHours(0,0,0,0);
 $('#reminderList').innerHTML=sorted.length?sorted.map(r=>{const pet=pets.find(p=>p.id===r.petId),due=new Date(r.date+'T00:00:00')<=today&&!r.done;return`<div class="reminder"><div><b class="${due?'due':''}">${esc(r.title)}</b><small>${esc(pet?pet.name:'Pet')} • ${esc(r.type)} • ${esc(r.date)}</small></div><button class="icon-btn" onclick="toggleReminder('${r.id}')">${r.done?'✓':'○'}</button></div>`}).join(''):'<div class="empty-soft">No reminders yet. Add vaccination, deworming, grooming, hoof/foot care or vet-check dates.</div>';
}
function toggleReminder(id){const r=reminders.find(x=>x.id===id);if(r)r.done=!r.done;store('pawsosReminders',reminders);renderReminders();updateHomeMetrics()}
function renderCheckinChooser(){$('#checkinChooser').innerHTML=pets.length?`<select id="ciPet" class="control">${pets.map(p=>`<option value="${p.id}">${esc(p.name)}</option>`).join('')}</select>`:'<div class="empty-soft">Add an animal first to use daily check-ins.</div>';$('#checkinForm').style.display=pets.length?'grid':'none'}
function saveCheckin(e){
 e.preventDefault();if(!pets.length)return;
 const scores=[+$('#ciAppetite').value,+$('#ciEnergy').value,+$('#ciWater').value,+$('#ciToilet').value],zeros=scores.filter(x=>x===0).length,ones=scores.filter(x=>x===1).length,petId=$('#ciPet').value,pet=pets.find(p=>p.id===petId);
 checkins.unshift({id:'c'+Date.now(),petId,date:new Date().toISOString().slice(0,10),scores});store('pawsosCheckins',checkins.slice(0,200));
 let msg=`Saved for ${pet.name}. `;
 const large=['Cow','Buffalo','Horse','Donkey','Camel','Goat','Sheep','Pig'].includes(pet.species);
 const rabbit=pet.species==='Rabbit';
 const bird=pet.species==='Bird';
 if(zeros>=1){
   msg+='One or more major changes were reported. Contact a veterinarian promptly. ';
   if(rabbit) msg+='For rabbits, not eating or producing fewer droppings can become urgent quickly.';
   else if(bird) msg+='For birds, breathing effort, sitting fluffed on the cage floor, inability to perch, bleeding or marked weakness need prompt avian-veterinary assessment.';
   else if(large) msg+='For large animals, also watch for bloat, colic-like pain, inability to stand, severe lameness, difficult birth, breathing trouble or major injury.';
   else msg+='Breathing trouble, collapse, repeated vomiting, blood, inability to urinate, seizures or suspected poisoning are important red flags.';
 } else if(ones>=2) msg+='Several changes are different from normal. Monitor closely and contact your veterinarian if they persist, worsen or concern you.';
 else msg+='Everything entered is close to normal today. Keep watching for changes from this animal’s usual pattern.';
 $('#checkinResult').textContent=msg;
}

function showCare(which){$$('.care-view').forEach(v=>v.classList.toggle('active',v.id==='care-'+which));$$('.care-tab').forEach(b=>b.classList.toggle('active',b.dataset.care===which));if(which==='food')renderFoodSuggestions()}
function normaliseFood(q){q=q.trim().toLowerCase();if(q.includes('raisin'))return'raisins';if(q.includes('grape'))return'grapes';if(q.includes('yoghurt'))return'yogurt';if(q.includes('chocol'))return'chocolate';if(q.includes('bone'))return'bones';if(q.includes('dough'))return'raw dough';return q}
function renderSpeciesFeedGuide(sp){
 const g=FEED_GUIDES[sp];if(!g)return;
 $('#foodSuggestions').innerHTML='';
 $('#foodQuery').value='';
 $('#foodQuery').disabled=true;
 $('#foodQuery').placeholder='Species feeding guide shown below';
 $('#foodResult').innerHTML=`<span class="food-status safe">Species feeding basics</span><span class="big-icon">${g.icon}</span><h3>${g.name}</h3><p><b>${g.title}</b><br>${g.body}</p><small>⚠ ${g.watch}</small>`;
}
function renderFoodSuggestions(){
 const sp=$('#foodSpecies').value;
 if(sp!=='dog'&&sp!=='cat'){renderSpeciesFeedGuide(sp);return}
 $('#foodQuery').disabled=false;$('#foodQuery').placeholder='Try chocolate, banana, rice, milk...';
 const q=normaliseFood($('#foodQuery').value),keys=Object.keys(FOOD_DB).filter(k=>!q||k.includes(q)).slice(0,8);$('#foodSuggestions').innerHTML=keys.map(k=>`<button onclick="checkFood('${k}')">${k}</button>`).join('');if(q&&FOOD_DB[q])checkFood(q);else if(!q)$('#foodResult').innerHTML='<span class="big-icon">🥣</span><b>Search a food</b><p>PawWing SOS will show a simple safety category and why.</p>';
}
function checkFood(key){
 const sp=$('#foodSpecies').value;if(sp!=='dog'&&sp!=='cat'){renderSpeciesFeedGuide(sp);return}
 $('#foodQuery').value=key;const row=FOOD_DB[key]?.[sp];if(!row)return;const[status,why,next]=row,icon=status==='safe'?'✅':status==='caution'?'🟡':'🚫',label=status==='safe'?'Generally okay':status==='caution'?'Use caution':'Avoid / potentially dangerous';$('#foodResult').innerHTML=`<span class="food-status ${status}">${label}</span><span class="big-icon">${icon}</span><h3>${key.charAt(0).toUpperCase()+key.slice(1)}</h3><p>${why}</p><small>${next}</small>`
}
function buildGrooming(){
 const sp=$('#gSpecies').value,coat=$('#gCoat').value,life=$('#gLifestyle').value;let brush,bathe,ears,nails,teeth,title,extra='';
 const names={dog:'Dog',cat:'Cat',rabbit:'Rabbit',horse:'Horse',donkey:'Donkey',cow:'Cow / Cattle',buffalo:'Buffalo',goat:'Goat',sheep:'Sheep',camel:'Camel',pig:'Pig'};
 const icons={dog:'🐶',cat:'🐱',rabbit:'🐇',horse:'🐎',donkey:'🫏',cow:'🐄',buffalo:'🐃',goat:'🐐',sheep:'🐑',camel:'🐪',pig:'🐖'};
 title=`${icons[sp]||'🐾'} ${names[sp]||'Animal'} • ${coat} coat`;
 if(sp==='cat'){
   brush=coat==='long'?'Brush gently every day or most days to reduce tangles and hairballs.':coat==='medium'?'Brush several times a week, increasing during shedding.':'A weekly gentle brush is a useful coat and skin check for many short-haired cats.';
   bathe='Most healthy cats do not need routine baths. Bathe only when genuinely necessary or advised, using cat-safe products.';ears='Check ears for redness, discharge, odour or persistent scratching. Do not push cotton buds deep into the canal.';nails='Check claws regularly and trim only if needed and if you know the safe technique. Provide suitable scratching surfaces.';teeth='Build a gradual dental routine with cat-safe products; persistent bad breath or mouth pain needs veterinary assessment.';
 } else if(sp==='dog'){
   brush=coat==='long'?'Brush daily or near-daily, paying attention behind ears, armpits, tail and friction areas.':coat==='medium'?'Brush a few times each week and more during shedding.':'Brush about weekly as a skin/coat check, more often during shedding.';bathe='Bathe when dirty or odorous and according to coat/skin needs, using dog-safe shampoo. Excessive bathing can irritate some skin types.';ears='Check ears regularly, especially after swimming or outdoor activity. Redness, strong odour, pain or discharge should be assessed by a vet.';nails='Check nail length every few weeks. If you are unsure where the quick is, ask a groomer or vet to demonstrate.';teeth='Aim for a regular dog-safe dental routine; never use human toothpaste.';
 } else if(sp==='rabbit'){
   brush=coat==='long'?'Comb/brush daily or near-daily to prevent mats and reduce swallowed hair.':'Brush regularly, increasing during moulting. Remove loose fur gently.';bathe='Avoid routine full-body bathing. Rabbits can become stressed or chilled; spot-clean only when appropriate and seek veterinary advice for soiling that keeps recurring.';ears='Look for wax, crusting, discharge, head shaking or pain. Lop-eared rabbits may need especially careful monitoring.';nails='Check nails regularly and trim with correct restraint and technique; ask a rabbit-experienced professional if unsure.';teeth='Rabbit teeth grow continuously. Appetite changes, drooling or difficulty eating can signal dental disease and need a vet.';extra='Provide a dry, clean living area and check the hindquarters daily, especially in warm weather.';
 } else if(sp==='horse'||sp==='donkey'){
   brush='Use regular grooming to remove mud/debris, inspect skin, identify wounds and build handling tolerance. Adjust frequency to workload, weather and coat.';bathe='Bathe when needed, especially after heavy sweating, but avoid stripping the coat unnecessarily in cold conditions. Dry the animal appropriately.';ears='Inspect eyes, ears and face gently for discharge, injuries, ticks or fly irritation. Avoid aggressive cleaning inside the ears.';nails='Hoof care is essential: pick out hooves regularly and use a qualified farrier/trimmer on an appropriate schedule.';teeth='Arrange periodic dental assessment by an equine veterinary/dental professional; chewing difficulty, quidding or weight loss need attention.';extra='Check legs for heat/swelling and inspect tack-contact areas after work.';
 } else if(['cow','buffalo','goat','sheep'].includes(sp)){
   brush='Use brushing/coat checks as needed to remove mud and spot ticks, lice, wounds, hair loss or skin disease. Keep handling calm and safe.';bathe='Full bathing is usually need-based rather than cosmetic. Prioritise clean housing, shade, dry bedding and hygienic management; use species-safe products when washing is necessary.';ears='Check ears, eyes and skin for discharge, parasites, wounds or fly irritation. Use identification/tag areas carefully.';nails='Foot/hoof checks are important. Overgrowth, foul smell, cracks, swelling or lameness should be managed by an experienced hoof-care professional or veterinarian.';teeth='Monitor chewing, cud/rumination, feed dropping and body condition. Mouth problems or sudden appetite loss warrant veterinary assessment.';extra=sp==='buffalo'?'In hot weather, prioritise shade, abundant water and appropriate cooling/wallowing access.':'Watch body condition and parasite burden alongside coat care.';
 } else if(sp==='camel'){
   brush='Brush/inspect the coat as needed and check pressure/contact areas, especially in working camels, for rubs, sores or parasites.';bathe='Wash when needed for hygiene or heavy soiling, considering climate and drying conditions. Avoid harsh products.';ears='Inspect eyes, ears, nostrils and skin for discharge, wounds, ticks or fly irritation.';nails='Check feet/pads regularly for cracks, wounds, foreign objects or abnormal wear, especially in working animals.';teeth='Monitor chewing, feed intake and body condition; dental problems need a veterinarian experienced with camels.';extra='Check saddle/harness areas carefully after work and provide heat-appropriate rest and hydration.';
 } else {
   brush='Brush or inspect the skin routinely to find wounds, parasites or irritation early.';bathe='Clean only as needed with species-appropriate products and safe drying conditions.';ears='Check eyes, ears and skin for discharge, wounds or parasites.';nails='Inspect feet/hooves routinely and arrange professional trimming when needed.';teeth='Monitor appetite, chewing and body condition; mouth problems need veterinary assessment.';
 }
 const outdoor=life==='outdoor'?'After outdoor or field time, add a quick tick, thorn, wound, foot/hoof and heat-stress check.':life==='mixed'?'After longer outdoor activity, check feet/hooves, skin/coat and parasites.':'Indoor animals still benefit from skin, foot/claw and dental checks.';
 $('#groomPlan').innerHTML=`<span class="label">YOUR ROUTINE</span><h2>${title}</h2><div class="groom-list"><div class="groom-item"><span>🪮</span><div><b>Coat / skin</b><small>${brush}</small></div></div><div class="groom-item"><span>🛁</span><div><b>Bathing / hygiene</b><small>${bathe}</small></div></div><div class="groom-item"><span>👂</span><div><b>Ears / face</b><small>${ears}</small></div></div><div class="groom-item"><span>🦶</span><div><b>Feet / hooves / claws</b><small>${nails}</small></div></div><div class="groom-item"><span>🦷</span><div><b>Dental / chewing</b><small>${teeth}</small></div></div><div class="groom-item"><span>🌿</span><div><b>Lifestyle check</b><small>${outdoor}${extra?' '+extra:''}</small></div></div></div><div class="soft-note" style="margin-top:12px">Pain, severe matting/soiling, lameness, hoof disease, skin infection, sudden coat changes or unsafe-to-handle behaviour need professional assessment rather than forceful home grooming.</div>`;
}

function show(id){$('#'+id).classList.remove('hidden')} function hide(id){$('#'+id).classList.add('hidden')} function sheetBackdrop(e,id){if(e.target.id===id)hide(id)}
function openAssistant(){show('assistantSheet');setTimeout(()=>$('#assistantInput').focus(),150)} function quickAsk(q){$('#assistantInput').value=q;askAssistant()}
function assistantAnswer(q){
 const t=q.toLowerCase();
 if(/rabbit|bunny/.test(t)&&/feed|food|eat|diet|nutrition/.test(t))return'For a healthy rabbit, fibre is the foundation: unlimited good-quality grass hay, constant fresh water, an appropriate measured pellet and suitable leafy vegetables. Fruit should be occasional. If a rabbit stops eating or produces fewer droppings, contact a rabbit-experienced veterinarian promptly.';
 if(/horse|donkey|equine/.test(t)&&/feed|food|eat|diet|care/.test(t))return'For healthy horses and donkeys, suitable forage and clean water are the foundation. Concentrates depend on body condition, work and life stage, and feed changes should be gradual. Colic signs, repeated rolling, choke, severe lameness or refusal of feed need prompt veterinary help.';
 if(/cow|cattle|buffalo|goat|sheep/.test(t)&&/feed|food|eat|diet|care/.test(t))return'Cattle, buffaloes, goats and sheep are ruminants. Base feeding on suitable forage/roughage, fresh water and a balanced species-specific ration/mineral programme. Sudden bloat, inability to stand, difficult birth, severe lameness or abrupt feed refusal need veterinary attention.';
 if(/camel/.test(t)&&/feed|food|eat|diet|care/.test(t))return'Camels generally need suitable roughage/browse, clean water, species-appropriate minerals and gradual feed changes. Workload, climate, pregnancy and lactation change requirements. Severe dehydration, inability to rise, major wounds or sustained refusal to eat need an experienced veterinarian.';
 if(/injured.*(cow|buffalo|horse|donkey|camel|goat|sheep)|(?:cow|buffalo|horse|donkey|camel|goat|sheep).*injured/.test(t))return'With a large injured animal, protect yourself first. Stay out of the kicking/striking zone, do not crowd or force the animal to stand, control traffic/people around it, and contact a large-animal veterinarian or trained rescuer. Avoid ropes, dragging or improvised lifting unless directed by experienced handlers.';
 if(/chocolate|grape|raisin|onion|garlic|xylitol|coffee|caffeine|alcohol/.test(t))return'Potentially dangerous food exposure can be urgent. Do not induce vomiting unless a veterinarian specifically tells you to. Note the product, amount and time, and contact a vet promptly. You can also use Care → Food checker for a quick explanation.';
 if(/not eating|won.?t eat|no appetite/.test(t))return'A reduced appetite can have many causes. If the animal refuses food and is also weak, repeatedly vomiting, painful, very young/old, diabetic, or has another illness, contact a vet promptly. For a persistent appetite change without those red flags, arrange a veterinary assessment rather than trying medicines at home.';
 if(/vomit|diarr/.test(t))return'Watch hydration, frequency, blood, pain, behaviour and whether your pet can keep water down. Repeated vomiting, blood, severe lethargy, abdominal swelling, very young/old pets or suspected toxin exposure should be assessed urgently. Avoid giving human anti-diarrhoeal or anti-vomiting medicines unless a vet directs you.';
 if(/groom|bath|brush|nail|coat/.test(t))return'Grooming depends on species, coat, skin and lifestyle. Open Care → Grooming coach for a routine. In general, brush gently, use pet-safe products, avoid deep ear cleaning, and stop if the animal becomes distressed or painful.';
 if(/bleed|blood/.test(t))return'For external bleeding, use clean cloth or gauze and steady gentle pressure while arranging urgent veterinary help. Do not repeatedly lift the cloth to check. Heavy bleeding, pale gums, collapse or breathing trouble are emergencies.';
 if(/heat|hot car|overheat/.test(t))return'Move the animal to shade or a cooler place, start gradual cooling with room-temperature water and airflow, and seek veterinary help. Avoid ice-cold immersion. Collapse, confusion or breathing difficulty is an emergency.';
 if(/found|injured animal|rescue/.test(t))return'Keep yourself and traffic safe first. Avoid unnecessary handling, especially with wildlife or a frightened animal. Use the “I found an animal” flow on Home, then open Find Help for vets/rescuers in the city.';
 if(/food|eat|diet|nutrition/.test(t))return'Diet must match the species and life stage. Dogs/cats can use Care → Food & feeding for common-food safety; rabbits and large animals have species feeding basics there. Individual rations for livestock, equids, pregnancy, lactation, growth or medical conditions should be planned with a veterinarian or qualified nutrition professional.';
 return'I can help with food safety, species-aware feeding basics, grooming, rescue first-response, reminders and basic care education for companion and large animals. If your pet has breathing trouble, collapse, seizures, severe bleeding, repeated vomiting, inability to urinate, severe pain or suspected poisoning, use emergency contacts now.';
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
  other:'Keep yourself safe, minimise handling and contact a veterinarian or trained rescuer. With horses, cattle, buffaloes, camels, goats or sheep, stay clear of kicking/striking zones and do not attempt forceful lifting or restraint without experienced help. If the animal is wildlife, avoid close handling unless trained.'
 };$('#emergencyAdvice').textContent=m[t];
}
function openFoundWizard(){show('foundModal')}
function foundChoice(t){
 const sp=$('#foundSpecies')?$('#foundSpecies').value:'companion';
 const m={
  injured:'Approach slowly and watch for defensive behaviour. Keep handling minimal, control bleeding with gentle pressure if safe, and arrange veterinary/rescue help.',
  road:'Protect yourself from traffic first. Do not drag an injured animal by the legs. If safe and the animal is small enough, use a blanket or firm support for movement and call a vet/rescuer.',
  abandoned:'Observe from a safe distance first—especially very young animals—to make sure the mother or herd is not nearby. If truly abandoned, arrange a safe temporary area and contact a rescuer or veterinarian.',
  lost:'Take a clear photo, note exact location and distinguishing features, check for an ID tag/marking, and share only necessary location/contact information. A vet may be able to check for a microchip where applicable.',
  wildlife:'Do not attempt close handling unless trained. Keep people and domestic animals away and contact a wildlife rescuer or appropriate local authority.',
  babies:'Avoid separating young animals from the mother unless there is immediate danger. Observe discreetly and contact a veterinarian/rescuer if injured, orphaned or unsafe.'
 };
 let extra='';
 if(sp==='equine')extra=' For a horse or donkey, stay out of the kicking zone, keep the area quiet and do not force a down animal to stand.';
 else if(sp==='ruminant')extra=' For cattle, buffaloes, goats or sheep, avoid standing directly behind the animal, do not attempt forceful lifting, and be alert for bloat or difficult birth.';
 else if(sp==='camel')extra=' For a camel, keep clear of kicking/striking and biting range and use experienced handlers for restraint or transport.';
 else if(sp==='pig')extra=' Keep handling calm and avoid chasing or overheating; use experienced help for restraint and transport.';
 else if(sp==='rabbit')extra=' Rabbits are fragile prey animals: minimise restraint, support the hindquarters and keep the animal quiet and warm while arranging care.';
 $('#foundAdvice').textContent=m[t]+extra;
}


/* =============================================================
   PawWing SOS v5.1 — Animal & Bird Rescue Network
   Source-backed starter directory, bird mode, helplines, admin,
   donations, install/update UX. Static-build admin changes are
   intentionally local to the browser/device.
   ============================================================= */

const PAWSOS_VERSION='5.1.0';
let helpMode=localStorage.getItem('pawsosHelpMode')||'animal';
let emergencyMode='animal';
let adminOverrides=JSON.parse(localStorage.getItem('pawsosAdminOverrides')||'{}');
let deletedContacts=JSON.parse(localStorage.getItem('pawsosDeletedContacts')||'[]').map(String);
let deferredInstallPrompt=null;
const ADMIN_HASH='c22235a132844b82edd9303fcd2b4fecf0522c3415ef2f492695c5a4d2d5e21b';

seed.forEach(x=>{if(!x.domain)x.domain='animal'});
['Jivdaya Charitable Trust','RESQ Charitable Trust'].forEach(n=>{const x=seed.find(r=>r.name===n);if(x)x.domain='both'});

const BIRD_CONTACTS=[
  {id:'b1',country:'India',domain:'bird',type:'Rescuer',name:'Wildlife Rescue / Raptor Rescue Delhi',state:'Delhi',city:'Delhi',phones:['+91 98100 29698'],address:'C-6/1, Rehmani Chowk, Street 9, Wazirabad Village, Delhi 110084',open24:false,services:['Injured birds','Raptors','Wildlife rescue','Bird rehabilitation'],source:'https://www.raptorrescue.org/contact'},
  {id:'b2',country:'India',domain:'bird',type:'Vet',name:'Government Veterinary Hospital, Tis Hazari',state:'Delhi',city:'Delhi',phones:['011 23890485','011 20833238'],address:'Tis Hazari, Delhi',open24:true,services:['24/7 government veterinary service','Animals and birds','Emergency veterinary care'],source:'https://development.delhi.gov.in/development/24-x-7-emergency-services-veterinary-hospital-tis-hazari'},
  {id:'b3',country:'India',domain:'bird',type:'Rescuer',name:'Pakshimitra Pune — Gaurav Gade',state:'Maharashtra',city:'Pune',phones:['+91 70302 85520','+91 97672 92425'],address:'Pune, Maharashtra',open24:false,services:['Bird rescue contact','District bird rescue network'],source:'https://www.pakshimitra.org/bird-rescue/'},
  {id:'b4',country:'India',domain:'bird',type:'Rescuer',name:'Nisarg Sanvardhan Pandharpur — Srikant Badwe',state:'Maharashtra',city:'Pandharpur',phones:['+91 97636 32528'],address:'Pandharpur, Solapur district, Maharashtra',open24:false,services:['Bird rescue contact','Local bird welfare'],source:'https://www.pakshimitra.org/bird-rescue/'},
  {id:'b5',country:'India',domain:'bird',type:'Rescuer',name:'Pakshimitra Satara — Rohit Kulkarni',state:'Maharashtra',city:'Satara',phones:['+91 96652 72199','+91 96043 92338','+91 91309 03096'],address:'Satara, Maharashtra',open24:false,services:['Bird rescue contacts','District bird rescue network'],source:'https://www.pakshimitra.org/bird-rescue/'},
  {id:'b6',country:'India',domain:'bird',type:'Rescuer',name:'Jivdaya Charitable Trust — Avian Rescue',state:'Gujarat',city:'Ahmedabad',phones:['+91 99244 18184'],address:'Ahmedabad Panjrapol Campus, Ambawadi, Ahmedabad 380015',open24:false,services:['Bird treatment','Avian operation theatre','Rehabilitation','Mobile treatment van'],source:'https://www.jivdayatrust.org/'},
  {id:'b7',country:'India',domain:'bird',type:'Rescuer',name:'Shree Ganesh Foundation — Bird & Animal Rescue',state:'Gujarat',city:'Ahmedabad',phones:['+91 94263 26350'],address:'Block 69, Panchvati Apartment, opposite Vinayak Petrol Pump, Sola Road, Naranpura, Ahmedabad 380063',open24:false,services:['Bird rescue','Animal rescue','365-day rescue work'],source:'https://shreeganeshfoundation.org/'},
  {id:'b8',country:'India',domain:'bird',type:'Rescuer',name:'JD Foundation Bird Rescue',state:'Gujarat',city:'Ahmedabad',phones:['+91 93285 26234'],address:'32, near Bhathiji Mandir, Kanaiya Farm, Vatva Gamdi Road, Ahmedabad 382440',open24:false,services:['Bird rescue','Wildlife assistance'],source:'https://www.jdfoundation.org.in/'},
  {id:'b9',country:'India',domain:'bird',type:'Rescuer',name:'People for Animals Wildlife Hospital',state:'Karnataka',city:'Bengaluru',phones:['+91 99000 25370','+91 99803 39880'],address:'Bengaluru, Karnataka',open24:false,services:['Urban wildlife','Bird rescue','Wildlife hospital','365-day on-call rescue'],source:'https://www.pfawildlifehospital.org/'},
  {id:'b10',country:'India',domain:'bird',type:'Vet',name:'Dr Rina Dev’s Animal & Bird Clinic',state:'Maharashtra',city:'Mumbai',phones:['+91 99677 72829'],address:'Khar West, Mumbai 400052, Maharashtra',open24:false,services:['Bird veterinary care','Animal veterinary care'],source:'https://www.google.com/maps/search/?api=1&query=Dr+Rina+Dev%27s+Animal+%26+Bird+Clinic+Mumbai'},
  {id:'b11',country:'India',domain:'bird',type:'Vet',name:'The Exotics Vet — Chembur',state:'Maharashtra',city:'Mumbai',phones:['+91 96996 83433'],address:'Chembur, Mumbai, Maharashtra',open24:false,services:['Exotic pets','Bird veterinary care'],source:'https://www.google.com/maps/search/?api=1&query=The+Exotics+Vet+Chembur+Mumbai'},
  {id:'b12',country:'India',domain:'bird',type:'Vet',name:'Small & Exotic Animal Hospital',state:'Maharashtra',city:'Mumbai',phones:['+91 99204 98984'],address:'Kandivali West, Mumbai, Maharashtra',open24:true,services:['Exotic animals','Birds','24/7 veterinary care'],source:'https://www.google.com/maps/search/?api=1&query=Small+and+Exotic+Animal+Hospital+Kandivali+West+Mumbai'},
  {id:'b13',country:'India',domain:'bird',type:'Rescuer',name:'HELP Animals & Birds Hospital',state:'Maharashtra',city:'Mumbai',phones:['+91 92233 33338'],address:'Dana Bandar / Masjid Bandar, Mumbai, Maharashtra',open24:false,services:['Animal and bird hospital','Rescue support'],source:'https://www.google.com/maps/search/?api=1&query=HELP+Animals+%26+Birds+Hospital+Mumbai'},
  {id:'b14',country:'India',domain:'bird',type:'Rescuer',name:'MAA Medical Aid For Birds',state:'Maharashtra',city:'Mumbai',phones:['+91 98205 23802'],address:'Andheri East, Mumbai, Maharashtra',open24:false,services:['Bird medical aid','Bird rescue'],source:'https://www.google.com/maps/search/?api=1&query=MAA+Medical+Aid+For+Birds+Mumbai'},
  {id:'b15',country:'India',domain:'bird',type:'Vet',name:'The Exotics Vet — Pimple Nilakh',state:'Maharashtra',city:'Pune',phones:['+91 87999 49258'],address:'Pimple Nilakh, Pune, Maharashtra',open24:false,services:['Exotic pets','Bird veterinary care'],source:'https://www.google.com/maps/search/?api=1&query=The+Exotics+Vet+Pimple+Nilakh+Pune'},
  {id:'b16',country:'India',domain:'bird',type:'Shop',name:'Pune Exotic Birds and Pets',state:'Maharashtra',city:'Pune',phones:['+91 86691 80992'],address:'Kondhwa, Pune, Maharashtra',open24:false,services:['Bird supplies','Pet shop','Bird food and accessories'],source:'https://www.google.com/maps/search/?api=1&query=Pune+Exotic+Birds+and+Pets+Kondhwa'},
  {id:'b17',country:'India',domain:'bird',type:'Shop',name:'Bird Store Delhi',state:'Delhi',city:'Delhi',phones:['+91 74283 18250'],address:'1/5142, Street 5, Balbir Nagar, Shahdara, Delhi 110032',open24:false,services:['Bird food','Bird supplies','Bird shop'],source:'https://birdstore.in/stores'},

  {id:'b18',country:'USA',domain:'bird',type:'Rescuer',name:'Wild Bird Fund',state:'New York',city:'New York City',phones:['+1 646 306 2862'],address:'565 Columbus Avenue, New York, NY 10024',open24:false,services:['Injured wild birds','Small wildlife rehabilitation','Bird rescue hotline'],source:'https://www.wildbirdfund.org/about-us/location/'},
  {id:'b19',country:'UK',domain:'bird',type:'Rescuer',name:'Wildlife Aid Foundation',state:'England',city:'London',phones:['+44 1372 360404'],address:'Randalls Farmhouse, Randalls Road, Leatherhead, Surrey KT22 0AL',open24:true,services:['Wildlife emergency advice','Bird rescue','Wildlife hospital'],source:'https://wildlifeaid.org.uk/emergency-helpline/'},
  {id:'b20',country:'Brazil',domain:'bird',type:'Rescuer',name:'São Paulo CeMaCAS / Divisão da Fauna Silvestre',state:'São Paulo',city:'São Paulo',phones:['+55 11 3885 6669','+55 11 95220 0219'],address:'Estrada de Perus, 300, Perus, São Paulo, SP',open24:false,services:['Wildlife rescue','Injured wild birds','Wildlife reception'],source:'https://prefeitura.sp.gov.br/web/meio_ambiente/w/resgate-e-cuidados-com-o-filhote'},
  {id:'b21',country:'China',domain:'bird',type:'Rescuer',name:'Beijing Wildlife Rescue Center',state:'Beijing',city:'Beijing',phones:['89496118'],address:'Beijing, China',open24:false,services:['Wildlife rescue','Injured wild birds'],source:'https://yllhj.beijing.gov.cn/'},
  {id:'b22',country:'China',domain:'bird',type:'Rescuer',name:'Beijing Raptor Rescue Center',state:'Beijing',city:'Beijing',phones:['62205666'],address:'Beijing, China',open24:false,services:['Raptor rescue','Bird rehabilitation'],source:'https://yllhj.beijing.gov.cn/'},
  {id:'b23',country:'Russia',domain:'bird',type:'Vet',name:'Moscow State Veterinary Service — Ornithology',state:'Moscow',city:'Moscow',phones:['+7 495 612 12 12'],address:'Moscow, Russia',open24:true,services:['24/7 state veterinary contact centre','Bird/ornithology veterinary routing','Animal emergencies'],source:'https://mos-obvet.ru/'},
  {id:'b24',country:'Mexico',domain:'bird',type:'Rescuer',name:'Brigada de Vigilancia Animal (BVA)',state:'Ciudad de México',city:'Mexico City',phones:['+52 55 5208 9898'],address:'Mexico City, Mexico',open24:true,services:['Domestic and wild animal rescue','Bird/wildlife response','Animal welfare'],source:'https://www.ssc.cdmx.gob.mx/agrupamientos/brigada-de-vigilancia-animal'},
  {id:'b25',country:'Japan',domain:'bird',type:'Rescuer',name:'Tokyo Animal Welfare Consultation Center — Tama',state:'Tokyo',city:'Tokyo',phones:['+81 42 581 7435'],address:'Tokyo, Japan',open24:false,services:['Injured dogs/cats','Pet bird consultation','Animal welfare consultation'],source:'https://www.hokeniryo.metro.tokyo.lg.jp/shisetsu/jigyosyo/douso'},
  {id:'b26',country:'Germany',domain:'bird',type:'Vet',name:'FU Berlin — Ornamental, Zoo & Wild Birds',state:'Berlin',city:'Berlin',phones:['+49 30 838 62676'],address:'Königsweg 63, Building 31, 14163 Berlin',open24:false,services:['Ornamental birds','Wild birds','Poultry','Avian diagnostics and treatment'],source:'https://www.vetmed.fu-berlin.de/en/einrichtungen/kliniken/we18/gefluegel/_alt/clinic1/index.html'},
  {id:'b27',country:'Argentina',domain:'bird',type:'Rescuer',name:'Buenos Aires Wildlife Rescue / Civil Defence',state:'Buenos Aires (CABA)',city:'Buenos Aires',phones:['103'],address:'Buenos Aires City, Argentina',open24:true,services:['Injured wildlife','Wild birds','Civil Defence routing'],source:'https://buenosaires.gob.ar/gcaba_historico/ecoparque/programas-de-conservacion/centro-de-rescate-de-fauna-silvestre-crfs'}
].map(x=>({...x,verified:true,community:false,email:'',website:x.source,checked:'2026-10-01'}));

const HELPLINES={
  'India':[
    {label:'1962 Animal / Mobile Veterinary Helpline',number:'1962',scope:'Participating Indian states',supports:'animal',note:'Toll-free animal-distress/mobile veterinary route. State activation, hours and whether field pickup is available vary; do not assume wild-bird pickup.',source:'https://dahd.gov.in/sites/default/files/2023-07/ShortCode1962.pdf'},
    {label:'Delhi 24×7 Government Veterinary Hospital',number:'011 23890485',alt:'011 20833238',scope:'Delhi',supports:'both',note:'Government veterinary emergency service for different kinds of animals and birds.',source:'https://development.delhi.gov.in/development/24-x-7-emergency-services-veterinary-hospital-tis-hazari'},
    {label:'RESQ Wildlife / Large Animal',number:'+91 91725 11100',scope:'Pune HQ; other Maharashtra helplines in directory',supports:'both',note:'24-hour helpline for wildlife emergencies and large domestic animal cases; technical rescues for animals of all types.',source:'https://www.resqct.org/contact'}
  ],
  'USA':[
    {label:'ASPCA Animal Poison Control',number:'+1 888 426 4435',scope:'USA / poison guidance',supports:'both',note:'24/7 poison-control consultation; a fee may apply. Not a general rescue-dispatch line.',source:'https://www.aspca.org/pet-care/aspca-poison-control'},
    {label:'Wild Bird Fund',number:'+1 646 306 2862',scope:'New York City',supports:'bird',note:'Message line for sick/injured birds and small wildlife; clinic accepts wildlife during published hours.',source:'https://www.wildbirdfund.org/about-us/location/'}
  ],
  'UK':[
    {label:'RSPCA',number:'0300 1234 999',scope:'England & Wales',supports:'both',note:'Report injured animals and animal-welfare concerns; service scope and response depend on circumstances.',source:'https://www.rspca.org.uk/reportaconcern'},
    {label:'Wildlife Aid Foundation',number:'01372 360404',scope:'Surrey / UK wildlife advice',supports:'bird',note:'Wildlife emergency helpline; direct rescue catchment is Surrey/surrounding areas, but advice can cover British wildlife emergencies.',source:'https://wildlifeaid.org.uk/emergency-helpline/'}
  ],
  'Brazil':[
    {label:'IBAMA Linha Verde',number:'0800 061 8080',scope:'Brazil',supports:'bird',note:'Federal environmental information/reporting channel; not a guaranteed emergency rescue dispatch service.',source:'https://www.gov.br/ibama/pt-br/canais_atendimento/linha-verde'},
    {label:'São Paulo CeMaCAS',number:'+55 11 3885 6669',alt:'+55 11 95220 0219',scope:'São Paulo city',supports:'bird',note:'Municipal wildlife service; WhatsApp number is published for wildlife reception/rescue guidance.',source:'https://prefeitura.sp.gov.br/web/meio_ambiente/w/resgate-e-cuidados-com-o-filhote'}
  ],
  'China':[
    {label:'Beijing Wildlife Rescue Center',number:'89496118',scope:'Beijing',supports:'bird',note:'Official Beijing wildlife rescue institution.',source:'https://yllhj.beijing.gov.cn/'},
    {label:'Beijing Raptor Rescue Center',number:'62205666',scope:'Beijing',supports:'bird',note:'Officially listed raptor rescue institution.',source:'https://yllhj.beijing.gov.cn/'}
  ],
  'Russia':[
    {label:'Moscow State Veterinary Service',number:'+7 495 612 12 12',scope:'Moscow',supports:'both',note:'24/7 state veterinary contact centre, including animal/bird emergency routing.',source:'https://mos-obvet.ru/'}
  ],
  'Mexico':[
    {label:'Brigada de Vigilancia Animal',number:'+52 55 5208 9898',scope:'Mexico City',supports:'both',note:'Mexico City animal-welfare brigade for domestic and wild animal incidents.',source:'https://www.ssc.cdmx.gob.mx/agrupamientos/brigada-de-vigilancia-animal'}
  ],
  'Japan':[
    {label:'Tokyo Animal Welfare Consultation Center',number:'+81 3 3302 3507',alt:'+81 42 581 7435',scope:'Tokyo',supports:'both',note:'Tokyo government animal-welfare consultation; Tama office guidance includes injured animals and pet birds. Published office hours apply.',source:'https://www.hokeniryo.metro.tokyo.lg.jp/shisetsu/jigyosyo/douso'}
  ],
  'Germany':[
    {label:'Berlin Veterinary Emergency Service',number:'+49 30 8322 9000',scope:'Berlin',supports:'both',note:'Veterinary emergency service number published by Berlin authorities.',source:'https://www.berlin.de/sen/verbraucherschutz/aufgaben/tierschutz/tiergesundheit/'},
    {label:'FU Berlin Wildlife Emergency',number:'+49 160 3758447',scope:'Berlin',supports:'bird',note:'Wildlife emergency contact outside normal hours published by the veterinary university.',source:'https://www.vetmed.fu-berlin.de/'}
  ],
  'Argentina':[
    {label:'Civil Defence 103 — Wildlife',number:'103',scope:'Buenos Aires City (CABA)',supports:'bird',note:'Buenos Aires city guidance directs people who find injured wild animals to Civil Defence 103.',source:'https://buenosaires.gob.ar/gcaba_historico/ecoparque/programas-de-conservacion/centro-de-rescate-de-fauna-silvestre-crfs'}
  ]
};

const DONATIONS=[
  {name:'Jivdaya Charitable Trust',country:'India',cause:'Animals + birds',icon:'🐦',text:'Free medical care for unowned animals and avian/wildlife rehabilitation in Ahmedabad.',url:'https://www.jivdayatrust.org/donate-now/'},
  {name:'RESQ Charitable Trust',country:'India',cause:'Wildlife + large animals',icon:'🛟',text:'Wildlife emergency response, technical rescue and large-animal care from Pune and regional teams.',url:'https://www.resqct.org/donate'},
  {name:'Wild Bird Fund',country:'USA',cause:'Wild birds',icon:'🪶',text:'Medical care and rehabilitation for injured, sick and orphaned wildlife in New York City.',url:'https://www.wildbirdfund.org/'},
  {name:'Wildlife Aid Foundation',country:'UK',cause:'Wildlife + birds',icon:'🦉',text:'Wildlife hospital and rescue service caring for British wildlife.',url:'https://wildlifeaid.org.uk/'},
  {name:'People for Animals Wildlife Hospital',country:'India',cause:'Urban wildlife',icon:'🦅',text:'Bengaluru wildlife hospital and rescue service for birds and other urban wildlife.',url:'https://www.pfawildlifehospital.org/'}
];

FEED_GUIDES.bird={icon:'🐦',name:'Companion bird',title:'Species-specific diet — seeds alone are not enough',body:'Bird nutrition varies widely by species. For many companion parrots, an avian veterinarian may recommend a high-quality formulated diet as the foundation with appropriate vegetables/greens and smaller amounts of seeds or nuts. Keep clean fresh water available. Never assume one diet fits every bird.',watch:'Avocado, chocolate, caffeine and alcohol can be dangerous to birds. Do not force-feed a sick or injured bird, and do not feed rescued wild birds unless an avian veterinarian or wildlife rehabilitator directs you.'};
TIPS.push(['Bird water & bowl check','Replace drinking water, wash bowls, remove spoiled fresh foods promptly and watch for a sudden drop in eating or drinking.'],['Feather check','Without restraining unnecessarily, notice new feather damage, bleeding, discharge, persistent fluffing or a bird sitting unusually low.']);

function isAdmin(){return sessionStorage.getItem('pawsosAdmin')==='1'}
function mergedContact(x){return adminOverrides[String(x.id)]?{...x,...adminOverrides[String(x.id)]}:x}
allContacts=function(){return [...seed,...BIRD_CONTACTS,...custom].filter(x=>!deletedContacts.includes(String(x.id))).map(mergedContact)};

function domainLabel(i){return i.domain==='bird'?'🐦 Bird':i.domain==='both'?'🐾🐦 Animal + Bird':'🐾 Animal'}
contactCard=function(i){
  const phones=(i.phones||[]).filter(Boolean),primary=phones[0]||'',country=i.country||'India',where=i.national?`${country} • nationwide`:[i.city,i.state,country].filter(Boolean).join(', '),typeText=`${domainLabel(i)} ${i.type}`;
  return `<article class="contact-card ${i.domain==='bird'?'bird-contact':''}"><div class="card-top"><span class="type-badge ${i.type.toLowerCase()}">${esc(typeText)}</span><div class="card-top-actions">${isAdmin()?`<button class="admin-mini" onclick="adminEdit('${i.id}')">Edit</button>`:''}<button class="save-btn" onclick="toggleSave('${i.id}')">${saved.includes(String(i.id))?'♥':'♡'}</button></div></div><h3>${esc(i.name)}</h3><div class="location">📍 ${esc(i.address)}<br>${esc(where)}</div><div class="services">${(i.services||[]).map(s=>`<span>${esc(s)}</span>`).join('')}</div><div class="phones">${phones.length?phones.map((p,n)=>`<div class="phone"><span>${n?'Alternate':'Primary'}</span><a href="tel:${cleanPhone(p)}">${esc(p)}</a></div>`).join(''):'<div class="muted">No published phone</div>'}</div><div class="card-meta"><span>${i.open24?'● Listed 24/7':'Check hours'}</span><span class="${i.community?'community':'verified'}">${i.community?'◷ Community-added':'✓ Source-backed record'}</span></div><div class="contact-actions">${primary?`<a href="tel:${cleanPhone(primary)}">📞 Call</a>`:`<button onclick="openMapsSearch('${esc(i.name)}')">⌕ Search</button>`}${i.source?`<a target="_blank" rel="noreferrer" href="${escAttr(i.source)}">↗ Source</a>`:`<span></span>`}<a target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(i.name+', '+i.address+', '+where)}">🧭 Map</a></div></article>`;
};

renderDirectory=function(){
  const term=$('#search').value.trim().toLowerCase(),country=$('#country').value||DEFAULT_COUNTRY,state=$('#state').value,city=$('#city').value.trim().toLowerCase(),only24=$('#only24').checked;
  let items=allContacts().filter(i=>{const sameCountry=(i.country||'India')===country,regionOK=i.national||state==='All regions'||i.state===state,cityOK=i.national||!city||(i.city||'').toLowerCase().includes(city),domainOK=i.domain===helpMode||i.domain==='both',hay=`${i.name} ${i.country||'India'} ${i.state||''} ${i.city||''} ${i.address||''} ${(i.phones||[]).join(' ')} ${(i.services||[]).join(' ')}`.toLowerCase();return sameCountry&&regionOK&&cityOK&&domainOK&&(filter==='All'||i.type===filter)&&(!only24||i.open24)&&hay.includes(term)});
  if(savedOnly)items=items.filter(i=>saved.includes(String(i.id)));
  $('#resultCount').textContent=`${items.length} ${helpMode==='bird'?'bird':'animal'} contact${items.length===1?'':'s'} ${savedOnly?'saved':'shown'} • ${country}`;
  $('#cards').innerHTML=items.length?items.map(contactCard).join(''):`<div class="empty-soft" style="grid-column:1/-1">No matching ${helpMode==='bird'?'bird':'animal'} contact is preloaded for this city yet. Use city discovery / Google Maps or add a known public contact.<br><br><button class="primary" onclick="loadCityPack()">Build city emergency pack</button> <button class="secondary" onclick="openAdd()">+ Add contact</button></div>`;
};

function setHelpMode(mode){
  helpMode=mode==='bird'?'bird':'animal';localStorage.setItem('pawsosHelpMode',helpMode);filter='All';savedOnly=false;
  $('#modeAnimal')?.classList.toggle('active',helpMode==='animal');$('#modeBird')?.classList.toggle('active',helpMode==='bird');
  $('#birdMapsButton')?.classList.toggle('hidden',helpMode!=='bird');
  if($('#liveVetLabel'))$('#liveVetLabel').textContent=helpMode==='bird'?'Avian / exotic vets':'Vets';
  if($('#liveRescuerLabel'))$('#liveRescuerLabel').textContent=helpMode==='bird'?'Bird / wildlife rescuers':'Rescuers';
  if($('#liveShelterLabel'))$('#liveShelterLabel').textContent=helpMode==='bird'?'Bird / wildlife rehab':'Shelters';
  if($('#liveShopLabel'))$('#liveShopLabel').textContent=helpMode==='bird'?'Bird food & shops':'Pet shops';
  $$('.chip').forEach(x=>x.classList.toggle('active',x.dataset.filter==='All'));
  renderDirectory();renderHelplines();
}

function renderHelplines(){
  const country=$('#country')?.value||DEFAULT_COUNTRY,items=HELPLINES[country]||[];
  if($('#helplineTitle'))$('#helplineTitle').textContent=`${country} emergency contacts`;
  if(!$('#helplineCards'))return;
  const sorted=[...items].sort((a,b)=>{const av=a.supports===helpMode||a.supports==='both'?0:1,bv=b.supports===helpMode||b.supports==='both'?0:1;return av-bv});
  $('#helplineCards').innerHTML=sorted.length?sorted.map(h=>`<article class="helpline-card ${(h.supports===helpMode||h.supports==='both')?'relevant':''}"><div><span>${h.supports==='bird'?'🐦':h.supports==='both'?'🐾🐦':'🐾'} ${esc(h.scope)}</span><h3>${esc(h.label)}</h3><p>${esc(h.note)}</p></div><div class="helpline-actions"><a href="tel:${cleanPhone(h.number)}">📞 ${esc(h.number)}</a>${h.alt?`<a href="tel:${cleanPhone(h.alt)}">Alt ${esc(h.alt)}</a>`:''}<a target="_blank" rel="noreferrer" href="${escAttr(h.source)}">Source ↗</a></div></article>`).join(''):'<div class="empty-soft">No single national animal/bird rescue number has been preloaded for this country. Use the directory and local map search for your city.</div>';
}

openAdd=function(){
  const country=$('#country').value||DEFAULT_COUNTRY;$('#fCountry').value=country;refreshAddRegions();const st=$('#state').value;if(st&&st!=='All regions'&&[...$('#fState').options].some(o=>o.value===st))$('#fState').value=st;if($('#city').value)$('#fCity').value=$('#city').value;if($('#fDomain'))$('#fDomain').value=helpMode;show('addModal');
};
saveContact=function(e){
  e.preventDefault();const phones=[$('#fPhone1').value.trim(),$('#fPhone2').value.trim()].filter(Boolean);custom.unshift({id:'c'+Date.now(),country:$('#fCountry').value,domain:$('#fDomain')?.value||helpMode,type:$('#fType').value,name:$('#fName').value.trim(),state:$('#fState').value,city:$('#fCity').value.trim(),phones,address:$('#fAddress').value.trim(),email:$('#fEmail').value.trim(),website:$('#fWebsite').value.trim(),source:$('#fWebsite').value.trim(),open24:$('#f24').checked,services:$('#fServices').value.split(',').map(x=>x.trim()).filter(Boolean),verified:false,community:true});store('pawsosCustomContacts',custom);e.target.reset();$('#fCountry').value=$('#country').value||DEFAULT_COUNTRY;refreshAddRegions();hide('addModal');renderDirectory();
};

const oldFetchLivePlaces=fetchLivePlaces;
fetchLivePlaces=async function(type,g){
  if(helpMode!=='bird')return oldFetchLivePlaces(type,g);
  const radius=type==='Rescuer'||type==='Shelter'?40000:22000;let query;
  if(type==='Vet')query=`[out:json][timeout:18];(nwr["amenity"="veterinary"](around:${radius},${g.lat},${g.lon}););out center tags 45;`;
  else if(type==='Shop')query=`[out:json][timeout:18];(nwr["shop"="pet"](around:${radius},${g.lat},${g.lon}););out center tags 45;`;
  else if(type==='Shelter')query=`[out:json][timeout:18];(nwr["amenity"="animal_shelter"](around:${radius},${g.lat},${g.lon});nwr["name"~"bird|avian|wildlife|raptor|rehab|rescue",i](around:${radius},${g.lat},${g.lon}););out center tags 45;`;
  else query=`[out:json][timeout:18];(nwr["name"~"bird|avian|wildlife|raptor|rescue|SPCA|animal welfare",i](around:${radius},${g.lat},${g.lon}););out center tags 45;`;
  const r=await fetch('https://overpass-api.de/api/interpreter?data='+encodeURIComponent(query));if(!r.ok)throw new Error('Live directory service is temporarily unavailable.');const data=await r.json();
  return (data.elements||[]).map(e=>{const t=e.tags||{},lat=e.lat??e.center?.lat,lon=e.lon??e.center?.lon,name=t.name||t['name:en'];if(!name||!lat||!lon)return null;const phone=t.phone||t['contact:phone']||'',address=[t['addr:housenumber'],t['addr:street'],t['addr:city']].filter(Boolean).join(' ')||$('#city').value.trim();return{name,type,phone,address,lat,lon,website:t.website||t['contact:website']||''}}).filter(Boolean).filter((x,i,a)=>a.findIndex(y=>y.name===x.name)===i).sort((a,b)=>(b.phone?1:0)-(a.phone?1:0));
};

const oldLoadLive=loadLive;
loadLive=async function(type){
  await oldLoadLive(type);
  if(helpMode==='bird'&&$('#liveStatus'))$('#liveStatus').textContent+=' Confirm avian/bird capability directly before travelling; public map tags often do not record veterinary specialities.';
};
loadCityPack=async function(){
  try{const city=$('#city').value.trim();if(!city)throw new Error('Enter a city first.');$('#liveStatus').textContent=`Building ${helpMode==='bird'?'bird':'animal'} emergency pack…`;$('#liveResults').innerHTML='<div class="empty-soft">Searching public map data…</div>';const g=await geocodeCity();const types=['Vet','Rescuer','Shelter','Shop'],groups=await Promise.all(types.map(async type=>{try{return[type,(await fetchLivePlaces(type,g)).slice(0,3)]}catch(e){return[type,[]]}}));$('#liveTitle').textContent=`${helpMode==='bird'?'Bird':'Animal'} emergency pack for ${city}`;let total=0;$('#liveResults').innerHTML=groups.map(([type,items])=>{total+=items.length;const label=helpMode==='bird'?(type==='Vet'?'Avian/exotic vet candidates':type==='Rescuer'?'Bird/wildlife rescuers':type==='Shelter'?'Bird/wildlife rehab':type==='Shop'?'Bird/pet shops':type):type;return`<div class="live-item"><strong>${type==='Vet'?'🩺':type==='Rescuer'?'🛟':type==='Shelter'?'🏠':'🛍️'} ${label}</strong>${items.length?items.map(x=>liveCard(x)).join(''):'<small>No usable public listing returned.</small>'}</div>`}).join('');$('#liveStatus').textContent=`Found ${total} public map listings. ${helpMode==='bird'?'Confirm avian capability and opening hours before travel.':'Confirm availability before travelling.'}`;}catch(err){$('#liveStatus').textContent=err.message;$('#liveResults').innerHTML=`<div class="empty-soft">${esc(err.message)}</div>`}
};
function openBirdMaps(){const city=$('#city').value.trim()||'',region=$('#state').value==='All regions'?'':$('#state').value,country=$('#country').value||DEFAULT_COUNTRY,q=['avian veterinarian bird rescue bird shop',city,region,country].filter(Boolean).join(' ');window.open('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q),'_blank','noopener')}

const oldBuildGrooming=buildGrooming;
buildGrooming=function(){
  if($('#gSpecies').value!=='bird')return oldBuildGrooming();
  const life=$('#gLifestyle').value;$('#groomPlan').innerHTML=`<span class="label">YOUR ROUTINE</span><h2>🐦 Bird • feather & hygiene care</h2><div class="groom-list"><div class="groom-item"><span>🪶</span><div><b>Feathers / preening</b><small>Watch feather condition while allowing normal preening. Sudden feather damage, persistent plucking, blood feathers or abnormal moulting deserve avian-veterinary assessment.</small></div></div><div class="groom-item"><span>💦</span><div><b>Bathing</b><small>Offer species-appropriate bathing or gentle misting only if the bird is comfortable with it. Avoid soaps, perfumes and forced bathing.</small></div></div><div class="groom-item"><span>🦶</span><div><b>Nails & feet</b><small>Use varied, safe perch sizes and inspect feet. Nail trimming can bleed heavily if done incorrectly; ask an avian vet or experienced bird professional if unsure.</small></div></div><div class="groom-item"><span>🪶</span><div><b>Beak & wings</b><small>Do not file/trim the beak or clip wings at home as routine “grooming.” Abnormal beak growth or mobility concerns need avian-professional advice.</small></div></div><div class="groom-item"><span>🧼</span><div><b>Cage / environment</b><small>Keep bowls, cage surfaces and perches clean and dry. Avoid smoke, aerosols and overheating cookware fumes around birds.</small></div></div><div class="groom-item"><span>🌿</span><div><b>${life==='outdoor'?'Outdoor safety':'Daily observation'}</b><small>${life==='outdoor'?'Protect from predators, extreme temperatures and escape; supervise outdoor exposure securely.':'Notice appetite, droppings, breathing, activity and ability to perch—birds may hide illness until they are quite unwell.'}</small></div></div></div><div class="soft-note" style="margin-top:12px">A bird that is fluffed, weak, breathing with effort, bleeding, unable to perch or sitting on the cage floor needs prompt avian-veterinary assessment.</div>`;
};

const oldAssistantAnswer=assistantAnswer;
assistantAnswer=function(q){const t=q.toLowerCase();if(/bird|parrot|budgie|cockatiel|pigeon|sparrow|crow|raptor|owl/.test(t)){
  if(/injur|found|rescue|hit|window|collision|cat|dog attack|manja|thread|entang/.test(t))return'For an injured bird, minimise handling. If safe, place it in a ventilated cardboard box lined with a towel or paper, keep it quiet/dim and away from pets, and contact an avian vet or wildlife rescuer. Do not force food or water. Cat/dog bites, bleeding, breathing difficulty, inability to stand/perch, or entanglement at height are urgent. Use Find Help → Bird Help.';
  if(/feed|food|eat|diet|seed|nutrition/.test(t))return'Bird diets are species-specific. For many companion parrots, seeds alone are not a complete diet; an avian veterinarian may recommend a formulated diet plus suitable vegetables/greens, with seeds/nuts limited. Fresh water is essential. Avoid avocado, chocolate, caffeine and alcohol. Never force-feed a sick or rescued wild bird.';
  if(/groom|bath|nail|beak|wing|feather/.test(t))return'Bird grooming is mostly healthy preening, optional species-appropriate bathing/misting, clean perches/cage and observation of feathers and feet. Do not trim a beak or clip wings at home as routine grooming. Nail trims can bleed if done incorrectly, so use an avian vet or experienced professional if unsure.';
  return'For birds, PawWing SOS separates avian vets, bird/wildlife rescuers and bird food/shops. Use Find Help → Bird Help. Weakness, laboured breathing, bleeding, cat/dog attack, seizures, toxin exposure or inability to perch should be treated as urgent.';
 }return oldAssistantAnswer(q)};

openEmergency=function(mode='animal'){setEmergencyMode(mode);show('emergencyModal')};
function setEmergencyMode(mode){emergencyMode=mode==='bird'?'bird':'animal';$('#emAnimal')?.classList.toggle('active',emergencyMode==='animal');$('#emBird')?.classList.toggle('active',emergencyMode==='bird');$('#animalEmergencyGrid')?.classList.toggle('hidden',emergencyMode!=='animal');$('#birdEmergencyGrid')?.classList.toggle('hidden',emergencyMode!=='bird');if($('#emergencyLabel'))$('#emergencyLabel').textContent=emergencyMode==='bird'?'BIRD EMERGENCY':'ANIMAL EMERGENCY';if($('#emergencyHeading'))$('#emergencyHeading').textContent=emergencyMode==='bird'?'Keep the bird calm. Then get specialist help.':'Safety first. Then get help.';if($('#emergencyAdvice'))$('#emergencyAdvice').textContent=emergencyMode==='bird'?'Choose the closest situation. Avoid unnecessary handling and do not force food or water while arranging avian/wildlife help.':'Choose the closest situation. PawWing SOS will give brief first-response guidance and take you to emergency contacts.'}
emergencyChoice=function(t){const animal={road:'Move out of traffic danger first. Avoid unnecessary movement. If safe, use a blanket or firm board to support the body and contact a vet or trained rescuer.',bleeding:'Apply steady gentle pressure with clean cloth or gauze. Heavy or uncontrolled bleeding needs urgent veterinary care.',poison:'Do not induce vomiting or give home remedies unless a veterinarian instructs you. Keep the product/packaging and seek veterinary help urgently.',heat:'Move to shade/cooling, use room-temperature water and airflow, and seek veterinary help. Avoid ice-cold immersion.',breathing:'Breathing difficulty is an emergency. Keep handling minimal, keep the airway area unobstructed and transport to veterinary care as soon as possible.',other:'Keep yourself safe, minimise handling and contact a veterinarian or trained rescuer. With large animals, stay clear of kicking/striking zones. With wildlife, avoid close handling unless trained.'},bird={collision:'If the bird is safely reachable, place it in a ventilated cardboard box in a dark, quiet place. Do not force food or water. If it has obvious injury, abnormal breathing, cannot stand/perch, or does not recover normally, contact a bird/wildlife professional promptly.',birdBleeding:'Use very gentle steady pressure with clean gauze only if you can do so without worsening stress. Significant or continuing bleeding is urgent. Do not apply human antiseptics or powders unless an avian vet directs you.',catBite:'A cat or dog attack is urgent even when punctures look tiny. Keep the bird quiet in a ventilated box and contact an avian veterinarian or wildlife rehabilitator promptly.',entangled:'Do not pull on string/manja or climb into unsafe places/power lines. Prevent further struggling if safely possible and call a trained bird/wildlife rescuer. Embedded thread or wing/leg injuries need professional care.',birdBreathing:'Laboured/open-mouth breathing, tail-bobbing, collapse, marked weakness or inability to perch is an emergency. Minimise handling, keep the bird quiet and transport for avian veterinary care.',babyBird:'A fully feathered, alert fledgling may have parents nearby and may not need removal. A naked/poorly feathered nestling can sometimes be returned to its nest if safe. Injured, cold, attacked or clearly orphaned chicks need professional advice.'};$('#emergencyAdvice').textContent=(emergencyMode==='bird'?bird:animal)[t]||'Contact a veterinarian or trained rescuer promptly.'};
function emergencyFind(type){hide('emergencyModal');go('help');setHelpMode(emergencyMode);setFilter(type)}

const oldFoundChoice=foundChoice;
foundChoice=function(t){if($('#foundSpecies')?.value!=='bird')return oldFoundChoice(t);const m={injured:'Minimise handling. If safe, place the bird in a ventilated box lined with paper/towel, keep it quiet and dim, and contact an avian vet or bird/wildlife rescuer. Do not force food or water.',road:'Move yourself out of traffic danger first. If the bird is safely reachable, contain it in a ventilated box with minimal handling and seek avian/wildlife help.',abandoned:'Do not assume a young bird is abandoned. Observe from a safe distance; fledglings are often cared for on the ground. If injured, cold, attacked or clearly orphaned, contact a bird rescuer.',lost:'For a companion bird, take a clear photo, note species/colour/ring details without publishing private ownership identifiers, alert local avian vets/rescues and post in local lost-pet groups.',wildlife:'Avoid bare-hand contact with a sick wild bird when possible. Keep people/pets away, use gloves if handling is necessary, contain only if safe, and contact a wildlife/bird rescuer.',babies:'A feathered fledgling may belong on the ground near its parents. A nestling may be returned to its nest if safe. If injured, cold, attacked or no parents return after appropriate observation, contact a bird rehabilitator.'};$('#foundAdvice').textContent=m[t]||m.injured};

function renderDonations(){if(!$('#donationGrid'))return;$('#donationGrid').innerHTML=DONATIONS.map(d=>`<article class="donation-card"><div class="donation-icon">${d.icon}</div><span>${esc(d.country)} • ${esc(d.cause)}</span><h2>${esc(d.name)}</h2><p>${esc(d.text)}</p><div class="amount-chips"><button>₹500 / local equivalent</button><button>₹1,000 / local equivalent</button><button>Any amount</button></div><a target="_blank" rel="noreferrer" href="${escAttr(d.url)}">Donate on official site ↗</a></article>`).join('')}

async function sha256(text){if(!crypto?.subtle)throw new Error('Secure browser context required for admin login.');const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text));return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join('')}
function openAdminLogin(){if(isAdmin()){go('admin');return}$('#adminLoginError').textContent='';$('#adminUser').value='';$('#adminPass').value='';show('adminLoginModal');setTimeout(()=>$('#adminUser').focus(),120)}
async function adminLogin(e){e.preventDefault();try{const ok=$('#adminUser').value.trim()==='admin'&&(await sha256($('#adminPass').value))===ADMIN_HASH;if(!ok){$('#adminLoginError').textContent='Invalid administrator credentials.';return}sessionStorage.setItem('pawsosAdmin','1');hide('adminLoginModal');go('admin');renderDirectory()}catch(err){$('#adminLoginError').textContent=err.message}}
function adminLogout(){sessionStorage.removeItem('pawsosAdmin');go('home');renderDirectory()}
function renderAdmin(){if(!isAdmin()){openAdminLogin();return}const term=($('#adminSearch')?.value||'').toLowerCase(),country=$('#adminCountry')?.value||'all',domain=$('#adminDomain')?.value||'all';let items=allContacts().filter(x=>(country==='all'||x.country===country)&&(domain==='all'||x.domain===domain)&&(`${x.name} ${x.city} ${x.state} ${(x.phones||[]).join(' ')}`).toLowerCase().includes(term));if($('#adminSummary'))$('#adminSummary').innerHTML=`<div><b>${items.length}</b><span>Visible records</span></div><div><b>${BIRD_CONTACTS.length}</b><span>Bird starter records</span></div><div><b>${deletedContacts.length}</b><span>Deleted locally</span></div><button class="secondary" onclick="restoreDeleted()">Restore deleted records</button>`;if($('#adminTable'))$('#adminTable').innerHTML=items.map(i=>`<article class="admin-row"><div><span>${esc(domainLabel(i))} • ${esc(i.type)} • ${esc(i.country)}</span><b>${esc(i.name)}</b><small>${esc(i.city||'')} ${i.phones?.length?'• '+esc(i.phones.join(' / ')):''}</small></div><div><button onclick="adminEdit('${i.id}')">Edit</button><button class="delete-btn" onclick="adminDelete('${i.id}')">Delete</button></div></article>`).join('')||'<div class="empty-soft">No records match.</div>'}
function adminEdit(id){if(!isAdmin())return openAdminLogin();const i=allContacts().find(x=>String(x.id)===String(id));if(!i)return;$('#aeId').value=i.id;$('#adminEditTitle').textContent=i.name;$('#aeName').value=i.name||'';$('#aeDomain').value=i.domain||'animal';$('#aeType').value=i.type||'Vet';$('#aeCountry').value=i.country||'India';$('#aeState').value=i.state||'';$('#aeCity').value=i.city||'';$('#aePhone1').value=i.phones?.[0]||'';$('#aePhone2').value=i.phones?.[1]||'';$('#aePhone3').value=i.phones?.[2]||'';$('#aeSource').value=i.source||'';$('#aeAddress').value=i.address||'';$('#aeServices').value=(i.services||[]).join(', ');$('#ae24').checked=!!i.open24;show('adminEditModal')}
function saveAdminEdit(e){e.preventDefault();if(!isAdmin())return openAdminLogin();const id=$('#aeId').value,base=allContacts().find(x=>String(x.id)===String(id));if(!base)return;adminOverrides[id]={...base,name:$('#aeName').value.trim(),domain:$('#aeDomain').value,type:$('#aeType').value,country:$('#aeCountry').value,state:$('#aeState').value.trim(),city:$('#aeCity').value.trim(),phones:[$('#aePhone1').value.trim(),$('#aePhone2').value.trim(),$('#aePhone3').value.trim()].filter(Boolean),source:$('#aeSource').value.trim(),website:$('#aeSource').value.trim(),address:$('#aeAddress').value.trim(),services:$('#aeServices').value.split(',').map(x=>x.trim()).filter(Boolean),open24:$('#ae24').checked,adminEdited:true,editedAt:new Date().toISOString()};store('pawsosAdminOverrides',adminOverrides);hide('adminEditModal');renderAdmin();renderDirectory()}
function adminDelete(id){if(!isAdmin())return openAdminLogin();const i=allContacts().find(x=>String(x.id)===String(id));if(!i)return;if(!confirm(`Delete ${i.name} from this local PawWing SOS directory?`))return;deletedContacts=[...new Set([...deletedContacts,String(id)])];store('pawsosDeletedContacts',deletedContacts);renderAdmin();renderDirectory()}
function restoreDeleted(){if(!isAdmin())return;if(!confirm('Restore all locally deleted directory records?'))return;deletedContacts=[];store('pawsosDeletedContacts',deletedContacts);renderAdmin();renderDirectory()}

const oldGo=go;
go=function(id,careView,scroll=true){if(id==='admin'&&!isAdmin()){openAdminLogin();return}oldGo(id,careView,scroll);if(id==='help'){setHelpMode(helpMode);renderHelplines()}if(id==='donate')renderDonations();if(id==='admin')renderAdmin()};

function registerPWA(){if(!('serviceWorker' in navigator))return;navigator.serviceWorker.register('sw.js').then(reg=>{if(reg.waiting)show('updateToast');reg.addEventListener('updatefound',()=>{const worker=reg.installing;if(!worker)return;worker.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller)show('updateToast')})});navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload());setInterval(()=>reg.update().catch(()=>{}),60*60*1000)}).catch(()=>{})}
function applyAppUpdate(){navigator.serviceWorker.getRegistration().then(reg=>{if(reg?.waiting)reg.waiting.postMessage({type:'SKIP_WAITING'});else location.reload()})}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;if($('#installBtn'))$('#installBtn').textContent='Install app'});
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;if($('#installBtn'))$('#installBtn').textContent='Installed ✓'});
async function installPWA(){if(deferredInstallPrompt){deferredInstallPrompt.prompt();await deferredInstallPrompt.userChoice;deferredInstallPrompt=null;return}alert('On Android/Chrome: open the browser menu and choose “Install app” or “Add to Home screen”. On iPhone/iPad Safari: Share → Add to Home Screen.')}

init=function(){
  const countries=Object.keys(COUNTRY_DATA);$('#country').innerHTML=countries.map(c=>`<option ${c===DEFAULT_COUNTRY?'selected':''}>${esc(c)}</option>`).join('');$('#fCountry').innerHTML=countries.map(c=>`<option ${c===DEFAULT_COUNTRY?'selected':''}>${esc(c)}</option>`).join('');$('#adminCountry').innerHTML='<option value="all">All countries</option>'+countries.map(c=>`<option>${esc(c)}</option>`).join('');$('#aeCountry').innerHTML=countries.map(c=>`<option>${esc(c)}</option>`).join('');refreshRegions();refreshAddRegions();$('#chips').innerHTML=['All','Vet','Rescuer','Shelter','Shop'].map(x=>`<button class="chip ${x==='All'?'active':''}" data-filter="${x}">${x}</button>`).join('');$$('.chip').forEach(b=>b.onclick=()=>setFilter(b.dataset.filter));$('#country').onchange=()=>{refreshRegions();renderDirectory();renderHelplines()};$('#state').onchange=()=>{refreshCities();renderDirectory()};$('#city').oninput=renderDirectory;$('#search').oninput=renderDirectory;$('#only24').onchange=renderDirectory;$('#fCountry').onchange=refreshAddRegions;$('#addForm').onsubmit=saveContact;$('#petForm').onsubmit=savePet;$('#reminderForm').onsubmit=saveReminder;$('#checkinForm').onsubmit=saveCheckin;$('#foodQuery').oninput=renderFoodSuggestions;$('#foodSpecies').onchange=renderFoodSuggestions;$('#assistantInput').addEventListener('keydown',e=>{if(e.key==='Enter')askAssistant()});$('#adminLoginForm').onsubmit=adminLogin;$('#adminEditForm').onsubmit=saveAdminEdit;renderDirectory();renderHelplines();renderPets();renderReminders();renderCheckinChooser();renderDonations();updateHomeMetrics();nextTip(true);setHelpMode(helpMode);const start=localStorage.getItem('pawsosLastPage')||'home';go(start,false);registerPWA();
};

init();
