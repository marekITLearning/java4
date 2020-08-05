const countries =
[
  {
    'ordnr': 1,
    'code': '004',
    'name': 'Afganská islamská republika',
    'iso3166_1': 'AF',
    'iso3166_2': 'AFG',
    'local_name': {
      'sk': 'Afganská islamská republika',
      'en': 'Afghanistan'
    },
    'region': 'Asia',
    'sub_region': 'Southern Asia',
    'score': 2
  },
  {
    'ordnr': 2,
    'code': '008',
    'name': 'Albánska republika',
    'iso3166_1': 'AL',
    'iso3166_2': 'ALB',
    'local_name': {
      'sk': 'Albánska republika',
      'en': 'Albania'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 2
  },
  {
    'ordnr': 3,
    'code': '010',
    'name': 'Antarktída',
    'iso3166_1': 'AQ',
    'iso3166_2': 'ATA',
    'local_name': {
      'sk': 'Antarktída',
      'en': 'Antarctica'
    },
    'region': 'Antarctica',
    'sub_region': 'Antarctica',
    'score': 0
  },
  {
    'ordnr': 4,
    'code': '012',
    'name': 'Alžírska demokratická ľudová republika',
    'iso3166_1': 'DZ',
    'iso3166_2': 'DZA',
    'local_name': {
      'sk': 'Alžírska demokratická ľudová republika',
      'en': 'Algeria'
    },
    'region': 'Africa',
    'sub_region': 'Northern Africa',
    'score': 1
  },
  {
    'ordnr': 5,
    'code': '016',
    'name': 'Teritórium Americkej Samoy',
    'iso3166_1': 'AS',
    'iso3166_2': 'ASM',
    'local_name': {
      'sk': 'Teritórium Americkej Samoy',
      'en': 'American Samoa'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 1
  },
  {
    'ordnr': 6,
    'code': '020',
    'name': 'Andorrské kniežatstvo',
    'iso3166_1': 'AD',
    'iso3166_2': 'AND',
    'local_name': {
      'sk': 'Andorrské kniežatstvo',
      'en': 'Andorra'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 7,
    'code': '024',
    'name': 'Angolská republika',
    'iso3166_1': 'AO',
    'iso3166_2': 'AGO',
    'local_name': {
      'sk': 'Angolská republika',
      'en': 'Angola'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 8,
    'code': '028',
    'name': 'Antigua a Barbuda',
    'iso3166_1': 'AG',
    'iso3166_2': 'ATG',
    'local_name': {
      'sk': 'Antigua a Barbuda',
      'en': 'Antigua and Barbuda'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 9,
    'code': '031',
    'name': 'Azerbajdžanská republika',
    'iso3166_1': 'AZ',
    'iso3166_2': 'AZE',
    'local_name': {
      'sk': 'Azerbajdžanská republika',
      'en': 'Azerbaijan'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 10,
    'code': '032',
    'name': 'Argentínska republika',
    'iso3166_1': 'AR',
    'iso3166_2': 'ARG',
    'local_name': {
      'sk': 'Argentínska republika',
      'en': 'Argentina'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 1
  },
  {
    'ordnr': 11,
    'code': '036',
    'name': 'Austrálsky zväz',
    'iso3166_1': 'AU',
    'iso3166_2': 'AUS',
    'local_name': {
      'sk': 'Austrálsky zväz',
      'en': 'Australia'
    },
    'region': 'Oceania',
    'sub_region': 'Australia and New Zealand',
    'score': 0
  },
  {
    'ordnr': 12,
    'code': '040',
    'name': 'Rakúska republika',
    'iso3166_1': 'AT',
    'iso3166_2': 'AUT',
    'local_name': {
      'sk': 'Rakúska republika',
      'en': 'Austria'
    },
    'region': 'Europe',
    'sub_region': 'Western Europe',
    'score': 0
  },
  {
    'ordnr': 13,
    'code': '044',
    'name': 'Bahamské spoločenstvo',
    'iso3166_1': 'BS',
    'iso3166_2': 'BHS',
    'local_name': {
      'sk': 'Bahamské spoločenstvo',
      'en': 'Bahamas'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 14,
    'code': '048',
    'name': 'Bahrajnské kráľovstvo',
    'iso3166_1': 'BH',
    'iso3166_2': 'BHR',
    'local_name': {
      'sk': 'Bahrajnské kráľovstvo',
      'en': 'Bahrain'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 1
  },
  {
    'ordnr': 15,
    'code': '050',
    'name': 'Bangladéšska ľudová republika',
    'iso3166_1': 'BD',
    'iso3166_2': 'BGD',
    'local_name': {
      'sk': 'Bangladéšska ľudová republika',
      'en': 'Bangladesh'
    },
    'region': 'Asia',
    'sub_region': 'Southern Asia',
    'score': 0
  },
  {
    'ordnr': 16,
    'code': '051',
    'name': 'Arménska republika',
    'iso3166_1': 'AM',
    'iso3166_2': 'ARM',
    'local_name': {
      'sk': 'Arménska republika',
      'en': 'Armenia'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 1
  },
  {
    'ordnr': 17,
    'code': '052',
    'name': 'Barbados',
    'iso3166_1': 'BB',
    'iso3166_2': 'BRB',
    'local_name': {
      'sk': 'Barbados',
      'en': 'Barbados'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 18,
    'code': '056',
    'name': 'Belgické kráľovstvo',
    'iso3166_1': 'BE',
    'iso3166_2': 'BEL',
    'local_name': {
      'sk': 'Belgické kráľovstvo',
      'en': 'Belgium'
    },
    'region': 'Europe',
    'sub_region': 'Western Europe',
    'score': 0
  },
  {
    'ordnr': 19,
    'code': '060',
    'name': 'Bermudy',
    'iso3166_1': 'BM',
    'iso3166_2': 'BMU',
    'local_name': {
      'sk': 'Bermudy',
      'en': 'Bermuda'
    },
    'region': 'Americas',
    'sub_region': 'Northern America',
    'score': 0
  },
  {
    'ordnr': 20,
    'code': '064',
    'name': 'Bhutánske kráľovstvo',
    'iso3166_1': 'BT',
    'iso3166_2': 'BTN',
    'local_name': {
      'sk': 'Bhutánske kráľovstvo',
      'en': 'Bhutan'
    },
    'region': 'Asia',
    'sub_region': 'Southern Asia',
    'score': 0
  },
  {
    'ordnr': 21,
    'code': '068',
    'name': 'Bolívijský mnohonárodný štát',
    'iso3166_1': 'BO',
    'iso3166_2': 'BOL',
    'local_name': {
      'sk': 'Bolívijský mnohonárodný štát',
      'en': 'Bolivia'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 22,
    'code': '070',
    'name': 'Bosna a Hercegovina',
    'iso3166_1': 'BA',
    'iso3166_2': 'BIH',
    'local_name': {
      'sk': 'Bosna a Hercegovina',
      'en': 'Bosnia and Herzegovina'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 2
  },
  {
    'ordnr': 23,
    'code': '072',
    'name': 'Botswanská republika',
    'iso3166_1': 'BW',
    'iso3166_2': 'BWA',
    'local_name': {
      'sk': 'Botswanská republika',
      'en': 'Botswana'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 24,
    'code': '074',
    'name': 'Bouvetov ostrov',
    'iso3166_1': 'BV',
    'iso3166_2': 'BVT',
    'local_name': {
      'sk': 'Bouvetov ostrov',
      'en': 'Bouvet Island'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 25,
    'code': '076',
    'name': 'Brazílska federatívna republika',
    'iso3166_1': 'BR',
    'iso3166_2': 'BRA',
    'local_name': {
      'sk': 'Brazílska federatívna republika',
      'en': 'Brazil'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 1
  },
  {
    'ordnr': 26,
    'code': '084',
    'name': 'Belize',
    'iso3166_1': 'BZ',
    'iso3166_2': 'BLZ',
    'local_name': {
      'sk': 'Belize',
      'en': 'Belize'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 27,
    'code': '086',
    'name': 'Britské indickooceánske územie',
    'iso3166_1': 'IO',
    'iso3166_2': 'IOT',
    'local_name': {
      'sk': 'Britské indickooceánske územie',
      'en': 'British Indian Ocean Territory'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 28,
    'code': '090',
    'name': 'Šalamúnove ostrovy',
    'iso3166_1': 'SB',
    'iso3166_2': 'SLB',
    'local_name': {
      'sk': 'Šalamúnove ostrovy',
      'en': 'Solomon Islands'
    },
    'region': 'Oceania',
    'sub_region': 'Melanesia',
    'score': 0
  },
  {
    'ordnr': 29,
    'code': '092',
    'name': 'Britské Panenské ostrovy',
    'iso3166_1': 'VG',
    'iso3166_2': 'VGB',
    'local_name': {
      'sk': 'Britské Panenské ostrovy',
      'en': 'British Virgin Islands'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 30,
    'code': '096',
    'name': 'Brunejsko-darussalamský štát',
    'iso3166_1': 'BN',
    'iso3166_2': 'BRN',
    'local_name': {
      'sk': 'Brunejsko-darussalamský štát',
      'en': 'Brunei'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 0
  },
  {
    'ordnr': 31,
    'code': '100',
    'name': 'Bulharská republika',
    'iso3166_1': 'BG',
    'iso3166_2': 'BGR',
    'local_name': {
      'sk': 'Bulharská republika',
      'en': 'Bulgaria'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 0
  },
  {
    'ordnr': 32,
    'code': '104',
    'name': 'Mjanmarská zväzová republika',
    'iso3166_1': 'MM',
    'iso3166_2': 'MMR',
    'local_name': {
      'sk': 'Mjanmarská zväzová republika',
      'en': 'Myanmar'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 2
  },
  {
    'ordnr': 33,
    'code': '108',
    'name': 'Burundská republika',
    'iso3166_1': 'BI',
    'iso3166_2': 'BDI',
    'local_name': {
      'sk': 'Burundská republika',
      'en': 'Burundi'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 34,
    'code': '112',
    'name': 'Bieloruská republika',
    'iso3166_1': 'BY',
    'iso3166_2': 'BLR',
    'local_name': {
      'sk': 'Bieloruská republika',
      'en': 'Belarus'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 1
  },
  {
    'ordnr': 35,
    'code': '116',
    'name': 'Kambodžské kráľovstvo',
    'iso3166_1': 'KH',
    'iso3166_2': 'KHM',
    'local_name': {
      'sk': 'Kambodžské kráľovstvo',
      'en': 'Cambodia'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 2
  },
  {
    'ordnr': 36,
    'code': '120',
    'name': 'Kamerunská republika',
    'iso3166_1': 'CM',
    'iso3166_2': 'CMR',
    'local_name': {
      'sk': 'Kamerunská republika',
      'en': 'Cameroon'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 37,
    'code': '124',
    'name': 'Kanada',
    'iso3166_1': 'CA',
    'iso3166_2': 'CAN',
    'local_name': {
      'sk': 'Kanada',
      'en': 'Canada'
    },
    'region': 'Americas',
    'sub_region': 'Northern America',
    'score': 0
  },
  {
    'ordnr': 38,
    'code': '132',
    'name': 'Kapverdská republika',
    'iso3166_1': 'CV',
    'iso3166_2': 'CPV',
    'local_name': {
      'sk': 'Kapverdská republika',
      'en': 'Cabo Verde'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 39,
    'code': '136',
    'name': 'Kajmanie ostrovy',
    'iso3166_1': 'KY',
    'iso3166_2': 'CYM',
    'local_name': {
      'sk': 'Kajmanie ostrovy',
      'en': 'Cayman Islands'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 40,
    'code': '140',
    'name': 'Stredoafrická republika',
    'iso3166_1': 'CF',
    'iso3166_2': 'CAF',
    'local_name': {
      'sk': 'Stredoafrická republika',
      'en': 'Central African Republic'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 41,
    'code': '144',
    'name': 'Srílanská demokratická socialistická republika',
    'iso3166_1': 'LK',
    'iso3166_2': 'LKA',
    'local_name': {
      'sk': 'Srílanská demokratická socialistická republika',
      'en': 'Sri Lanka'
    },
    'region': 'Asia',
    'sub_region': 'Southern Asia',
    'score': 2
  },
  {
    'ordnr': 42,
    'code': '148',
    'name': 'Čadská republika',
    'iso3166_1': 'TD',
    'iso3166_2': 'TCD',
    'local_name': {
      'sk': 'Čadská republika',
      'en': 'Chad'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 43,
    'code': '152',
    'name': 'Čilská republika',
    'iso3166_1': 'CL',
    'iso3166_2': 'CHL',
    'local_name': {
      'sk': 'Čilská republika',
      'en': 'Chile'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 44,
    'code': '156',
    'name': 'Čínska ľudová republika',
    'iso3166_1': 'CN',
    'iso3166_2': 'CHN',
    'local_name': {
      'sk': 'Čínska ľudová republika',
      'en': 'China'
    },
    'region': 'Asia',
    'sub_region': 'Eastern Asia',
    'score': 2
  },
  {
    'ordnr': 45,
    'code': '158',
    'name': 'Čínska republika',
    'iso3166_1': 'TW',
    'iso3166_2': 'TWN',
    'local_name': {
      'sk': 'Čínska republika',
      'en': 'Taiwan'
    },
    'region': 'Asia',
    'sub_region': 'Eastern Asia',
    'score': 0
  },
  {
    'ordnr': 46,
    'code': '162',
    'name': 'Teritórium Vianočného ostrova',
    'iso3166_1': 'CX',
    'iso3166_2': 'CXR',
    'local_name': {
      'sk': 'Teritórium Vianočného ostrova',
      'en': 'Christmas Island'
    },
    'region': 'Oceania',
    'sub_region': 'Australia and New Zealand',
    'score': 0
  },
  {
    'ordnr': 47,
    'code': '166',
    'name': 'Teritórium Kokosových ostrovov',
    'iso3166_1': 'CC',
    'iso3166_2': 'CCK',
    'local_name': {
      'sk': 'Teritórium Kokosových ostrovov',
      'en': 'Cocos (Keeling) Islands'
    },
    'region': 'Oceania',
    'sub_region': 'Australia and New Zealand',
    'score': 0
  },
  {
    'ordnr': 48,
    'code': '170',
    'name': 'Kolumbijská republika',
    'iso3166_1': 'CO',
    'iso3166_2': 'COL',
    'local_name': {
      'sk': 'Kolumbijská republika',
      'en': 'Colombia'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 49,
    'code': '174',
    'name': 'Komorský zväz',
    'iso3166_1': 'KM',
    'iso3166_2': 'COM',
    'local_name': {
      'sk': 'Komorský zväz',
      'en': 'Comoros'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 50,
    'code': '175',
    'name': 'Mayotte',
    'iso3166_1': 'YT',
    'iso3166_2': 'MYT',
    'local_name': {
      'sk': 'Mayotte',
      'en': 'Mayotte'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 51,
    'code': '178',
    'name': 'Konžská republika',
    'iso3166_1': 'CG',
    'iso3166_2': 'COG',
    'local_name': {
      'sk': 'Konžská republika',
      'en': 'Republic of the Congo'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 52,
    'code': '180',
    'name': 'Konžská demokratická republika',
    'iso3166_1': 'CD',
    'iso3166_2': 'COD',
    'local_name': {
      'sk': 'Konžská demokratická republika',
      'en': 'Democratic Republic of the Congo'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 53,
    'code': '184',
    'name': 'Cookove ostrovy',
    'iso3166_1': 'CK',
    'iso3166_2': 'COK',
    'local_name': {
      'sk': 'Cookove ostrovy',
      'en': 'Cook Islands'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 1
  },
  {
    'ordnr': 54,
    'code': '188',
    'name': 'Kostarická republika',
    'iso3166_1': 'CR',
    'iso3166_2': 'CRI',
    'local_name': {
      'sk': 'Kostarická republika',
      'en': 'Costa Rica'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 55,
    'code': '191',
    'name': 'Chorvátska republika',
    'iso3166_1': 'HR',
    'iso3166_2': 'HRV',
    'local_name': {
      'sk': 'Chorvátska republika',
      'en': 'Croatia'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 56,
    'code': '192',
    'name': 'Kubánska republika',
    'iso3166_1': 'CU',
    'iso3166_2': 'CUB',
    'local_name': {
      'sk': 'Kubánska republika',
      'en': 'Cuba'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 57,
    'code': '196',
    'name': 'Cyperská republika',
    'iso3166_1': 'CY',
    'iso3166_2': 'CYP',
    'local_name': {
      'sk': 'Cyperská republika',
      'en': 'Turkish Republic of Northern Cyprus'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 58,
    'code': '203',
    'name': 'Česká republika',
    'iso3166_1': 'CZ',
    'iso3166_2': 'CZE',
    'local_name': {
      'sk': 'Česká republika',
      'en': 'Czech Republic'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 0
  },
  {
    'ordnr': 59,
    'code': '204',
    'name': 'Beninská republika',
    'iso3166_1': 'BJ',
    'iso3166_2': 'BEN',
    'local_name': {
      'sk': 'Beninská republika',
      'en': 'Benin'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 60,
    'code': '208',
    'name': 'Dánske kráľovstvo',
    'iso3166_1': 'DK',
    'iso3166_2': 'DNK',
    'local_name': {
      'sk': 'Dánske kráľovstvo',
      'en': 'Denmark'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 61,
    'code': '212',
    'name': 'Dominické spoločenstvo',
    'iso3166_1': 'DM',
    'iso3166_2': 'DMA',
    'local_name': {
      'sk': 'Dominické spoločenstvo',
      'en': 'Dominica'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 62,
    'code': '214',
    'name': 'Dominikánska republika',
    'iso3166_1': 'DO',
    'iso3166_2': 'DOM',
    'local_name': {
      'sk': 'Dominikánska republika',
      'en': 'Dominican Republic'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 63,
    'code': '218',
    'name': 'Ekvádorská republika',
    'iso3166_1': 'EC',
    'iso3166_2': 'ECU',
    'local_name': {
      'sk': 'Ekvádorská republika',
      'en': 'Ecuador'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 64,
    'code': '222',
    'name': 'Salvádorská republika',
    'iso3166_1': 'SV',
    'iso3166_2': 'SLV',
    'local_name': {
      'sk': 'Salvádorská republika',
      'en': 'El Salvador'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 65,
    'code': '226',
    'name': 'Republika Rovníkovej Guiney',
    'iso3166_1': 'GQ',
    'iso3166_2': 'GNQ',
    'local_name': {
      'sk': 'Republika Rovníkovej Guiney',
      'en': 'Equatorial Guinea'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 66,
    'code': '231',
    'name': 'Etiópska federatívna demokratická republika',
    'iso3166_1': 'ET',
    'iso3166_2': 'ETH',
    'local_name': {
      'sk': 'Etiópska federatívna demokratická republika',
      'en': 'Ethiopia'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 67,
    'code': '232',
    'name': 'Eritrejský štát',
    'iso3166_1': 'ER',
    'iso3166_2': 'ERI',
    'local_name': {
      'sk': 'Eritrejský štát',
      'en': 'Eritrea'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 68,
    'code': '233',
    'name': 'Estónska republika',
    'iso3166_1': 'EE',
    'iso3166_2': 'EST',
    'local_name': {
      'sk': 'Estónska republika',
      'en': 'Estonia'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 69,
    'code': '234',
    'name': 'Faerské ostrovy',
    'iso3166_1': 'FO',
    'iso3166_2': 'FRO',
    'local_name': {
      'sk': 'Faerské ostrovy',
      'en': 'Faroe Islands'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 70,
    'code': '238',
    'name': 'Falklandské ostrovy',
    'iso3166_1': 'FK',
    'iso3166_2': 'FLK',
    'local_name': {
      'sk': 'Falklandské ostrovy',
      'en': 'Falkland Islands (Islas Malvinas)'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 71,
    'code': '239',
    'name': 'Južná Georgia a Južné Sandwichove ostrovy',
    'iso3166_1': 'GS',
    'iso3166_2': 'SGS',
    'local_name': {
      'sk': 'Južná Georgia a Južné Sandwichove ostrovy',
      'en': 'South Georgia and the South Sandwich Islands'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 72,
    'code': '242',
    'name': 'Fidžijská republika',
    'iso3166_1': 'FJ',
    'iso3166_2': 'FJI',
    'local_name': {
      'sk': 'Fidžijská republika',
      'en': 'Fiji'
    },
    'region': 'Oceania',
    'sub_region': 'Melanesia',
    'score': 1
  },
  {
    'ordnr': 73,
    'code': '246',
    'name': 'Fínska republika',
    'iso3166_1': 'FI',
    'iso3166_2': 'FIN',
    'local_name': {
      'sk': 'Fínska republika',
      'en': 'Finland'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 74,
    'code': '248',
    'name': 'Alandy',
    'iso3166_1': 'AX',
    'iso3166_2': 'ALA',
    'local_name': {
      'sk': 'Alandy',
      'en': 'Aland Islands'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 75,
    'code': '250',
    'name': 'Francúzska republika',
    'iso3166_1': 'FR',
    'iso3166_2': 'FRA',
    'local_name': {
      'sk': 'Francúzska republika',
      'en': 'France'
    },
    'region': 'Europe',
    'sub_region': 'Western Europe',
    'score': 0
  },
  {
    'ordnr': 76,
    'code': '254',
    'name': 'Francúzska Guyana',
    'iso3166_1': 'GF',
    'iso3166_2': 'GUF',
    'local_name': {
      'sk': 'Francúzska Guyana',
      'en': 'French Guiana'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 77,
    'code': '258',
    'name': 'Francúzska Polynézia',
    'iso3166_1': 'PF',
    'iso3166_2': 'PYF',
    'local_name': {
      'sk': 'Francúzska Polynézia',
      'en': 'French Polynesia'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 0
  },
  {
    'ordnr': 78,
    'code': '260',
    'name': 'Francúzske južné a antarktické územia',
    'iso3166_1': 'TF',
    'iso3166_2': 'ATF',
    'local_name': {
      'sk': 'Francúzske južné a antarktické územia',
      'en': 'French Southern and Antarctic Lands'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 79,
    'code': '262',
    'name': 'Džibutská republika',
    'iso3166_1': 'DJ',
    'iso3166_2': 'DJI',
    'local_name': {
      'sk': 'Džibutská republika',
      'en': 'Djibouti'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 80,
    'code': '266',
    'name': 'Gabonská republika',
    'iso3166_1': 'GA',
    'iso3166_2': 'GAB',
    'local_name': {
      'sk': 'Gabonská republika',
      'en': 'Gabon'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 81,
    'code': '268',
    'name': 'Gruzínsko',
    'iso3166_1': 'GE',
    'iso3166_2': 'GEO',
    'local_name': {
      'sk': 'Gruzínsko',
      'en': 'Georgia'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 0
  },
  {
    'ordnr': 82,
    'code': '270',
    'name': 'Gambijská republika',
    'iso3166_1': 'GM',
    'iso3166_2': 'GMB',
    'local_name': {
      'sk': 'Gambijská republika',
      'en': 'Gambia'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 83,
    'code': '275',
    'name': 'Palestínsky štát',
    'iso3166_1': 'PS',
    'iso3166_2': 'PSE',
    'local_name': {
      'sk': 'Palestínsky štát',
      'en': 'Palestinian Territories'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 84,
    'code': '276',
    'name': 'Nemecká spolková republika',
    'iso3166_1': 'DE',
    'iso3166_2': 'DEU',
    'local_name': {
      'sk': 'Nemecká spolková republika',
      'en': 'Germany'
    },
    'region': 'Europe',
    'sub_region': 'Western Europe',
    'score': 0
  },
  {
    'ordnr': 85,
    'code': '288',
    'name': 'Ghanská republika',
    'iso3166_1': 'GH',
    'iso3166_2': 'GHA',
    'local_name': {
      'sk': 'Ghanská republika',
      'en': 'Ghana'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 86,
    'code': '292',
    'name': 'Gibraltár',
    'iso3166_1': 'GI',
    'iso3166_2': 'GIB',
    'local_name': {
      'sk': 'Gibraltár',
      'en': 'Gibraltar'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 87,
    'code': '296',
    'name': 'Kiribatská republika',
    'iso3166_1': 'KI',
    'iso3166_2': 'KIR',
    'local_name': {
      'sk': 'Kiribatská republika',
      'en': 'Kiribati'
    },
    'region': 'Oceania',
    'sub_region': 'Micronesia',
    'score': 0
  },
  {
    'ordnr': 88,
    'code': '300',
    'name': 'Grécka republika',
    'iso3166_1': 'GR',
    'iso3166_2': 'GRC',
    'local_name': {
      'sk': 'Grécka republika',
      'en': 'Greece'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 89,
    'code': '304',
    'name': 'Grónsko',
    'iso3166_1': 'GL',
    'iso3166_2': 'GRL',
    'local_name': {
      'sk': 'Grónsko',
      'en': 'Greenland'
    },
    'region': 'Americas',
    'sub_region': 'Northern America',
    'score': 0
  },
  {
    'ordnr': 90,
    'code': '308',
    'name': 'Grenada',
    'iso3166_1': 'GD',
    'iso3166_2': 'GRD',
    'local_name': {
      'sk': 'Grenada',
      'en': 'Grenada'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 91,
    'code': '312',
    'name': 'Guadeloup',
    'iso3166_1': 'GP',
    'iso3166_2': 'GLP',
    'local_name': {
      'sk': 'Guadeloup',
      'en': 'Guadeloupe'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 92,
    'code': '316',
    'name': 'Guamské teritórium',
    'iso3166_1': 'GU',
    'iso3166_2': 'GUM',
    'local_name': {
      'sk': 'Guamské teritórium',
      'en': 'Guam'
    },
    'region': 'Oceania',
    'sub_region': 'Micronesia',
    'score': 1
  },
  {
    'ordnr': 93,
    'code': '320',
    'name': 'Guatemalská republika',
    'iso3166_1': 'GT',
    'iso3166_2': 'GTM',
    'local_name': {
      'sk': 'Guatemalská republika',
      'en': 'Guatemala'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 94,
    'code': '324',
    'name': 'Guinejská republika',
    'iso3166_1': 'GN',
    'iso3166_2': 'GIN',
    'local_name': {
      'sk': 'Guinejská republika',
      'en': 'Guinea'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 95,
    'code': '328',
    'name': 'Guyanská kooperatívna republika',
    'iso3166_1': 'GY',
    'iso3166_2': 'GUY',
    'local_name': {
      'sk': 'Guyanská kooperatívna republika',
      'en': 'Guyana'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 96,
    'code': '332',
    'name': 'Haitská republika',
    'iso3166_1': 'HT',
    'iso3166_2': 'HTI',
    'local_name': {
      'sk': 'Haitská republika',
      'en': 'Haiti'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 97,
    'code': '334',
    'name': 'Teritórium Heardovho ostrova a Macdonaldových ostrovov',
    'iso3166_1': 'HM',
    'iso3166_2': 'HMD',
    'local_name': {
      'sk': 'Teritórium Heardovho ostrova a Macdonaldových ostrovov',
      'en': 'Heard and McDonald Islands'
    },
    'region': 'Oceania',
    'sub_region': 'Australia and New Zealand',
    'score': 0
  },
  {
    'ordnr': 98,
    'code': '336',
    'name': 'Svätá Stolica (Vatikánsky mestský štát)',
    'iso3166_1': 'VA',
    'iso3166_2': 'VAT',
    'local_name': {
      'sk': 'Svätá Stolica (Vatikánsky mestský štát)',
      'en': 'Holy See (Vatican City)'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 99,
    'code': '340',
    'name': 'Honduraská republika',
    'iso3166_1': 'HN',
    'iso3166_2': 'HND',
    'local_name': {
      'sk': 'Honduraská republika',
      'en': 'Honduras'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 100,
    'code': '344',
    'name': 'Hongkong',
    'iso3166_1': 'HK',
    'iso3166_2': 'HKG',
    'local_name': {
      'sk': 'Hongkong',
      'en': 'Hong Kong'
    },
    'region': 'Asia',
    'sub_region': 'Eastern Asia',
    'score': 1
  },
  {
    'ordnr': 101,
    'code': '348',
    'name': 'Maďarsko',
    'iso3166_1': 'HU',
    'iso3166_2': 'HUN',
    'local_name': {
      'sk': 'Maďarsko',
      'en': 'Hungary'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 0
  },
  {
    'ordnr': 102,
    'code': '352',
    'name': 'Islandská republika',
    'iso3166_1': 'IS',
    'iso3166_2': 'ISL',
    'local_name': {
      'sk': 'Islandská republika',
      'en': 'Iceland'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 1
  },
  {
    'ordnr': 103,
    'code': '356',
    'name': 'Indická republika',
    'iso3166_1': 'IN',
    'iso3166_2': 'IND',
    'local_name': {
      'sk': 'Indická republika',
      'en': 'India'
    },
    'region': 'Asia',
    'sub_region': 'Southern Asia',
    'score': 2
  },
  {
    'ordnr': 104,
    'code': '360',
    'name': 'Indonézska republika',
    'iso3166_1': 'ID',
    'iso3166_2': 'IDN',
    'local_name': {
      'sk': 'Indonézska republika',
      'en': 'Indonesia'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 0
  },
  {
    'ordnr': 105,
    'code': '364',
    'name': 'Iránska islamská republika',
    'iso3166_1': 'IR',
    'iso3166_2': 'IRN',
    'local_name': {
      'sk': 'Iránska islamská republika',
      'en': 'Iran'
    },
    'region': 'Asia',
    'sub_region': 'Southern Asia',
    'score': 2
  },
  {
    'ordnr': 106,
    'code': '368',
    'name': 'Iracká republika',
    'iso3166_1': 'IQ',
    'iso3166_2': 'IRQ',
    'local_name': {
      'sk': 'Iracká republika',
      'en': 'Iraq'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 107,
    'code': '372',
    'name': 'Írsko',
    'iso3166_1': 'IE',
    'iso3166_2': 'IRL',
    'local_name': {
      'sk': 'Írsko',
      'en': 'Ireland'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 108,
    'code': '376',
    'name': 'Izraelský štát',
    'iso3166_1': 'IL',
    'iso3166_2': 'ISR',
    'local_name': {
      'sk': 'Izraelský štát',
      'en': 'Israel'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 0
  },
  {
    'ordnr': 109,
    'code': '380',
    'name': 'Talianska republika',
    'iso3166_1': 'IT',
    'iso3166_2': 'ITA',
    'local_name': {
      'sk': 'Talianska republika',
      'en': 'Italy'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 110,
    'code': '384',
    'name': 'Republika Pobrežia slonoviny',
    'iso3166_1': 'CI',
    'iso3166_2': 'CIV',
    'local_name': {
      'sk': 'Republika Pobrežia slonoviny',
      'en': 'Cote d\u0027Ivoire'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 111,
    'code': '388',
    'name': 'Jamajka',
    'iso3166_1': 'JM',
    'iso3166_2': 'JAM',
    'local_name': {
      'sk': 'Jamajka',
      'en': 'Jamaica'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 112,
    'code': '392',
    'name': 'Japonsko',
    'iso3166_1': 'JP',
    'iso3166_2': 'JPN',
    'local_name': {
      'sk': 'Japonsko',
      'en': 'Japan'
    },
    'region': 'Asia',
    'sub_region': 'Eastern Asia',
    'score': 0
  },
  {
    'ordnr': 113,
    'code': '398',
    'name': 'Kazašská republika',
    'iso3166_1': 'KZ',
    'iso3166_2': 'KAZ',
    'local_name': {
      'sk': 'Kazašská republika',
      'en': 'Kazakhstan'
    },
    'region': 'Asia',
    'sub_region': 'Central Asia',
    'score': 1
  },
  {
    'ordnr': 114,
    'code': '400',
    'name': 'Jordánske hášimovské kráľovstvo',
    'iso3166_1': 'JO',
    'iso3166_2': 'JOR',
    'local_name': {
      'sk': 'Jordánske hášimovské kráľovstvo',
      'en': 'Jordan'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 0
  },
  {
    'ordnr': 115,
    'code': '404',
    'name': 'Kenská republika',
    'iso3166_1': 'KE',
    'iso3166_2': 'KEN',
    'local_name': {
      'sk': 'Kenská republika',
      'en': 'Kenya'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 116,
    'code': '408',
    'name': 'Kórejská ľudovodemokratická republika',
    'iso3166_1': 'KP',
    'iso3166_2': 'PRK',
    'local_name': {
      'sk': 'Kórejská ľudovodemokratická republika',
      'en': 'Democratic People\u0027s Republic of Korea (i.e., North Korea)'
    },
    'region': 'Asia',
    'sub_region': 'Eastern Asia',
    'score': 2
  },
  {
    'ordnr': 117,
    'code': '410',
    'name': 'Kórejská republika',
    'iso3166_1': 'KR',
    'iso3166_2': 'KOR',
    'local_name': {
      'sk': 'Kórejská republika',
      'en': 'South Korea'
    },
    'region': 'Asia',
    'sub_region': 'Eastern Asia',
    'score': 0
  },
  {
    'ordnr': 118,
    'code': '414',
    'name': 'Kuvajtský štát',
    'iso3166_1': 'KW',
    'iso3166_2': 'KWT',
    'local_name': {
      'sk': 'Kuvajtský štát',
      'en': 'Kuwait'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 0
  },
  {
    'ordnr': 119,
    'code': '417',
    'name': 'Kirgizská republika',
    'iso3166_1': 'KG',
    'iso3166_2': 'KGZ',
    'local_name': {
      'sk': 'Kirgizská republika',
      'en': 'Kyrgyzstan'
    },
    'region': 'Asia',
    'sub_region': 'Central Asia',
    'score': 2
  },
  {
    'ordnr': 120,
    'code': '418',
    'name': 'Laoská ľudovodemokratická republika',
    'iso3166_1': 'LA',
    'iso3166_2': 'LAO',
    'local_name': {
      'sk': 'Laoská ľudovodemokratická republika',
      'en': 'Laos'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 2
  },
  {
    'ordnr': 121,
    'code': '422',
    'name': 'Libanonská republika',
    'iso3166_1': 'LB',
    'iso3166_2': 'LBN',
    'local_name': {
      'sk': 'Libanonská republika',
      'en': 'Lebanon'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 122,
    'code': '426',
    'name': 'Lesothské kráľovstvo',
    'iso3166_1': 'LS',
    'iso3166_2': 'LSO',
    'local_name': {
      'sk': 'Lesothské kráľovstvo',
      'en': 'Lesotho'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 123,
    'code': '428',
    'name': 'Lotyšská republika',
    'iso3166_1': 'LV',
    'iso3166_2': 'LVA',
    'local_name': {
      'sk': 'Lotyšská republika',
      'en': 'Latvia'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 2
  },
  {
    'ordnr': 124,
    'code': '430',
    'name': 'Libérijská republika',
    'iso3166_1': 'LR',
    'iso3166_2': 'LBR',
    'local_name': {
      'sk': 'Libérijská republika',
      'en': 'Liberia'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 125,
    'code': '434',
    'name': 'Líbya',
    'iso3166_1': 'LY',
    'iso3166_2': 'LBY',
    'local_name': {
      'sk': 'Líbya',
      'en': 'Libya'
    },
    'region': 'Africa',
    'sub_region': 'Northern Africa',
    'score': 2
  },
  {
    'ordnr': 126,
    'code': '438',
    'name': 'Lichtenštajnské kniežatstvo',
    'iso3166_1': 'LI',
    'iso3166_2': 'LIE',
    'local_name': {
      'sk': 'Lichtenštajnské kniežatstvo',
      'en': 'Liechtenstein'
    },
    'region': 'Europe',
    'sub_region': 'Western Europe',
    'score': 1
  },
  {
    'ordnr': 127,
    'code': '440',
    'name': 'Litovská republika',
    'iso3166_1': 'LT',
    'iso3166_2': 'LTU',
    'local_name': {
      'sk': 'Litovská republika',
      'en': 'Lithuania'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 128,
    'code': '442',
    'name': 'Luxemburské veľkovojvodstvo',
    'iso3166_1': 'LU',
    'iso3166_2': 'LUX',
    'local_name': {
      'sk': 'Luxemburské veľkovojvodstvo',
      'en': 'Luxembourg'
    },
    'region': 'Europe',
    'sub_region': 'Western Europe',
    'score': 0
  },
  {
    'ordnr': 129,
    'code': '446',
    'name': 'Macao',
    'iso3166_1': 'MO',
    'iso3166_2': 'MAC',
    'local_name': {
      'sk': 'Macao',
      'en': 'Macao'
    },
    'region': 'Asia',
    'sub_region': 'Eastern Asia',
    'score': 2
  },
  {
    'ordnr': 130,
    'code': '450',
    'name': 'Madagaskarská republika',
    'iso3166_1': 'MG',
    'iso3166_2': 'MDG',
    'local_name': {
      'sk': 'Madagaskarská republika',
      'en': 'Madagascar'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 131,
    'code': '454',
    'name': 'Malawijská republika',
    'iso3166_1': 'MW',
    'iso3166_2': 'MWI',
    'local_name': {
      'sk': 'Malawijská republika',
      'en': 'Malawi'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 132,
    'code': '458',
    'name': 'Malajzia',
    'iso3166_1': 'MY',
    'iso3166_2': 'MYS',
    'local_name': {
      'sk': 'Malajzia',
      'en': 'Malaysia'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 1
  },
  {
    'ordnr': 133,
    'code': '462',
    'name': 'Maldivská republika',
    'iso3166_1': 'MV',
    'iso3166_2': 'MDV',
    'local_name': {
      'sk': 'Maldivská republika',
      'en': 'Maldives'
    },
    'region': 'Asia',
    'sub_region': 'Southern Asia',
    'score': 2
  },
  {
    'ordnr': 134,
    'code': '466',
    'name': 'Malijská republika',
    'iso3166_1': 'ML',
    'iso3166_2': 'MLI',
    'local_name': {
      'sk': 'Malijská republika',
      'en': 'Mali'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 135,
    'code': '470',
    'name': 'Maltská republika',
    'iso3166_1': 'MT',
    'iso3166_2': 'MLT',
    'local_name': {
      'sk': 'Maltská republika',
      'en': 'Malta'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 1
  },
  {
    'ordnr': 136,
    'code': '474',
    'name': 'Martinik',
    'iso3166_1': 'MQ',
    'iso3166_2': 'MTQ',
    'local_name': {
      'sk': 'Martinik',
      'en': 'Martinique'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 137,
    'code': '478',
    'name': 'Mauritánska islamská republika',
    'iso3166_1': 'MR',
    'iso3166_2': 'MRT',
    'local_name': {
      'sk': 'Mauritánska islamská republika',
      'en': 'Mauritania'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 138,
    'code': '480',
    'name': 'Maurícijská republika',
    'iso3166_1': 'MU',
    'iso3166_2': 'MUS',
    'local_name': {
      'sk': 'Maurícijská republika',
      'en': 'Mauritius'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 139,
    'code': '484',
    'name': 'Spojené štáty mexické',
    'iso3166_1': 'MX',
    'iso3166_2': 'MEX',
    'local_name': {
      'sk': 'Spojené štáty mexické',
      'en': 'Mexico'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 140,
    'code': '492',
    'name': 'Monacké kniežatstvo',
    'iso3166_1': 'MC',
    'iso3166_2': 'MCO',
    'local_name': {
      'sk': 'Monacké kniežatstvo',
      'en': 'Monaco'
    },
    'region': 'Europe',
    'sub_region': 'Western Europe',
    'score': 2
  },
  {
    'ordnr': 141,
    'code': '496',
    'name': 'Mongolsko',
    'iso3166_1': 'MN',
    'iso3166_2': 'MNG',
    'local_name': {
      'sk': 'Mongolsko',
      'en': 'Mongolia'
    },
    'region': 'Asia',
    'sub_region': 'Eastern Asia',
    'score': 2
  },
  {
    'ordnr': 142,
    'code': '498',
    'name': 'Moldavská republika',
    'iso3166_1': 'MD',
    'iso3166_2': 'MDA',
    'local_name': {
      'sk': 'Moldavská republika',
      'en': 'Moldova'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 2
  },
  {
    'ordnr': 143,
    'code': '499',
    'name': 'Čierna Hora',
    'iso3166_1': 'ME',
    'iso3166_2': 'MNE',
    'local_name': {
      'sk': 'Čierna Hora',
      'en': 'Montenegro'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 1
  },
  {
    'ordnr': 144,
    'code': '500',
    'name': 'Montserrat',
    'iso3166_1': 'MS',
    'iso3166_2': 'MSR',
    'local_name': {
      'sk': 'Montserrat',
      'en': 'Montserrat'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 1
  },
  {
    'ordnr': 145,
    'code': '504',
    'name': 'Marocké kráľovstvo',
    'iso3166_1': 'MA',
    'iso3166_2': 'MAR',
    'local_name': {
      'sk': 'Marocké kráľovstvo',
      'en': 'Morocco'
    },
    'region': 'Africa',
    'sub_region': 'Northern Africa',
    'score': 1
  },
  {
    'ordnr': 146,
    'code': '508',
    'name': 'Mozambická republika',
    'iso3166_1': 'MZ',
    'iso3166_2': 'MOZ',
    'local_name': {
      'sk': 'Mozambická republika',
      'en': 'Mozambique'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 147,
    'code': '512',
    'name': 'Ománsky sultanát',
    'iso3166_1': 'OM',
    'iso3166_2': 'OMN',
    'local_name': {
      'sk': 'Ománsky sultanát',
      'en': 'Oman'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 1
  },
  {
    'ordnr': 148,
    'code': '516',
    'name': 'Namíbijská republika',
    'iso3166_1': 'NA',
    'iso3166_2': 'NAM',
    'local_name': {
      'sk': 'Namíbijská republika',
      'en': 'Namibia'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 149,
    'code': '520',
    'name': 'Nauruská republika',
    'iso3166_1': 'NR',
    'iso3166_2': 'NRU',
    'local_name': {
      'sk': 'Nauruská republika',
      'en': 'Nauru'
    },
    'region': 'Oceania',
    'sub_region': 'Micronesia',
    'score': 1
  },
  {
    'ordnr': 150,
    'code': '524',
    'name': 'Nepálská federatívna demokratická republika',
    'iso3166_1': 'NP',
    'iso3166_2': 'NPL',
    'local_name': {
      'sk': 'Nepálská federatívna demokratická republika',
      'en': 'Nepal'
    },
    'region': 'Asia',
    'sub_region': 'Southern Asia',
    'score': 1
  },
  {
    'ordnr': 151,
    'code': '528',
    'name': 'Holandské kráľovstvo',
    'iso3166_1': 'NL',
    'iso3166_2': 'NLD',
    'local_name': {
      'sk': 'Holandské kráľovstvo',
      'en': 'Netherlands'
    },
    'region': 'Europe',
    'sub_region': 'Western Europe',
    'score': 0
  },
  {
    'ordnr': 152,
    'code': '531',
    'name': 'Curaçao',
    'iso3166_1': 'CW',
    'iso3166_2': 'CUW',
    'local_name': {
      'sk': 'Curaçao',
      'en': 'Curacao'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 153,
    'code': '533',
    'name': 'Aruba',
    'iso3166_1': 'AW',
    'iso3166_2': 'ABW',
    'local_name': {
      'sk': 'Aruba',
      'en': 'Aruba'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 154,
    'code': '534',
    'name': 'Svätý Martin (holandská časť)',
    'iso3166_1': 'SX',
    'iso3166_2': 'SXM',
    'local_name': {
      'sk': 'Svätý Martin (holandská časť)',
      'en': 'Sint Maarten'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 1
  },
  {
    'ordnr': 155,
    'code': '535',
    'name': 'Bonaire, Svätý Eustach a Saba',
    'iso3166_1': 'BQ',
    'iso3166_2': 'BES',
    'local_name': {
      'sk': 'Bonaire, Svätý Eustach a Saba',
      'en': 'Bonaire'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 156,
    'code': '540',
    'name': 'Nová Kaledónia',
    'iso3166_1': 'NC',
    'iso3166_2': 'NCL',
    'local_name': {
      'sk': 'Nová Kaledónia',
      'en': 'New Caledonia'
    },
    'region': 'Oceania',
    'sub_region': 'Melanesia',
    'score': 0
  },
  {
    'ordnr': 157,
    'code': '548',
    'name': 'Vanuatská republika',
    'iso3166_1': 'VU',
    'iso3166_2': 'VUT',
    'local_name': {
      'sk': 'Vanuatská republika',
      'en': 'Vanuatu'
    },
    'region': 'Oceania',
    'sub_region': 'Melanesia',
    'score': 2
  },
  {
    'ordnr': 158,
    'code': '554',
    'name': 'Nový Zéland',
    'iso3166_1': 'NZ',
    'iso3166_2': 'NZL',
    'local_name': {
      'sk': 'Nový Zéland',
      'en': 'New Zealand'
    },
    'region': 'Oceania',
    'sub_region': 'Australia and New Zealand',
    'score': 0
  },
  {
    'ordnr': 159,
    'code': '558',
    'name': 'Nikaragujská republika',
    'iso3166_1': 'NI',
    'iso3166_2': 'NIC',
    'local_name': {
      'sk': 'Nikaragujská republika',
      'en': 'Nicaragua'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 160,
    'code': '562',
    'name': 'Nigerská republika',
    'iso3166_1': 'NE',
    'iso3166_2': 'NER',
    'local_name': {
      'sk': 'Nigerská republika',
      'en': 'Niger'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 161,
    'code': '566',
    'name': 'Nigérijská federatívna republika',
    'iso3166_1': 'NG',
    'iso3166_2': 'NGA',
    'local_name': {
      'sk': 'Nigérijská federatívna republika',
      'en': 'Nigeria'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 162,
    'code': '570',
    'name': 'Niue',
    'iso3166_1': 'NU',
    'iso3166_2': 'NIU',
    'local_name': {
      'sk': 'Niue',
      'en': 'Niue'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 1
  },
  {
    'ordnr': 163,
    'code': '574',
    'name': 'Teritórium ostrova Norfolk',
    'iso3166_1': 'NF',
    'iso3166_2': 'NFK',
    'local_name': {
      'sk': 'Teritórium ostrova Norfolk',
      'en': 'Norfolk Island'
    },
    'region': 'Oceania',
    'sub_region': 'Australia and New Zealand',
    'score': 0
  },
  {
    'ordnr': 164,
    'code': '578',
    'name': 'Nórske kráľovstvo',
    'iso3166_1': 'NO',
    'iso3166_2': 'NOR',
    'local_name': {
      'sk': 'Nórske kráľovstvo',
      'en': 'Norway'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 165,
    'code': '580',
    'name': 'Spoločenstvo ostrovov Severné Mariány',
    'iso3166_1': 'MP',
    'iso3166_2': 'MNP',
    'local_name': {
      'sk': 'Spoločenstvo ostrovov Severné Mariány',
      'en': 'Northern Mariana Islands'
    },
    'region': 'Oceania',
    'sub_region': 'Micronesia',
    'score': 0
  },
  {
    'ordnr': 166,
    'code': '581',
    'name': 'Menšie odľahlé ostrovy Spojených štátov',
    'iso3166_1': 'UM',
    'iso3166_2': 'UMI',
    'local_name': {
      'sk': 'Menšie odľahlé ostrovy Spojených štátov',
      'en': 'United States Minor Outlying Islands'
    },
    'region': 'Oceania',
    'sub_region': 'Micronesia',
    'score': 0
  },
  {
    'ordnr': 167,
    'code': '583',
    'name': 'Mikronézske federatívne štáty',
    'iso3166_1': 'FM',
    'iso3166_2': 'FSM',
    'local_name': {
      'sk': 'Mikronézske federatívne štáty',
      'en': 'Micronesia'
    },
    'region': 'Oceania',
    'sub_region': 'Micronesia',
    'score': 0
  },
  {
    'ordnr': 168,
    'code': '584',
    'name': 'Republika Marshallových ostrovov',
    'iso3166_1': 'MH',
    'iso3166_2': 'MHL',
    'local_name': {
      'sk': 'Republika Marshallových ostrovov',
      'en': 'Marshall Islands'
    },
    'region': 'Oceania',
    'sub_region': 'Micronesia',
    'score': 1
  },
  {
    'ordnr': 169,
    'code': '585',
    'name': 'Palauská republika',
    'iso3166_1': 'PW',
    'iso3166_2': 'PLW',
    'local_name': {
      'sk': 'Palauská republika',
      'en': 'Palau'
    },
    'region': 'Oceania',
    'sub_region': 'Micronesia',
    'score': 0
  },
  {
    'ordnr': 170,
    'code': '586',
    'name': 'Pakistanská islamská republika',
    'iso3166_1': 'PK',
    'iso3166_2': 'PAK',
    'local_name': {
      'sk': 'Pakistanská islamská republika',
      'en': 'Pakistan'
    },
    'region': 'Asia',
    'sub_region': 'Southern Asia',
    'score': 2
  },
  {
    'ordnr': 171,
    'code': '591',
    'name': 'Panamská republika',
    'iso3166_1': 'PA',
    'iso3166_2': 'PAN',
    'local_name': {
      'sk': 'Panamská republika',
      'en': 'Panama'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 172,
    'code': '598',
    'name': 'Nezávislý štát Papua-Nová Guinea',
    'iso3166_1': 'PG',
    'iso3166_2': 'PNG',
    'local_name': {
      'sk': 'Nezávislý štát Papua-Nová Guinea',
      'en': 'Papua New Guinea'
    },
    'region': 'Oceania',
    'sub_region': 'Melanesia',
    'score': 1
  },
  {
    'ordnr': 173,
    'code': '600',
    'name': 'Paraguajská republika',
    'iso3166_1': 'PY',
    'iso3166_2': 'PRY',
    'local_name': {
      'sk': 'Paraguajská republika',
      'en': 'Paraguay'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 1
  },
  {
    'ordnr': 174,
    'code': '604',
    'name': 'Peruánska republika',
    'iso3166_1': 'PE',
    'iso3166_2': 'PER',
    'local_name': {
      'sk': 'Peruánska republika',
      'en': 'Peru'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 175,
    'code': '608',
    'name': 'Filipínska republika',
    'iso3166_1': 'PH',
    'iso3166_2': 'PHL',
    'local_name': {
      'sk': 'Filipínska republika',
      'en': 'Philippines'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 0
  },
  {
    'ordnr': 176,
    'code': '612',
    'name': 'Pitcairnove ostrovy',
    'iso3166_1': 'PN',
    'iso3166_2': 'PCN',
    'local_name': {
      'sk': 'Pitcairnove ostrovy',
      'en': 'Pitcairn Islands'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 0
  },
  {
    'ordnr': 177,
    'code': '616',
    'name': 'Poľská republika',
    'iso3166_1': 'PL',
    'iso3166_2': 'POL',
    'local_name': {
      'sk': 'Poľská republika',
      'en': 'Poland'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 0
  },
  {
    'ordnr': 178,
    'code': '620',
    'name': 'Portugalská republika',
    'iso3166_1': 'PT',
    'iso3166_2': 'PRT',
    'local_name': {
      'sk': 'Portugalská republika',
      'en': 'Portugal'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 179,
    'code': '624',
    'name': 'Guinejsko-bissauská republika',
    'iso3166_1': 'GW',
    'iso3166_2': 'GNB',
    'local_name': {
      'sk': 'Guinejsko-bissauská republika',
      'en': 'Guinea Bissau'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 180,
    'code': '626',
    'name': 'Východotimorská demokratická republika',
    'iso3166_1': 'TL',
    'iso3166_2': 'TLS',
    'local_name': {
      'sk': 'Východotimorská demokratická republika',
      'en': 'Timor-Leste'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 1
  },
  {
    'ordnr': 181,
    'code': '630',
    'name': 'Portorické spoločenstvo',
    'iso3166_1': 'PR',
    'iso3166_2': 'PRI',
    'local_name': {
      'sk': 'Portorické spoločenstvo',
      'en': 'Puerto Rico'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 182,
    'code': '634',
    'name': 'Katarský štát',
    'iso3166_1': 'QA',
    'iso3166_2': 'QAT',
    'local_name': {
      'sk': 'Katarský štát',
      'en': 'Qatar'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 1
  },
  {
    'ordnr': 183,
    'code': '638',
    'name': 'Réunion',
    'iso3166_1': 'RE',
    'iso3166_2': 'REU',
    'local_name': {
      'sk': 'Réunion',
      'en': 'Réunion'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 184,
    'code': '642',
    'name': 'Rumunsko',
    'iso3166_1': 'RO',
    'iso3166_2': 'ROU',
    'local_name': {
      'sk': 'Rumunsko',
      'en': 'Romania'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 0
  },
  {
    'ordnr': 185,
    'code': '643',
    'name': 'Ruská federácia',
    'iso3166_1': 'RU',
    'iso3166_2': 'RUS',
    'local_name': {
      'sk': 'Ruská federácia',
      'en': 'Russia'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 2
  },
  {
    'ordnr': 186,
    'code': '646',
    'name': 'Rwandská republika',
    'iso3166_1': 'RW',
    'iso3166_2': 'RWA',
    'local_name': {
      'sk': 'Rwandská republika',
      'en': 'Rwanda'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 187,
    'code': '652',
    'name': 'Svätý Bartolomej',
    'iso3166_1': 'BL',
    'iso3166_2': 'BLM',
    'local_name': {
      'sk': 'Svätý Bartolomej',
      'en': 'Saint Barthelemy'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 188,
    'code': '654',
    'name': 'Svätá Helena, Ascension a Tristan da Cunha',
    'iso3166_1': 'SH',
    'iso3166_2': 'SHN',
    'local_name': {
      'sk': 'Svätá Helena, Ascension a Tristan da Cunha',
      'en': 'Saint Helena'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 189,
    'code': '659',
    'name': 'Federácia Svätého Krištofa a Nevisu',
    'iso3166_1': 'KN',
    'iso3166_2': 'KNA',
    'local_name': {
      'sk': 'Federácia Svätého Krištofa a Nevisu',
      'en': 'Saint Kitts and Nevis'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 190,
    'code': '660',
    'name': 'Anguilla',
    'iso3166_1': 'AI',
    'iso3166_2': 'AIA',
    'local_name': {
      'sk': 'Anguilla',
      'en': 'Anguilla'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 191,
    'code': '662',
    'name': 'Svätá Lucia',
    'iso3166_1': 'LC',
    'iso3166_2': 'LCA',
    'local_name': {
      'sk': 'Svätá Lucia',
      'en': 'Saint Lucia'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 1
  },
  {
    'ordnr': 192,
    'code': '663',
    'name': 'Svätý Martin',
    'iso3166_1': 'MF',
    'iso3166_2': 'MAF',
    'local_name': {
      'sk': 'Svätý Martin',
      'en': 'Saint Martin'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 193,
    'code': '666',
    'name': 'Saint Pierre a Miquelon',
    'iso3166_1': 'PM',
    'iso3166_2': 'SPM',
    'local_name': {
      'sk': 'Saint Pierre a Miquelon',
      'en': 'Saint Pierre and Miquelon'
    },
    'region': 'Americas',
    'sub_region': 'Northern America',
    'score': 0
  },
  {
    'ordnr': 194,
    'code': '670',
    'name': 'Svätý Vincent a Grenadíny',
    'iso3166_1': 'VC',
    'iso3166_2': 'VCT',
    'local_name': {
      'sk': 'Svätý Vincent a Grenadíny',
      'en': 'Saint Vincent and the Grenadines'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 195,
    'code': '674',
    'name': 'Sanmarínska republika',
    'iso3166_1': 'SM',
    'iso3166_2': 'SMR',
    'local_name': {
      'sk': 'Sanmarínska republika',
      'en': 'San Marino'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 196,
    'code': '678',
    'name': 'Demokratická republika Svätého Tomáša a Princovho ostrova',
    'iso3166_1': 'ST',
    'iso3166_2': 'STP',
    'local_name': {
      'sk': 'Demokratická republika Svätého Tomáša a Princovho ostrova',
      'en': 'Sao Tome and Principe'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 197,
    'code': '682',
    'name': 'Saudskoarabské kráľovstvo',
    'iso3166_1': 'SA',
    'iso3166_2': 'SAU',
    'local_name': {
      'sk': 'Saudskoarabské kráľovstvo',
      'en': 'Saudi Arabia'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 198,
    'code': '686',
    'name': 'Senegalská republika',
    'iso3166_1': 'SN',
    'iso3166_2': 'SEN',
    'local_name': {
      'sk': 'Senegalská republika',
      'en': 'Senegal'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 199,
    'code': '688',
    'name': 'Srbská republika',
    'iso3166_1': 'RS',
    'iso3166_2': 'SRB',
    'local_name': {
      'sk': 'Srbská republika',
      'en': 'Serbia'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 1
  },
  {
    'ordnr': 200,
    'code': '690',
    'name': 'Seychelská republika',
    'iso3166_1': 'SC',
    'iso3166_2': 'SYC',
    'local_name': {
      'sk': 'Seychelská republika',
      'en': 'Seychelles'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 201,
    'code': '694',
    'name': 'Sierraleonská republika',
    'iso3166_1': 'SL',
    'iso3166_2': 'SLE',
    'local_name': {
      'sk': 'Sierraleonská republika',
      'en': 'Sierra Leone'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 202,
    'code': '702',
    'name': 'Singapurská republika',
    'iso3166_1': 'SG',
    'iso3166_2': 'SGP',
    'local_name': {
      'sk': 'Singapurská republika',
      'en': 'Singapore'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 0
  },
  {
    'ordnr': 203,
    'code': '703',
    'name': 'Slovenská republika',
    'iso3166_1': 'SK',
    'iso3166_2': 'SVK',
    'local_name': {
      'sk': 'Slovenská republika',
      'en': 'Slovakia'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 0
  },
  {
    'ordnr': 204,
    'code': '704',
    'name': 'Vietnamská socialistická republika',
    'iso3166_1': 'VN',
    'iso3166_2': 'VNM',
    'local_name': {
      'sk': 'Vietnamská socialistická republika',
      'en': 'Vietnam'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 2
  },
  {
    'ordnr': 205,
    'code': '705',
    'name': 'Slovinská republika',
    'iso3166_1': 'SI',
    'iso3166_2': 'SVN',
    'local_name': {
      'sk': 'Slovinská republika',
      'en': 'Slovenia'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 206,
    'code': '706',
    'name': 'Somálska federatívna republika',
    'iso3166_1': 'SO',
    'iso3166_2': 'SOM',
    'local_name': {
      'sk': 'Somálska federatívna republika',
      'en': 'Somalia'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 207,
    'code': '710',
    'name': 'Juhoafrická republika',
    'iso3166_1': 'ZA',
    'iso3166_2': 'ZAF',
    'local_name': {
      'sk': 'Juhoafrická republika',
      'en': 'South Africa'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 208,
    'code': '716',
    'name': 'Zimbabwianska republika',
    'iso3166_1': 'ZW',
    'iso3166_2': 'ZWE',
    'local_name': {
      'sk': 'Zimbabwianska republika',
      'en': 'Zimbabwe'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 209,
    'code': '724',
    'name': 'Španielske kráľovstvo',
    'iso3166_1': 'ES',
    'iso3166_2': 'ESP',
    'local_name': {
      'sk': 'Španielske kráľovstvo',
      'en': 'Spain'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 210,
    'code': '728',
    'name': 'Juhosudánska republika',
    'iso3166_1': 'SS',
    'iso3166_2': 'SSD',
    'local_name': {
      'sk': 'Juhosudánska republika',
      'en': 'South Sudan'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 211,
    'code': '729',
    'name': 'Sudánska republika',
    'iso3166_1': 'SD',
    'iso3166_2': 'SDN',
    'local_name': {
      'sk': 'Sudánska republika',
      'en': 'Sudan'
    },
    'region': 'Africa',
    'sub_region': 'Northern Africa',
    'score': 2
  },
  {
    'ordnr': 212,
    'code': '732',
    'name': 'Západná Sahara',
    'iso3166_1': 'EH',
    'iso3166_2': 'ESH',
    'local_name': {
      'sk': 'Západná Sahara',
      'en': 'Western Sahara'
    },
    'region': 'Africa',
    'sub_region': 'Northern Africa',
    'score': 0
  },
  {
    'ordnr': 213,
    'code': '740',
    'name': 'Surinamská republika',
    'iso3166_1': 'SR',
    'iso3166_2': 'SUR',
    'local_name': {
      'sk': 'Surinamská republika',
      'en': 'Suriname'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 1
  },
  {
    'ordnr': 214,
    'code': '744',
    'name': 'Svalbard a Jan Mayen',
    'iso3166_1': 'SJ',
    'iso3166_2': 'SJM',
    'local_name': {
      'sk': 'Svalbard a Jan Mayen',
      'en': 'Jan Mayen'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 215,
    'code': '748',
    'name': 'Eswatinské kráľovstvo',
    'iso3166_1': 'SZ',
    'iso3166_2': 'SWZ',
    'local_name': {
      'sk': 'Eswatinské kráľovstvo',
      'en': 'Eswatini'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 216,
    'code': '752',
    'name': 'Švédske kráľovstvo',
    'iso3166_1': 'SE',
    'iso3166_2': 'SWE',
    'local_name': {
      'sk': 'Švédske kráľovstvo',
      'en': 'Sweden'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 217,
    'code': '756',
    'name': 'Švajčiarska konfederácia',
    'iso3166_1': 'CH',
    'iso3166_2': 'CHE',
    'local_name': {
      'sk': 'Švajčiarska konfederácia',
      'en': 'Switzerland'
    },
    'region': 'Europe',
    'sub_region': 'Western Europe',
    'score': 1
  },
  {
    'ordnr': 218,
    'code': '760',
    'name': 'Sýrska arabská republika',
    'iso3166_1': 'SY',
    'iso3166_2': 'SYR',
    'local_name': {
      'sk': 'Sýrska arabská republika',
      'en': 'Syria'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 219,
    'code': '762',
    'name': 'Tadžická republika',
    'iso3166_1': 'TJ',
    'iso3166_2': 'TJK',
    'local_name': {
      'sk': 'Tadžická republika',
      'en': 'Tajikistan'
    },
    'region': 'Asia',
    'sub_region': 'Central Asia',
    'score': 1
  },
  {
    'ordnr': 220,
    'code': '764',
    'name': 'Thajské kráľovstvo',
    'iso3166_1': 'TH',
    'iso3166_2': 'THA',
    'local_name': {
      'sk': 'Thajské kráľovstvo',
      'en': 'Thailand'
    },
    'region': 'Asia',
    'sub_region': 'South-eastern Asia',
    'score': 1
  },
  {
    'ordnr': 221,
    'code': '768',
    'name': 'Togská republika',
    'iso3166_1': 'TG',
    'iso3166_2': 'TGO',
    'local_name': {
      'sk': 'Togská republika',
      'en': 'Togo'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 1
  },
  {
    'ordnr': 222,
    'code': '772',
    'name': 'Tokelauské ostrovy',
    'iso3166_1': 'TK',
    'iso3166_2': 'TKL',
    'local_name': {
      'sk': 'Tokelauské ostrovy',
      'en': 'Tokelau'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 0
  },
  {
    'ordnr': 223,
    'code': '776',
    'name': 'Tongské kráľovstvo',
    'iso3166_1': 'TO',
    'iso3166_2': 'TON',
    'local_name': {
      'sk': 'Tongské kráľovstvo',
      'en': 'Tonga'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 1
  },
  {
    'ordnr': 224,
    'code': '780',
    'name': 'Republika Trinidadu a Tobaga',
    'iso3166_1': 'TT',
    'iso3166_2': 'TTO',
    'local_name': {
      'sk': 'Republika Trinidadu a Tobaga',
      'en': 'Trinidad and Tobago'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 225,
    'code': '784',
    'name': 'Spojené arabské emiráty',
    'iso3166_1': 'AE',
    'iso3166_2': 'ARE',
    'local_name': {
      'sk': 'Spojené arabské emiráty',
      'en': 'United Arab Emirates'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 226,
    'code': '788',
    'name': 'Tuniská republika',
    'iso3166_1': 'TN',
    'iso3166_2': 'TUN',
    'local_name': {
      'sk': 'Tuniská republika',
      'en': 'Tunisia'
    },
    'region': 'Africa',
    'sub_region': 'Northern Africa',
    'score': 2
  },
  {
    'ordnr': 227,
    'code': '792',
    'name': 'Turecká republika',
    'iso3166_1': 'TR',
    'iso3166_2': 'TUR',
    'local_name': {
      'sk': 'Turecká republika',
      'en': 'Turkey'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 228,
    'code': '795',
    'name': 'Turkménsko',
    'iso3166_1': 'TM',
    'iso3166_2': 'TKM',
    'local_name': {
      'sk': 'Turkménsko',
      'en': 'Turkmenistan'
    },
    'region': 'Asia',
    'sub_region': 'Central Asia',
    'score': 1
  },
  {
    'ordnr': 229,
    'code': '796',
    'name': 'Ostrovy Turks a Caicos',
    'iso3166_1': 'TC',
    'iso3166_2': 'TCA',
    'local_name': {
      'sk': 'Ostrovy Turks a Caicos',
      'en': 'Turks and Caicos Islands'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 230,
    'code': '798',
    'name': 'Tuvalu',
    'iso3166_1': 'TV',
    'iso3166_2': 'TUV',
    'local_name': {
      'sk': 'Tuvalu',
      'en': 'Tuvalu'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 0
  },
  {
    'ordnr': 231,
    'code': '800',
    'name': 'Ugandská republika',
    'iso3166_1': 'UG',
    'iso3166_2': 'UGA',
    'local_name': {
      'sk': 'Ugandská republika',
      'en': 'Uganda'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 232,
    'code': '804',
    'name': 'Ukrajina',
    'iso3166_1': 'UA',
    'iso3166_2': 'UKR',
    'local_name': {
      'sk': 'Ukrajina',
      'en': 'Ukraine'
    },
    'region': 'Europe',
    'sub_region': 'Eastern Europe',
    'score': 2
  },
  {
    'ordnr': 233,
    'code': '807',
    'name': 'Severomacedónska republika',
    'iso3166_1': 'MK',
    'iso3166_2': 'MKD',
    'local_name': {
      'sk': 'Severomacedónska republika',
      'en': 'North Macedonia'
    },
    'region': 'Europe',
    'sub_region': 'Southern Europe',
    'score': 0
  },
  {
    'ordnr': 234,
    'code': '818',
    'name': 'Egyptská arabská republika',
    'iso3166_1': 'EG',
    'iso3166_2': 'EGY',
    'local_name': {
      'sk': 'Egyptská arabská republika',
      'en': 'Egypt'
    },
    'region': 'Africa',
    'sub_region': 'Northern Africa',
    'score': 2
  },
  {
    'ordnr': 235,
    'code': '826',
    'name': 'Spojené kráľovstvo Veľkej Británie a Severného Írska',
    'iso3166_1': 'GB',
    'iso3166_2': 'GBR',
    'local_name': {
      'sk': 'Spojené kráľovstvo Veľkej Británie a Severného Írska',
      'en': 'United Kingdom'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 236,
    'code': '831',
    'name': 'Guernsey',
    'iso3166_1': 'GG',
    'iso3166_2': 'GGY',
    'local_name': {
      'sk': 'Guernsey',
      'en': 'Guernsey'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 237,
    'code': '832',
    'name': 'Jersey',
    'iso3166_1': 'JE',
    'iso3166_2': 'JEY',
    'local_name': {
      'sk': 'Jersey',
      'en': 'Jersey'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 238,
    'code': '833',
    'name': 'Ostrov Man',
    'iso3166_1': 'IM',
    'iso3166_2': 'IMN',
    'local_name': {
      'sk': 'Ostrov Man',
      'en': 'Isle of Man'
    },
    'region': 'Europe',
    'sub_region': 'Northern Europe',
    'score': 0
  },
  {
    'ordnr': 239,
    'code': '834',
    'name': 'Tanzánijská zjednotená republika',
    'iso3166_1': 'TZ',
    'iso3166_2': 'TZA',
    'local_name': {
      'sk': 'Tanzánijská zjednotená republika',
      'en': 'Tanzania'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 2
  },
  {
    'ordnr': 240,
    'code': '840',
    'name': 'Spojené štáty americké',
    'iso3166_1': 'US',
    'iso3166_2': 'USA',
    'local_name': {
      'sk': 'Spojené štáty americké',
      'en': 'United States of America'
    },
    'region': 'Americas',
    'sub_region': 'Northern America',
    'score': 0
  },
  {
    'ordnr': 241,
    'code': '850',
    'name': 'Panenské ostrovy Spojených štátov',
    'iso3166_1': 'VI',
    'iso3166_2': 'VIR',
    'local_name': {
      'sk': 'Panenské ostrovy Spojených štátov',
      'en': 'Virgin Islands, U.S.'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 1
  },
  {
    'ordnr': 242,
    'code': '854',
    'name': 'Burkina Faso',
    'iso3166_1': 'BF',
    'iso3166_2': 'BFA',
    'local_name': {
      'sk': 'Burkina Faso',
      'en': 'Burkina Faso'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  },
  {
    'ordnr': 243,
    'code': '858',
    'name': 'Uruguajská východná republika',
    'iso3166_1': 'UY',
    'iso3166_2': 'URY',
    'local_name': {
      'sk': 'Uruguajská východná republika',
      'en': 'Uruguay'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 0
  },
  {
    'ordnr': 244,
    'code': '860',
    'name': 'Uzbecká republika',
    'iso3166_1': 'UZ',
    'iso3166_2': 'UZB',
    'local_name': {
      'sk': 'Uzbecká republika',
      'en': 'Uzbekistan'
    },
    'region': 'Asia',
    'sub_region': 'Central Asia',
    'score': 2
  },
  {
    'ordnr': 245,
    'code': '862',
    'name': 'Venezuelská bolívarovská republika',
    'iso3166_1': 'VE',
    'iso3166_2': 'VEN',
    'local_name': {
      'sk': 'Venezuelská bolívarovská republika',
      'en': 'Venezuela'
    },
    'region': 'Americas',
    'sub_region': 'Latin America and the Caribbean',
    'score': 2
  },
  {
    'ordnr': 246,
    'code': '876',
    'name': 'Wallis a Futuna',
    'iso3166_1': 'WF',
    'iso3166_2': 'WLF',
    'local_name': {
      'sk': 'Wallis a Futuna',
      'en': 'Wallis and Futuna'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 0
  },
  {
    'ordnr': 247,
    'code': '882',
    'name': 'Samojský nezávislý štát',
    'iso3166_1': 'WS',
    'iso3166_2': 'WSM',
    'local_name': {
      'sk': 'Samojský nezávislý štát',
      'en': 'Samoa'
    },
    'region': 'Oceania',
    'sub_region': 'Polynesia',
    'score': 1
  },
  {
    'ordnr': 248,
    'code': '887',
    'name': 'Jemenská republika',
    'iso3166_1': 'YE',
    'iso3166_2': 'YEM',
    'local_name': {
      'sk': 'Jemenská republika',
      'en': 'Yemen'
    },
    'region': 'Asia',
    'sub_region': 'Western Asia',
    'score': 2
  },
  {
    'ordnr': 249,
    'code': '894',
    'name': 'Zambijská republika',
    'iso3166_1': 'ZM',
    'iso3166_2': 'ZMB',
    'local_name': {
      'sk': 'Zambijská republika',
      'en': 'Zambia'
    },
    'region': 'Africa',
    'sub_region': 'Sub-Saharan Africa',
    'score': 0
  }
]

export default countries
