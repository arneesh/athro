
export const currencySymbol => {
  const currencySymbols = [
    {
      Country: 'New Zealand',
      CountryCode: 'NZ',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Cook Islands',
      CountryCode: 'CK',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Niue',
      CountryCode: 'NU',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Pitcairn',
      CountryCode: 'PN',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Tokelau',
      CountryCode: 'TK',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Australian',
      CountryCode: 'AU',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Christmas Island',
      CountryCode: 'CX',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Cocos (Keeling) Islands',
      CountryCode: 'CC',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Heard and Mc Donald Islands',
      CountryCode: 'HM',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Kiribati',
      CountryCode: 'KI',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Nauru',
      CountryCode: 'NR',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Norfolk Island',
      CountryCode: 'NF',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Tuvalu',
      CountryCode: 'TV',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'American Samoa',
      CountryCode: 'AS',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Andorra',
      CountryCode: 'AD',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Austria',
      CountryCode: 'AT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Belgium',
      CountryCode: 'BE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Finland',
      CountryCode: 'FI',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'France',
      CountryCode: 'FR',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'French Guiana',
      CountryCode: 'GF',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'French Southern Territories',
      CountryCode: 'TF',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Germany',
      CountryCode: 'DE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Greece',
      CountryCode: 'GR',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Guadeloupe',
      CountryCode: 'GP',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Ireland',
      CountryCode: 'IE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Italy',
      CountryCode: 'IT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Luxembourg',
      CountryCode: 'LU',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Martinique',
      CountryCode: 'MQ',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Mayotte',
      CountryCode: 'YT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Monaco',
      CountryCode: 'MC',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Netherlands',
      CountryCode: 'NL',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Portugal',
      CountryCode: 'PT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Reunion',
      CountryCode: 'RE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Samoa',
      CountryCode: 'WS',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'San Marino',
      CountryCode: 'SM',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Slovenia',
      CountryCode: 'SI',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Spain',
      CountryCode: 'ES',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Vatican City State (Holy See)',
      CountryCode: 'VA',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'South Georgia and the South Sandwich Islands',
      CountryCode: 'GS',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'United Kingdom',
      CountryCode: 'GB',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Jersey',
      CountryCode: 'JE',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'British Indian Ocean Territory',
      CountryCode: 'IO',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Guam',
      CountryCode: 'GU',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Marshall Islands',
      CountryCode: 'MH',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Micronesia Federated States of',
      CountryCode: 'FM',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Northern Mariana Islands',
      CountryCode: 'MP',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Palau',
      CountryCode: 'PW',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Puerto Rico',
      CountryCode: 'PR',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Turks and Caicos Islands',
      CountryCode: 'TC',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'United States',
      CountryCode: 'US',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'United States Minor Outlying Islands',
      CountryCode: 'UM',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Virgin Islands (British)',
      CountryCode: 'VG',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Virgin Islands (US)',
      CountryCode: 'VI',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Hong Kong',
      CountryCode: 'HK',
      Currency: 'HKD',
      Code: 'HKD',
      Symbol: '$'
    },
    {
      Country: 'Canada',
      CountryCode: 'CA',
      Currency: 'Canadian Dollar',
      Code: 'CAD',
      Symbol: '$'
    },
    {
      Country: 'Japan',
      CountryCode: 'JP',
      Currency: 'Japanese Yen',
      Code: 'JPY',
      Symbol: '￥'
    },
    {
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Currency: 'Afghani',
      Code: 'AFN',
      Symbol: '؋'
    },
    {
      Country: 'Albania',
      CountryCode: 'AL',
      Currency: 'Lek',
      Code: 'ALL',
      Symbol: 'Lek'
    },
    {
      Country: 'Algeria',
      CountryCode: 'DZ',
      Currency: 'Algerian Dinar',
      Code: 'DZD',
      Symbol: 'د.ج.\u200f'
    },
    {
      Country: 'Anguilla',
      CountryCode: 'AI',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Antigua and Barbuda',
      CountryCode: 'AG',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Dominica',
      CountryCode: 'DM',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Grenada',
      CountryCode: 'GD',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Montserrat',
      CountryCode: 'MS',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Kitts',
      CountryCode: 'KN',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Lucia',
      CountryCode: 'LC',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Vincent Grenadines',
      CountryCode: 'VC',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Argentina',
      CountryCode: 'AR',
      Currency: 'Peso',
      Code: 'ARS',
      Symbol: '$'
    },
    {
      Country: 'Armenia',
      CountryCode: 'AM',
      Currency: 'Dram',
      Code: 'AMD',
      Symbol: '֏'
    },
    {
      Country: 'Aruba',
      CountryCode: 'AW',
      Currency: 'Netherlands Antilles Guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Netherlands Antilles',
      CountryCode: 'AN',
      Currency: 'Netherlands Antilles Guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Azerbaijan',
      CountryCode: 'AZ',
      Currency: 'Manat',
      Code: 'AZN',
      Symbol: '₼'
    },
    {
      Country: 'Bahamas',
      CountryCode: 'BS',
      Currency: 'Bahamian Dollar',
      Code: 'BSD',
      Symbol: 'BSD'
    },
    {
      Country: 'Bahrain',
      CountryCode: 'BH',
      Currency: 'Bahraini Dinar',
      Code: 'BHD',
      Symbol: 'د.ب.\u200f'
    },
    {
      Country: 'Bangladesh',
      CountryCode: 'BD',
      Currency: 'Taka',
      Code: 'BDT',
      Symbol: '৳'
    },
    {
      Country: 'Barbados',
      CountryCode: 'BB',
      Currency: 'Barbadian Dollar',
      Code: 'BBD',
      Symbol: 'BBD'
    },
    {
      Country: 'Belarus',
      CountryCode: 'BY',
      Currency: 'Belarus Ruble',
      Code: 'BYR',
      Symbol: 'BYR'
    },
    {
      Country: 'Belize',
      CountryCode: 'BZ',
      Currency: 'Belizean Dollar',
      Code: 'BZD',
      Symbol: '$'
    },
    {
      Country: 'Benin',
      CountryCode: 'BJ',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Burkina Faso',
      CountryCode: 'BF',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Guinea-Bissau',
      CountryCode: 'GW',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Ivory Coast',
      CountryCode: 'CI',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Mali',
      CountryCode: 'ML',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Niger',
      CountryCode: 'NE',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Senegal',
      CountryCode: 'SN',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Togo',
      CountryCode: 'TG',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Bermuda',
      CountryCode: 'BM',
      Currency: 'Bermudian Dollar',
      Code: 'BMD',
      Symbol: 'BMD'
    },
    {
      Country: 'Bhutan',
      CountryCode: 'BT',
      Currency: 'Indian Rupee',
      Code: 'INR',
      Symbol: '₹'
    },
    {
      Country: 'India',
      CountryCode: 'IN',
      Currency: 'Indian Rupee',
      Code: 'INR',
      Symbol: '₹'
    },
    {
      Country: 'Bolivia',
      CountryCode: 'BO',
      Currency: 'Boliviano',
      Code: 'BOB',
      Symbol: 'Bs.'
    },
    {
      Country: 'Botswana',
      CountryCode: 'BW',
      Currency: 'Pula',
      Code: 'BWP',
      Symbol: 'P'
    },
    {
      Country: 'Bouvet Island',
      CountryCode: 'BV',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Norway',
      CountryCode: 'NO',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Svalbard and Jan Mayen Islands',
      CountryCode: 'SJ',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Brazil',
      CountryCode: 'BR',
      Currency: 'Brazil',
      Code: 'BRL',
      Symbol: 'R$'
    },
    {
      Country: 'Brunei Darussalam',
      CountryCode: 'BN',
      Currency: 'Bruneian Dollar',
      Code: 'BND',
      Symbol: '$'
    },
    {
      Country: 'Bulgaria',
      CountryCode: 'BG',
      Currency: 'Lev',
      Code: 'BGN',
      Symbol: 'лв.'
    },
    {
      Country: 'Burundi',
      CountryCode: 'BI',
      Currency: 'Burundi Franc',
      Code: 'BIF',
      Symbol: 'FBu'
    },
    {
      Country: 'Cambodia',
      CountryCode: 'KH',
      Currency: 'Riel',
      Code: 'KHR',
      Symbol: '៛'
    },
    {
      Country: 'Cameroon',
      CountryCode: 'CM',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Central African Republic',
      CountryCode: 'CF',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Chad',
      CountryCode: 'TD',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Congo Republic of the Democratic',
      CountryCode: 'CG',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Equatorial Guinea',
      CountryCode: 'GQ',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Gabon',
      CountryCode: 'GA',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Cape Verde',
      CountryCode: 'CV',
      Currency: 'Escudo',
      Code: 'CVE',
      Symbol: 'CVE'
    },
    {
      Country: 'Cayman Islands',
      CountryCode: 'KY',
      Currency: 'Caymanian Dollar',
      Code: 'KYD',
      Symbol: 'KYD'
    },
    {
      Country: 'Chile',
      CountryCode: 'CL',
      Currency: 'Chilean Peso',
      Code: 'CLP',
      Symbol: '$'
    },
    {
      Country: 'China',
      CountryCode: 'CN',
      Currency: 'Yuan Renminbi',
      Code: 'CNY',
      Symbol: '元'
    },
    {
      Country: 'Colombia',
      CountryCode: 'CO',
      Currency: 'Peso',
      Code: 'COP',
      Symbol: '$'
    },
    {
      Country: 'Comoros',
      CountryCode: 'KM',
      Currency: 'Comoran Franc',
      Code: 'KMF',
      Symbol: 'FC'
    },
    {
      Country: 'Congo-Brazzaville',
      CountryCode: 'CD',
      Currency: 'Congolese Frank',
      Code: 'CDF',
      Symbol: 'FC'
    },
    {
      Country: 'Costa Rica',
      CountryCode: 'CR',
      Currency: 'Costa Rican Colon',
      Code: 'CRC',
      Symbol: '₡'
    },
    {
      Country: 'Croatia (Hrvatska)',
      CountryCode: 'HR',
      Currency: 'Croatian Dinar',
      Code: 'HRK',
      Symbol: 'kn'
    },
    {
      Country: 'Cuba',
      CountryCode: 'CU',
      Currency: 'Cuban Peso',
      Code: 'CUP',
      Symbol: 'CUP'
    },
    {
      Country: 'Cyprus',
      CountryCode: 'CY',
      Currency: 'Cypriot Pound',
      Code: 'CYP',
      Symbol: 'CYP'
    },
    {
      Country: 'Czech Republic',
      CountryCode: 'CZ',
      Currency: 'Koruna',
      Code: 'CZK',
      Symbol: 'Kč'
    },
    {
      Country: 'Denmark',
      CountryCode: 'DK',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Faroe Islands',
      CountryCode: 'FO',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Greenland',
      CountryCode: 'GL',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Djibouti',
      CountryCode: 'DJ',
      Currency: 'Djiboutian Franc',
      Code: 'DJF',
      Symbol: 'Fdj'
    },
    {
      Country: 'Dominican Republic',
      CountryCode: 'DO',
      Currency: 'Dominican Peso',
      Code: 'DOP',
      Symbol: 'RD$'
    },
    {
      Country: 'East Timor',
      CountryCode: 'TP',
      Currency: 'Indonesian Rupiah',
      Code: 'IDR',
      Symbol: 'Rp'
    },
    {
      Country: 'Indonesia',
      CountryCode: 'ID',
      Currency: 'Indonesian Rupiah',
      Code: 'IDR',
      Symbol: 'Rp'
    },
    {
      Country: 'Ecuador',
      CountryCode: 'EC',
      Currency: 'Sucre',
      Code: 'ECS',
      Symbol: 'ECS'
    },
    {
      Country: 'Egypt',
      CountryCode: 'EG',
      Currency: 'Egyptian Pound',
      Code: 'EGP',
      Symbol: 'ج.م.\u200f'
    },
    {
      Country: 'El Salvador',
      CountryCode: 'SV',
      Currency: 'Salvadoran Colon',
      Code: 'SVC',
      Symbol: 'SVC'
    },
    {
      Country: 'Eritrea',
      CountryCode: 'ER',
      Currency: 'Ethiopian Birr',
      Code: 'ETB',
      Symbol: 'Br'
    },
    {
      Country: 'Ethiopia',
      CountryCode: 'ET',
      Currency: 'Ethiopian Birr',
      Code: 'ETB',
      Symbol: 'Br'
    },
    {
      Country: 'Estonia',
      CountryCode: 'EE',
      Currency: 'Estonian Kroon',
      Code: 'EEK',
      Symbol: 'kr'
    },
    {
      Country: 'Falkland Islands (Malvinas)',
      CountryCode: 'FK',
      Currency: 'Falkland Pound',
      Code: 'FKP',
      Symbol: 'FKP'
    },
    {
      Country: 'Fiji',
      CountryCode: 'FJ',
      Currency: 'Fijian Dollar',
      Code: 'FJD',
      Symbol: 'FJD'
    },
    {
      Country: 'French Polynesia',
      CountryCode: 'PF',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'New Caledonia',
      CountryCode: 'NC',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'Wallis and Futuna Islands',
      CountryCode: 'WF',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'Gambia',
      CountryCode: 'GM',
      Currency: 'Dalasi',
      Code: 'GMD',
      Symbol: 'GMD'
    },
    {
      Country: 'Georgia',
      CountryCode: 'GE',
      Currency: 'Lari',
      Code: 'GEL',
      Symbol: '₾'
    },
    {
      Country: 'Gibraltar',
      CountryCode: 'GI',
      Currency: 'Gibraltar Pound',
      Code: 'GIP',
      Symbol: 'GIP'
    },
    {
      Country: 'Guatemala',
      CountryCode: 'GT',
      Currency: 'Quetzal',
      Code: 'GTQ',
      Symbol: 'Q'
    },
    {
      Country: 'Guinea',
      CountryCode: 'GN',
      Currency: 'Guinean Franc',
      Code: 'GNF',
      Symbol: 'FG'
    },
    {
      Country: 'Guyana',
      CountryCode: 'GY',
      Currency: 'Guyanaese Dollar',
      Code: 'GYD',
      Symbol: 'GYD'
    },
    {
      Country: 'Haiti',
      CountryCode: 'HT',
      Currency: 'Gourde',
      Code: 'HTG',
      Symbol: 'HTG'
    },
    {
      Country: 'Honduras',
      CountryCode: 'HN',
      Currency: 'Lempira',
      Code: 'HNL',
      Symbol: 'L'
    },
    {
      Country: 'Hungary',
      CountryCode: 'HU',
      Currency: 'Forint',
      Code: 'HUF',
      Symbol: 'Ft'
    },
    {
      Country: 'Iceland',
      CountryCode: 'IS',
      Currency: 'Icelandic Krona',
      Code: 'ISK',
      Symbol: 'kr'
    },
    {
      Country: 'Iran (Islamic Republic of)',
      CountryCode: 'IR',
      Currency: 'Iranian Rial',
      Code: 'IRR',
      Symbol: '﷼'
    },
    {
      Country: 'Iraq',
      CountryCode: 'IQ',
      Currency: 'Iraqi Dinar',
      Code: 'IQD',
      Symbol: 'د.ع.\u200f'
    },
    {
      Country: 'Israel',
      CountryCode: 'IL',
      Currency: 'Shekel',
      Code: 'ILS',
      Symbol: '₪'
    },
    {
      Country: 'Jamaica',
      CountryCode: 'JM',
      Currency: 'Jamaican Dollar',
      Code: 'JMD',
      Symbol: '$'
    },
    {
      Country: 'Jordan',
      CountryCode: 'JO',
      Currency: 'Jordanian Dinar',
      Code: 'JOD',
      Symbol: 'د.أ.\u200f'
    },
    {
      Country: 'Kazakhstan',
      CountryCode: 'KZ',
      Currency: 'Tenge',
      Code: 'KZT',
      Symbol: 'тңг.'
    },
    {
      Country: 'Kenya',
      CountryCode: 'KE',
      Currency: 'Kenyan Shilling',
      Code: 'KES',
      Symbol: 'KSh'
    },
    {
      Country: 'Korea North',
      CountryCode: 'KP',
      Currency: 'Won',
      Code: 'KPW',
      Symbol: 'KPW'
    },
    {
      Country: 'Korea South',
      CountryCode: 'KR',
      Currency: 'Won',
      Code: 'KRW',
      Symbol: '₩'
    },
    {
      Country: 'Kuwait',
      CountryCode: 'KW',
      Currency: 'Kuwaiti Dinar',
      Code: 'KWD',
      Symbol: 'د.ك.\u200f'
    },
    {
      Country: 'Kyrgyzstan',
      CountryCode: 'KG',
      Currency: 'Som',
      Code: 'KGS',
      Symbol: 'KGS'
    },
    {
      Country: 'Lao PeopleÕs Democratic Republic',
      CountryCode: 'LA',
      Currency: 'Kip',
      Code: 'LAK',
      Symbol: 'LAK'
    },
    {
      Country: 'Latvia',
      CountryCode: 'LV',
      Currency: 'Lat',
      Code: 'LVL',
      Symbol: 'Ls'
    },
    {
      Country: 'Lebanon',
      CountryCode: 'LB',
      Currency: 'Lebanese Pound',
      Code: 'LBP',
      Symbol: 'ل.ل.\u200f'
    },
    {
      Country: 'Lesotho',
      CountryCode: 'LS',
      Currency: 'Loti',
      Code: 'LSL',
      Symbol: 'LSL'
    },
    {
      Country: 'Liberia',
      CountryCode: 'LR',
      Currency: 'Liberian Dollar',
      Code: 'LRD',
      Symbol: 'LRD'
    },
    {
      Country: 'Libyan Arab Jamahiriya',
      CountryCode: 'LY',
      Currency: 'Libyan Dinar',
      Code: 'LYD',
      Symbol: 'د.ل.\u200f'
    },
    {
      Country: 'Liechtenstein',
      CountryCode: 'LI',
      Currency: 'Swiss Franc',
      Code: 'CHF',
      Symbol: 'CHF'
    },
    {
      Country: 'Switzerland',
      CountryCode: 'CH',
      Currency: 'Swiss Franc',
      Code: 'CHF',
      Symbol: 'CHF'
    },
    {
      Country: 'Lithuania',
      CountryCode: 'LT',
      Currency: 'Lita',
      Code: 'LTL',
      Symbol: 'Lt'
    },
    {
      Country: 'Macau',
      CountryCode: 'MO',
      Currency: 'Pataca',
      Code: 'MOP',
      Symbol: 'MOP$'
    },
    {
      Country: 'Macedonia',
      CountryCode: 'MK',
      Currency: 'Denar',
      Code: 'MKD',
      Symbol: 'ден'
    },
    {
      Country: 'Madagascar',
      CountryCode: 'MG',
      Currency: 'Malagasy Franc',
      Code: 'MGA',
      Symbol: 'Ar'
    },
    {
      Country: 'Malawi',
      CountryCode: 'MW',
      Currency: 'Malawian Kwacha',
      Code: 'MWK',
      Symbol: 'MWK'
    },
    {
      Country: 'Malaysia',
      CountryCode: 'MY',
      Currency: 'Ringgit',
      Code: 'MYR',
      Symbol: 'RM'
    },
    {
      Country: 'Maldives',
      CountryCode: 'MV',
      Currency: 'Rufiyaa',
      Code: 'MVR',
      Symbol: 'MVR'
    },
    {
      Country: 'Malta',
      CountryCode: 'MT',
      Currency: 'Maltese Lira',
      Code: 'MTL',
      Symbol: 'MTL'
    },
    {
      Country: 'Mauritania',
      CountryCode: 'MR',
      Currency: 'Ouguiya',
      Code: 'MRO',
      Symbol: 'MRO'
    },
    {
      Country: 'Mauritius',
      CountryCode: 'MU',
      Currency: 'Mauritian Rupee',
      Code: 'MUR',
      Symbol: 'Rs'
    },
    {
      Country: 'Mexico',
      CountryCode: 'MX',
      Currency: 'Peso',
      Code: 'MXN',
      Symbol: '$'
    },
    {
      Country: 'Moldova Republic of',
      CountryCode: 'MD',
      Currency: 'Leu',
      Code: 'MDL',
      Symbol: 'MDL'
    },
    {
      Country: 'Mongolia',
      CountryCode: 'MN',
      Currency: 'Tugrik',
      Code: 'MNT',
      Symbol: 'MNT'
    },
    {
      Country: 'Morocco',
      CountryCode: 'MA',
      Currency: 'Dirham',
      Code: 'MAD',
      Symbol: 'د.م.\u200f'
    },
    {
      Country: 'Western Sahara',
      CountryCode: 'EH',
      Currency: 'Dirham',
      Code: 'MAD',
      Symbol: 'د.م.\u200f'
    },
    {
      Country: 'Mozambique',
      CountryCode: 'MZ',
      Currency: 'Metical',
      Code: 'MZN',
      Symbol: 'MT'
    },
    {
      Country: 'Myanmar',
      CountryCode: 'MM',
      Currency: 'Kyat',
      Code: 'MMK',
      Symbol: 'K'
    },
    {
      Country: 'Namibia',
      CountryCode: 'NA',
      Currency: 'Dollar',
      Code: 'NAD',
      Symbol: 'N$'
    },
    {
      Country: 'Nepal',
      CountryCode: 'NP',
      Currency: 'Nepalese Rupee',
      Code: 'NPR',
      Symbol: 'नेरू'
    },
    {
      Country: 'Nicaragua',
      CountryCode: 'NI',
      Currency: 'Cordoba Oro',
      Code: 'NIO',
      Symbol: 'C$'
    },
    {
      Country: 'Nigeria',
      CountryCode: 'NG',
      Currency: 'Naira',
      Code: 'NGN',
      Symbol: '₦'
    },
    {
      Country: 'Oman',
      CountryCode: 'OM',
      Currency: 'Sul Rial',
      Code: 'OMR',
      Symbol: 'ر.ع.\u200f'
    },
    {
      Country: 'Pakistan',
      CountryCode: 'PK',
      Currency: 'Rupee',
      Code: 'PKR',
      Symbol: '₨'
    },
    {
      Country: 'Panama',
      CountryCode: 'PA',
      Currency: 'Balboa',
      Code: 'PAB',
      Symbol: 'B/.'
    },
    {
      Country: 'Papua New Guinea',
      CountryCode: 'PG',
      Currency: 'Kina',
      Code: 'PGK',
      Symbol: 'PGK'
    },
    {
      Country: 'Paraguay',
      CountryCode: 'PY',
      Currency: 'Guarani',
      Code: 'PYG',
      Symbol: '₲'
    },
    {
      Country: 'Peru',
      CountryCode: 'PE',
      Currency: 'Nuevo Sol',
      Code: 'PEN',
      Symbol: 'S/.'
    },
    {
      Country: 'Philippines',
      CountryCode: 'PH',
      Currency: 'Peso',
      Code: 'PHP',
      Symbol: '₱'
    },
    {
      Country: 'Poland',
      CountryCode: 'PL',
      Currency: 'Zloty',
      Code: 'PLN',
      Symbol: 'zł'
    },
    {
      Country: 'Qatar',
      CountryCode: 'QA',
      Currency: 'Rial',
      Code: 'QAR',
      Symbol: 'ر.ق.\u200f'
    },
    {
      Country: 'Romania',
      CountryCode: 'RO',
      Currency: 'Leu',
      Code: 'RON',
      Symbol: 'RON'
    },
    {
      Country: 'Russian Federation',
      CountryCode: 'RU',
      Currency: 'Ruble',
      Code: 'RUB',
      Symbol: 'руб.'
    },
    {
      Country: 'Rwanda',
      CountryCode: 'RW',
      Currency: 'Rwanda Franc',
      Code: 'RWF',
      Symbol: 'FR'
    },
    {
      Country: 'Sao Tome and Principe',
      CountryCode: 'ST',
      Currency: 'Dobra',
      Code: 'STD',
      Symbol: 'STD'
    },
    {
      Country: 'Saudi Arabia',
      CountryCode: 'SA',
      Currency: 'Riyal',
      Code: 'SAR',
      Symbol: 'ر.س.\u200f'
    },
    {
      Country: 'Seychelles',
      CountryCode: 'SC',
      Currency: 'Rupee',
      Code: 'SCR',
      Symbol: 'SCR'
    },
    {
      Country: 'Sierra Leone',
      CountryCode: 'SL',
      Currency: 'Leone',
      Code: 'SLL',
      Symbol: 'SLL'
    },
    {
      Country: 'Singapore',
      CountryCode: 'SG',
      Currency: 'Dollar',
      Code: 'SGD',
      Symbol: '$'
    },
    {
      Country: 'Slovakia (Slovak Republic)',
      CountryCode: 'SK',
      Currency: 'Koruna',
      Code: 'SKK',
      Symbol: 'SKK'
    },
    {
      Country: 'Solomon Islands',
      CountryCode: 'SB',
      Currency: 'Solomon Islands Dollar',
      Code: 'SBD',
      Symbol: 'SBD'
    },
    {
      Country: 'Somalia',
      CountryCode: 'SO',
      Currency: 'Shilling',
      Code: 'SOS',
      Symbol: 'Ssh'
    },
    {
      Country: 'South Africa',
      CountryCode: 'ZA',
      Currency: 'Rand',
      Code: 'ZAR',
      Symbol: 'R'
    },
    {
      Country: 'Sri Lanka',
      CountryCode: 'LK',
      Currency: 'Rupee',
      Code: 'LKR',
      Symbol: 'රු'
    },
    {
      Country: 'Sudan',
      CountryCode: 'SD',
      Currency: 'Dinar',
      Code: 'SDG',
      Symbol: 'ج.س'
    },
    {
      Country: 'Suriname',
      CountryCode: 'SR',
      Currency: 'Surinamese Guilder',
      Code: 'SRD',
      Symbol: 'SRD'
    },
    {
      Country: 'Swaziland',
      CountryCode: 'SZ',
      Currency: 'Lilangeni',
      Code: 'SZL',
      Symbol: 'SZL'
    },
    {
      Country: 'Sweden',
      CountryCode: 'SE',
      Currency: 'Krona',
      Code: 'SEK',
      Symbol: 'kr'
    },
    {
      Country: 'Syrian Arab Republic',
      CountryCode: 'SY',
      Currency: 'Syrian Pound',
      Code: 'SYP',
      Symbol: '£S'
    },
    {
      Country: 'Taiwan',
      CountryCode: 'TW',
      Currency: 'Dollar',
      Code: 'TWD',
      Symbol: 'NT$'
    },
    {
      Country: 'Tajikistan',
      CountryCode: 'TJ',
      Currency: 'Tajikistan Ruble',
      Code: 'TJS',
      Symbol: 'TJS'
    },
    {
      Country: 'Tanzania',
      CountryCode: 'TZ',
      Currency: 'Shilling',
      Code: 'TZS',
      Symbol: 'TSh'
    },
    {
      Country: 'Thailand',
      CountryCode: 'TH',
      Currency: 'Baht',
      Code: 'THB',
      Symbol: '฿'
    },
    {
      Country: 'Tonga',
      CountryCode: 'TO',
      Currency: 'PaÕanga',
      Code: 'TOP',
      Symbol: 'T$'
    },
    {
      Country: 'Trinidad and Tobago',
      CountryCode: 'TT',
      Currency: 'Trinidad and Tobago Dollar',
      Code: 'TTD',
      Symbol: '$'
    },
    {
      Country: 'Tunisia',
      CountryCode: 'TN',
      Currency: 'Tunisian Dinar',
      Code: 'TND',
      Symbol: 'د.ت.\u200f'
    },
    {
      Country: 'Turkey',
      CountryCode: 'TR',
      Currency: 'Lira',
      Code: 'TRY',
      Symbol: '₺'
    },
    {
      Country: 'Turkmenistan',
      CountryCode: 'TM',
      Currency: 'Manat',
      Code: 'TMT',
      Symbol: 'TMT'
    },
    {
      Country: 'Uganda',
      CountryCode: 'UG',
      Currency: 'Shilling',
      Code: 'UGX',
      Symbol: 'USh'
    },
    {
      Country: 'Ukraine',
      CountryCode: 'UA',
      Currency: 'Hryvnia',
      Code: 'UAH',
      Symbol: '₴'
    },
    {
      Country: 'United Arab Emirates',
      CountryCode: 'AE',
      Currency: 'Dirham',
      Code: 'AED',
      Symbol: 'د.إ.\u200f'
    },
    {
      Country: 'Uruguay',
      CountryCode: 'UY',
      Currency: 'Peso',
      Code: 'UYU',
      Symbol: '$'
    },
    {
      Country: 'Uzbekistan',
      CountryCode: 'UZ',
      Currency: 'Som',
      Code: 'UZS',
      Symbol: 'UZS'
    },
    {
      Country: 'Vanuatu',
      CountryCode: 'VU',
      Currency: 'Vatu',
      Code: 'VUV',
      Symbol: 'VUV'
    },
    {
      Country: 'Venezuela',
      CountryCode: 'VE',
      Currency: 'Bolivar',
      Code: 'VEF',
      Symbol: 'Bs.F.'
    },
    {
      Country: 'Vietnam',
      CountryCode: 'VN',
      Currency: 'Dong',
      Code: 'VND',
      Symbol: '₫'
    },
    {
      Country: 'Yemen',
      CountryCode: 'YE',
      Currency: 'Rial',
      Code: 'YER',
      Symbol: '﷼'
    },
    {
      Country: 'Zambia',
      CountryCode: 'ZM',
      Currency: 'Kwacha',
      Code: 'ZMK',
      Symbol: 'ZK'
    },
    {
      Country: 'Zimbabwe',
      CountryCode: 'ZW',
      Currency: 'Zimbabwe Dollar',
      Code: 'ZWD',
      Symbol: 'ZWD'
    },
    {
      Country: 'Aland Islands',
      CountryCode: 'AX',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Angola',
      CountryCode: 'AO',
      Currency: 'Angolan kwanza',
      Code: 'AOA',
      Symbol: 'AOA'
    },
    {
      Country: 'Antarctica',
      CountryCode: 'AQ',
      Currency: 'Antarctican dollar',
      Code: 'AQD',
      Symbol: 'AQD'
    },
    {
      Country: 'Bosnia and Herzegovina',
      CountryCode: 'BA',
      Currency: 'Bosnia and Herzegovina convertible mark',
      Code: 'BAM',
      Symbol: 'KM'
    },
    {
      Country: 'Congo (Kinshasa)',
      CountryCode: 'CD',
      Currency: 'Congolese Frank',
      Code: 'CDF',
      Symbol: 'FC'
    },
    {
      Country: 'Ghana',
      CountryCode: 'GH',
      Currency: 'Ghana cedi',
      Code: 'GHS',
      Symbol: 'GH₵'
    },
    {
      Country: 'Guernsey',
      CountryCode: 'GG',
      Currency: 'Guernsey pound',
      Code: 'GGP',
      Symbol: 'GGP'
    },
    {
      Country: 'Isle of Man',
      CountryCode: 'IM',
      Currency: 'Manx pound',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Laos',
      CountryCode: 'LA',
      Currency: 'Lao kip',
      Code: 'LAK',
      Symbol: 'LAK'
    },
    {
      Country: 'Macao S.A.R.',
      CountryCode: 'MO',
      Currency: 'Macanese pataca',
      Code: 'MOP',
      Symbol: 'MOP$'
    },
    {
      Country: 'Montenegro',
      CountryCode: 'ME',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Palestinian Territory',
      CountryCode: 'PS',
      Currency: 'Jordanian dinar',
      Code: 'JOD',
      Symbol: 'د.أ.\u200f'
    },
    {
      Country: 'Saint Barthelemy',
      CountryCode: 'BL',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Saint Helena',
      CountryCode: 'SH',
      Currency: 'Saint Helena pound',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Saint Martin (French part)',
      CountryCode: 'MF',
      Currency: 'Netherlands Antillean guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Saint Pierre and Miquelon',
      CountryCode: 'PM',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Serbia',
      CountryCode: 'RS',
      Currency: 'Serbian dinar',
      Code: 'RSD',
      Symbol: 'дин.'
    },
    {
      Country: 'US Armed Forces',
      CountryCode: 'USAF',
      Currency: 'US Dollar',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'New Zealand',
      CountryCode: 'NZ',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Cook Islands',
      CountryCode: 'CK',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Niue',
      CountryCode: 'NU',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Pitcairn',
      CountryCode: 'PN',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Tokelau',
      CountryCode: 'TK',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Australian',
      CountryCode: 'AU',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Christmas Island',
      CountryCode: 'CX',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Cocos (Keeling) Islands',
      CountryCode: 'CC',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Heard and Mc Donald Islands',
      CountryCode: 'HM',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Kiribati',
      CountryCode: 'KI',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Nauru',
      CountryCode: 'NR',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Norfolk Island',
      CountryCode: 'NF',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Tuvalu',
      CountryCode: 'TV',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'American Samoa',
      CountryCode: 'AS',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Andorra',
      CountryCode: 'AD',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Austria',
      CountryCode: 'AT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Belgium',
      CountryCode: 'BE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Finland',
      CountryCode: 'FI',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'France',
      CountryCode: 'FR',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'French Guiana',
      CountryCode: 'GF',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'French Southern Territories',
      CountryCode: 'TF',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Germany',
      CountryCode: 'DE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Greece',
      CountryCode: 'GR',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Guadeloupe',
      CountryCode: 'GP',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Ireland',
      CountryCode: 'IE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Italy',
      CountryCode: 'IT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Luxembourg',
      CountryCode: 'LU',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Martinique',
      CountryCode: 'MQ',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Mayotte',
      CountryCode: 'YT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Monaco',
      CountryCode: 'MC',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Netherlands',
      CountryCode: 'NL',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Portugal',
      CountryCode: 'PT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Reunion',
      CountryCode: 'RE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Samoa',
      CountryCode: 'WS',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'San Marino',
      CountryCode: 'SM',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Slovenia',
      CountryCode: 'SI',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Spain',
      CountryCode: 'ES',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Vatican City State (Holy See)',
      CountryCode: 'VA',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'South Georgia and the South Sandwich Islands',
      CountryCode: 'GS',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'United Kingdom',
      CountryCode: 'GB',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Jersey',
      CountryCode: 'JE',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'British Indian Ocean Territory',
      CountryCode: 'IO',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Guam',
      CountryCode: 'GU',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Marshall Islands',
      CountryCode: 'MH',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Micronesia Federated States of',
      CountryCode: 'FM',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Northern Mariana Islands',
      CountryCode: 'MP',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Palau',
      CountryCode: 'PW',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Puerto Rico',
      CountryCode: 'PR',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Turks and Caicos Islands',
      CountryCode: 'TC',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'United States',
      CountryCode: 'US',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'United States Minor Outlying Islands',
      CountryCode: 'UM',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Virgin Islands (British)',
      CountryCode: 'VG',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Virgin Islands (US)',
      CountryCode: 'VI',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Hong Kong',
      CountryCode: 'HK',
      Currency: 'HKD',
      Code: 'HKD',
      Symbol: '$'
    },
    {
      Country: 'Canada',
      CountryCode: 'CA',
      Currency: 'Canadian Dollar',
      Code: 'CAD',
      Symbol: '$'
    },
    {
      Country: 'Japan',
      CountryCode: 'JP',
      Currency: 'Japanese Yen',
      Code: 'JPY',
      Symbol: '￥'
    },
    {
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Currency: 'Afghani',
      Code: 'AFN',
      Symbol: '؋'
    },
    {
      Country: 'Albania',
      CountryCode: 'AL',
      Currency: 'Lek',
      Code: 'ALL',
      Symbol: 'Lek'
    },
    {
      Country: 'Algeria',
      CountryCode: 'DZ',
      Currency: 'Algerian Dinar',
      Code: 'DZD',
      Symbol: 'د.ج.\u200f'
    },
    {
      Country: 'Anguilla',
      CountryCode: 'AI',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Antigua and Barbuda',
      CountryCode: 'AG',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Dominica',
      CountryCode: 'DM',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Grenada',
      CountryCode: 'GD',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Montserrat',
      CountryCode: 'MS',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Kitts',
      CountryCode: 'KN',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Lucia',
      CountryCode: 'LC',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Vincent Grenadines',
      CountryCode: 'VC',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Argentina',
      CountryCode: 'AR',
      Currency: 'Peso',
      Code: 'ARS',
      Symbol: '$'
    },
    {
      Country: 'Armenia',
      CountryCode: 'AM',
      Currency: 'Dram',
      Code: 'AMD',
      Symbol: '֏'
    },
    {
      Country: 'Aruba',
      CountryCode: 'AW',
      Currency: 'Netherlands Antilles Guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Netherlands Antilles',
      CountryCode: 'AN',
      Currency: 'Netherlands Antilles Guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Azerbaijan',
      CountryCode: 'AZ',
      Currency: 'Manat',
      Code: 'AZN',
      Symbol: '₼'
    },
    {
      Country: 'Bahamas',
      CountryCode: 'BS',
      Currency: 'Bahamian Dollar',
      Code: 'BSD',
      Symbol: 'BSD'
    },
    {
      Country: 'Bahrain',
      CountryCode: 'BH',
      Currency: 'Bahraini Dinar',
      Code: 'BHD',
      Symbol: 'د.ب.\u200f'
    },
    {
      Country: 'Bangladesh',
      CountryCode: 'BD',
      Currency: 'Taka',
      Code: 'BDT',
      Symbol: '৳'
    },
    {
      Country: 'Barbados',
      CountryCode: 'BB',
      Currency: 'Barbadian Dollar',
      Code: 'BBD',
      Symbol: 'BBD'
    },
    {
      Country: 'Belarus',
      CountryCode: 'BY',
      Currency: 'Belarus Ruble',
      Code: 'BYR',
      Symbol: 'BYR'
    },
    {
      Country: 'Belize',
      CountryCode: 'BZ',
      Currency: 'Belizean Dollar',
      Code: 'BZD',
      Symbol: '$'
    },
    {
      Country: 'Benin',
      CountryCode: 'BJ',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Burkina Faso',
      CountryCode: 'BF',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Guinea-Bissau',
      CountryCode: 'GW',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Ivory Coast',
      CountryCode: 'CI',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Mali',
      CountryCode: 'ML',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Niger',
      CountryCode: 'NE',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Senegal',
      CountryCode: 'SN',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Togo',
      CountryCode: 'TG',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Bermuda',
      CountryCode: 'BM',
      Currency: 'Bermudian Dollar',
      Code: 'BMD',
      Symbol: 'BMD'
    },
    {
      Country: 'Bhutan',
      CountryCode: 'BT',
      Currency: 'Indian Rupee',
      Code: 'INR',
      Symbol: '₹'
    },
    {
      Country: 'India',
      CountryCode: 'IN',
      Currency: 'Indian Rupee',
      Code: 'INR',
      Symbol: '₹'
    },
    {
      Country: 'Bolivia',
      CountryCode: 'BO',
      Currency: 'Boliviano',
      Code: 'BOB',
      Symbol: 'Bs.'
    },
    {
      Country: 'Botswana',
      CountryCode: 'BW',
      Currency: 'Pula',
      Code: 'BWP',
      Symbol: 'P'
    },
    {
      Country: 'Bouvet Island',
      CountryCode: 'BV',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Norway',
      CountryCode: 'NO',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Svalbard and Jan Mayen Islands',
      CountryCode: 'SJ',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Brazil',
      CountryCode: 'BR',
      Currency: 'Brazil',
      Code: 'BRL',
      Symbol: 'R$'
    },
    {
      Country: 'Brunei Darussalam',
      CountryCode: 'BN',
      Currency: 'Bruneian Dollar',
      Code: 'BND',
      Symbol: '$'
    },
    {
      Country: 'Bulgaria',
      CountryCode: 'BG',
      Currency: 'Lev',
      Code: 'BGN',
      Symbol: 'лв.'
    },
    {
      Country: 'Burundi',
      CountryCode: 'BI',
      Currency: 'Burundi Franc',
      Code: 'BIF',
      Symbol: 'FBu'
    },
    {
      Country: 'Cambodia',
      CountryCode: 'KH',
      Currency: 'Riel',
      Code: 'KHR',
      Symbol: '៛'
    },
    {
      Country: 'Cameroon',
      CountryCode: 'CM',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Central African Republic',
      CountryCode: 'CF',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Chad',
      CountryCode: 'TD',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Congo Republic of the Democratic',
      CountryCode: 'CG',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Equatorial Guinea',
      CountryCode: 'GQ',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Gabon',
      CountryCode: 'GA',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Cape Verde',
      CountryCode: 'CV',
      Currency: 'Escudo',
      Code: 'CVE',
      Symbol: 'CVE'
    },
    {
      Country: 'Cayman Islands',
      CountryCode: 'KY',
      Currency: 'Caymanian Dollar',
      Code: 'KYD',
      Symbol: 'KYD'
    },
    {
      Country: 'Chile',
      CountryCode: 'CL',
      Currency: 'Chilean Peso',
      Code: 'CLP',
      Symbol: '$'
    },
    {
      Country: 'China',
      CountryCode: 'CN',
      Currency: 'Yuan Renminbi',
      Code: 'CNY',
      Symbol: '元'
    },
    {
      Country: 'Colombia',
      CountryCode: 'CO',
      Currency: 'Peso',
      Code: 'COP',
      Symbol: '$'
    },
    {
      Country: 'Comoros',
      CountryCode: 'KM',
      Currency: 'Comoran Franc',
      Code: 'KMF',
      Symbol: 'FC'
    },
    {
      Country: 'Congo-Brazzaville',
      CountryCode: 'CD',
      Currency: 'Congolese Frank',
      Code: 'CDF',
      Symbol: 'FC'
    },
    {
      Country: 'Costa Rica',
      CountryCode: 'CR',
      Currency: 'Costa Rican Colon',
      Code: 'CRC',
      Symbol: '₡'
    },
    {
      Country: 'Croatia (Hrvatska)',
      CountryCode: 'HR',
      Currency: 'Croatian Dinar',
      Code: 'HRK',
      Symbol: 'kn'
    },
    {
      Country: 'Cuba',
      CountryCode: 'CU',
      Currency: 'Cuban Peso',
      Code: 'CUP',
      Symbol: 'CUP'
    },
    {
      Country: 'Cyprus',
      CountryCode: 'CY',
      Currency: 'Cypriot Pound',
      Code: 'CYP',
      Symbol: 'CYP'
    },
    {
      Country: 'Czech Republic',
      CountryCode: 'CZ',
      Currency: 'Koruna',
      Code: 'CZK',
      Symbol: 'Kč'
    },
    {
      Country: 'Denmark',
      CountryCode: 'DK',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Faroe Islands',
      CountryCode: 'FO',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Greenland',
      CountryCode: 'GL',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Djibouti',
      CountryCode: 'DJ',
      Currency: 'Djiboutian Franc',
      Code: 'DJF',
      Symbol: 'Fdj'
    },
    {
      Country: 'Dominican Republic',
      CountryCode: 'DO',
      Currency: 'Dominican Peso',
      Code: 'DOP',
      Symbol: 'RD$'
    },
    {
      Country: 'East Timor',
      CountryCode: 'TP',
      Currency: 'Indonesian Rupiah',
      Code: 'IDR',
      Symbol: 'Rp'
    },
    {
      Country: 'Indonesia',
      CountryCode: 'ID',
      Currency: 'Indonesian Rupiah',
      Code: 'IDR',
      Symbol: 'Rp'
    },
    {
      Country: 'Ecuador',
      CountryCode: 'EC',
      Currency: 'Sucre',
      Code: 'ECS',
      Symbol: 'ECS'
    },
    {
      Country: 'Egypt',
      CountryCode: 'EG',
      Currency: 'Egyptian Pound',
      Code: 'EGP',
      Symbol: 'ج.م.\u200f'
    },
    {
      Country: 'El Salvador',
      CountryCode: 'SV',
      Currency: 'Salvadoran Colon',
      Code: 'SVC',
      Symbol: 'SVC'
    },
    {
      Country: 'Eritrea',
      CountryCode: 'ER',
      Currency: 'Ethiopian Birr',
      Code: 'ETB',
      Symbol: 'Br'
    },
    {
      Country: 'Ethiopia',
      CountryCode: 'ET',
      Currency: 'Ethiopian Birr',
      Code: 'ETB',
      Symbol: 'Br'
    },
    {
      Country: 'Estonia',
      CountryCode: 'EE',
      Currency: 'Estonian Kroon',
      Code: 'EEK',
      Symbol: 'kr'
    },
    {
      Country: 'Falkland Islands (Malvinas)',
      CountryCode: 'FK',
      Currency: 'Falkland Pound',
      Code: 'FKP',
      Symbol: 'FKP'
    },
    {
      Country: 'Fiji',
      CountryCode: 'FJ',
      Currency: 'Fijian Dollar',
      Code: 'FJD',
      Symbol: 'FJD'
    },
    {
      Country: 'French Polynesia',
      CountryCode: 'PF',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'New Caledonia',
      CountryCode: 'NC',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'Wallis and Futuna Islands',
      CountryCode: 'WF',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'Gambia',
      CountryCode: 'GM',
      Currency: 'Dalasi',
      Code: 'GMD',
      Symbol: 'GMD'
    },
    {
      Country: 'Georgia',
      CountryCode: 'GE',
      Currency: 'Lari',
      Code: 'GEL',
      Symbol: '₾'
    },
    {
      Country: 'Gibraltar',
      CountryCode: 'GI',
      Currency: 'Gibraltar Pound',
      Code: 'GIP',
      Symbol: 'GIP'
    },
    {
      Country: 'Guatemala',
      CountryCode: 'GT',
      Currency: 'Quetzal',
      Code: 'GTQ',
      Symbol: 'Q'
    },
    {
      Country: 'Guinea',
      CountryCode: 'GN',
      Currency: 'Guinean Franc',
      Code: 'GNF',
      Symbol: 'FG'
    },
    {
      Country: 'Guyana',
      CountryCode: 'GY',
      Currency: 'Guyanaese Dollar',
      Code: 'GYD',
      Symbol: 'GYD'
    },
    {
      Country: 'Haiti',
      CountryCode: 'HT',
      Currency: 'Gourde',
      Code: 'HTG',
      Symbol: 'HTG'
    },
    {
      Country: 'Honduras',
      CountryCode: 'HN',
      Currency: 'Lempira',
      Code: 'HNL',
      Symbol: 'L'
    },
    {
      Country: 'Hungary',
      CountryCode: 'HU',
      Currency: 'Forint',
      Code: 'HUF',
      Symbol: 'Ft'
    },
    {
      Country: 'Iceland',
      CountryCode: 'IS',
      Currency: 'Icelandic Krona',
      Code: 'ISK',
      Symbol: 'kr'
    },
    {
      Country: 'Iran (Islamic Republic of)',
      CountryCode: 'IR',
      Currency: 'Iranian Rial',
      Code: 'IRR',
      Symbol: '﷼'
    },
    {
      Country: 'Iraq',
      CountryCode: 'IQ',
      Currency: 'Iraqi Dinar',
      Code: 'IQD',
      Symbol: 'د.ع.\u200f'
    },
    {
      Country: 'Israel',
      CountryCode: 'IL',
      Currency: 'Shekel',
      Code: 'ILS',
      Symbol: '₪'
    },
    {
      Country: 'Jamaica',
      CountryCode: 'JM',
      Currency: 'Jamaican Dollar',
      Code: 'JMD',
      Symbol: '$'
    },
    {
      Country: 'Jordan',
      CountryCode: 'JO',
      Currency: 'Jordanian Dinar',
      Code: 'JOD',
      Symbol: 'د.أ.\u200f'
    },
    {
      Country: 'Kazakhstan',
      CountryCode: 'KZ',
      Currency: 'Tenge',
      Code: 'KZT',
      Symbol: 'тңг.'
    },
    {
      Country: 'Kenya',
      CountryCode: 'KE',
      Currency: 'Kenyan Shilling',
      Code: 'KES',
      Symbol: 'KSh'
    },
    {
      Country: 'Korea North',
      CountryCode: 'KP',
      Currency: 'Won',
      Code: 'KPW',
      Symbol: 'KPW'
    },
    {
      Country: 'Korea South',
      CountryCode: 'KR',
      Currency: 'Won',
      Code: 'KRW',
      Symbol: '₩'
    },
    {
      Country: 'Kuwait',
      CountryCode: 'KW',
      Currency: 'Kuwaiti Dinar',
      Code: 'KWD',
      Symbol: 'د.ك.\u200f'
    },
    {
      Country: 'Kyrgyzstan',
      CountryCode: 'KG',
      Currency: 'Som',
      Code: 'KGS',
      Symbol: 'KGS'
    },
    {
      Country: 'Lao PeopleÕs Democratic Republic',
      CountryCode: 'LA',
      Currency: 'Kip',
      Code: 'LAK',
      Symbol: 'LAK'
    },
    {
      Country: 'Latvia',
      CountryCode: 'LV',
      Currency: 'Lat',
      Code: 'LVL',
      Symbol: 'Ls'
    },
    {
      Country: 'Lebanon',
      CountryCode: 'LB',
      Currency: 'Lebanese Pound',
      Code: 'LBP',
      Symbol: 'ل.ل.\u200f'
    },
    {
      Country: 'Lesotho',
      CountryCode: 'LS',
      Currency: 'Loti',
      Code: 'LSL',
      Symbol: 'LSL'
    },
    {
      Country: 'Liberia',
      CountryCode: 'LR',
      Currency: 'Liberian Dollar',
      Code: 'LRD',
      Symbol: 'LRD'
    },
    {
      Country: 'Libyan Arab Jamahiriya',
      CountryCode: 'LY',
      Currency: 'Libyan Dinar',
      Code: 'LYD',
      Symbol: 'د.ل.\u200f'
    },
    {
      Country: 'Liechtenstein',
      CountryCode: 'LI',
      Currency: 'Swiss Franc',
      Code: 'CHF',
      Symbol: 'CHF'
    },
    {
      Country: 'Switzerland',
      CountryCode: 'CH',
      Currency: 'Swiss Franc',
      Code: 'CHF',
      Symbol: 'CHF'
    },
    {
      Country: 'Lithuania',
      CountryCode: 'LT',
      Currency: 'Lita',
      Code: 'LTL',
      Symbol: 'Lt'
    },
    {
      Country: 'Macau',
      CountryCode: 'MO',
      Currency: 'Pataca',
      Code: 'MOP',
      Symbol: 'MOP$'
    },
    {
      Country: 'Macedonia',
      CountryCode: 'MK',
      Currency: 'Denar',
      Code: 'MKD',
      Symbol: 'ден'
    },
    {
      Country: 'Madagascar',
      CountryCode: 'MG',
      Currency: 'Malagasy Franc',
      Code: 'MGA',
      Symbol: 'Ar'
    },
    {
      Country: 'Malawi',
      CountryCode: 'MW',
      Currency: 'Malawian Kwacha',
      Code: 'MWK',
      Symbol: 'MWK'
    },
    {
      Country: 'Malaysia',
      CountryCode: 'MY',
      Currency: 'Ringgit',
      Code: 'MYR',
      Symbol: 'RM'
    },
    {
      Country: 'Maldives',
      CountryCode: 'MV',
      Currency: 'Rufiyaa',
      Code: 'MVR',
      Symbol: 'MVR'
    },
    {
      Country: 'Malta',
      CountryCode: 'MT',
      Currency: 'Maltese Lira',
      Code: 'MTL',
      Symbol: 'MTL'
    },
    {
      Country: 'Mauritania',
      CountryCode: 'MR',
      Currency: 'Ouguiya',
      Code: 'MRO',
      Symbol: 'MRO'
    },
    {
      Country: 'Mauritius',
      CountryCode: 'MU',
      Currency: 'Mauritian Rupee',
      Code: 'MUR',
      Symbol: 'Rs'
    },
    {
      Country: 'Mexico',
      CountryCode: 'MX',
      Currency: 'Peso',
      Code: 'MXN',
      Symbol: '$'
    },
    {
      Country: 'Moldova Republic of',
      CountryCode: 'MD',
      Currency: 'Leu',
      Code: 'MDL',
      Symbol: 'MDL'
    },
    {
      Country: 'Mongolia',
      CountryCode: 'MN',
      Currency: 'Tugrik',
      Code: 'MNT',
      Symbol: 'MNT'
    },
    {
      Country: 'Morocco',
      CountryCode: 'MA',
      Currency: 'Dirham',
      Code: 'MAD',
      Symbol: 'د.م.\u200f'
    },
    {
      Country: 'Western Sahara',
      CountryCode: 'EH',
      Currency: 'Dirham',
      Code: 'MAD',
      Symbol: 'د.م.\u200f'
    },
    {
      Country: 'Mozambique',
      CountryCode: 'MZ',
      Currency: 'Metical',
      Code: 'MZN',
      Symbol: 'MT'
    },
    {
      Country: 'Myanmar',
      CountryCode: 'MM',
      Currency: 'Kyat',
      Code: 'MMK',
      Symbol: 'K'
    },
    {
      Country: 'Namibia',
      CountryCode: 'NA',
      Currency: 'Dollar',
      Code: 'NAD',
      Symbol: 'N$'
    },
    {
      Country: 'Nepal',
      CountryCode: 'NP',
      Currency: 'Nepalese Rupee',
      Code: 'NPR',
      Symbol: 'नेरू'
    },
    {
      Country: 'Nicaragua',
      CountryCode: 'NI',
      Currency: 'Cordoba Oro',
      Code: 'NIO',
      Symbol: 'C$'
    },
    {
      Country: 'Nigeria',
      CountryCode: 'NG',
      Currency: 'Naira',
      Code: 'NGN',
      Symbol: '₦'
    },
    {
      Country: 'Oman',
      CountryCode: 'OM',
      Currency: 'Sul Rial',
      Code: 'OMR',
      Symbol: 'ر.ع.\u200f'
    },
    {
      Country: 'Pakistan',
      CountryCode: 'PK',
      Currency: 'Rupee',
      Code: 'PKR',
      Symbol: '₨'
    },
    {
      Country: 'Panama',
      CountryCode: 'PA',
      Currency: 'Balboa',
      Code: 'PAB',
      Symbol: 'B/.'
    },
    {
      Country: 'Papua New Guinea',
      CountryCode: 'PG',
      Currency: 'Kina',
      Code: 'PGK',
      Symbol: 'PGK'
    },
    {
      Country: 'Paraguay',
      CountryCode: 'PY',
      Currency: 'Guarani',
      Code: 'PYG',
      Symbol: '₲'
    },
    {
      Country: 'Peru',
      CountryCode: 'PE',
      Currency: 'Nuevo Sol',
      Code: 'PEN',
      Symbol: 'S/.'
    },
    {
      Country: 'Philippines',
      CountryCode: 'PH',
      Currency: 'Peso',
      Code: 'PHP',
      Symbol: '₱'
    },
    {
      Country: 'Poland',
      CountryCode: 'PL',
      Currency: 'Zloty',
      Code: 'PLN',
      Symbol: 'zł'
    },
    {
      Country: 'Qatar',
      CountryCode: 'QA',
      Currency: 'Rial',
      Code: 'QAR',
      Symbol: 'ر.ق.\u200f'
    },
    {
      Country: 'Romania',
      CountryCode: 'RO',
      Currency: 'Leu',
      Code: 'RON',
      Symbol: 'RON'
    },
    {
      Country: 'Russian Federation',
      CountryCode: 'RU',
      Currency: 'Ruble',
      Code: 'RUB',
      Symbol: 'руб.'
    },
    {
      Country: 'Rwanda',
      CountryCode: 'RW',
      Currency: 'Rwanda Franc',
      Code: 'RWF',
      Symbol: 'FR'
    },
    {
      Country: 'Sao Tome and Principe',
      CountryCode: 'ST',
      Currency: 'Dobra',
      Code: 'STD',
      Symbol: 'STD'
    },
    {
      Country: 'Saudi Arabia',
      CountryCode: 'SA',
      Currency: 'Riyal',
      Code: 'SAR',
      Symbol: 'ر.س.\u200f'
    },
    {
      Country: 'Seychelles',
      CountryCode: 'SC',
      Currency: 'Rupee',
      Code: 'SCR',
      Symbol: 'SCR'
    },
    {
      Country: 'Sierra Leone',
      CountryCode: 'SL',
      Currency: 'Leone',
      Code: 'SLL',
      Symbol: 'SLL'
    },
    {
      Country: 'Singapore',
      CountryCode: 'SG',
      Currency: 'Dollar',
      Code: 'SGD',
      Symbol: '$'
    },
    {
      Country: 'Slovakia (Slovak Republic)',
      CountryCode: 'SK',
      Currency: 'Koruna',
      Code: 'SKK',
      Symbol: 'SKK'
    },
    {
      Country: 'Solomon Islands',
      CountryCode: 'SB',
      Currency: 'Solomon Islands Dollar',
      Code: 'SBD',
      Symbol: 'SBD'
    },
    {
      Country: 'Somalia',
      CountryCode: 'SO',
      Currency: 'Shilling',
      Code: 'SOS',
      Symbol: 'Ssh'
    },
    {
      Country: 'South Africa',
      CountryCode: 'ZA',
      Currency: 'Rand',
      Code: 'ZAR',
      Symbol: 'R'
    },
    {
      Country: 'Sri Lanka',
      CountryCode: 'LK',
      Currency: 'Rupee',
      Code: 'LKR',
      Symbol: 'රු'
    },
    {
      Country: 'Sudan',
      CountryCode: 'SD',
      Currency: 'Dinar',
      Code: 'SDG',
      Symbol: 'ج.س'
    },
    {
      Country: 'Suriname',
      CountryCode: 'SR',
      Currency: 'Surinamese Guilder',
      Code: 'SRD',
      Symbol: 'SRD'
    },
    {
      Country: 'Swaziland',
      CountryCode: 'SZ',
      Currency: 'Lilangeni',
      Code: 'SZL',
      Symbol: 'SZL'
    },
    {
      Country: 'Sweden',
      CountryCode: 'SE',
      Currency: 'Krona',
      Code: 'SEK',
      Symbol: 'kr'
    },
    {
      Country: 'Syrian Arab Republic',
      CountryCode: 'SY',
      Currency: 'Syrian Pound',
      Code: 'SYP',
      Symbol: '£S'
    },
    {
      Country: 'Taiwan',
      CountryCode: 'TW',
      Currency: 'Dollar',
      Code: 'TWD',
      Symbol: 'NT$'
    },
    {
      Country: 'Tajikistan',
      CountryCode: 'TJ',
      Currency: 'Tajikistan Ruble',
      Code: 'TJS',
      Symbol: 'TJS'
    },
    {
      Country: 'Tanzania',
      CountryCode: 'TZ',
      Currency: 'Shilling',
      Code: 'TZS',
      Symbol: 'TSh'
    },
    {
      Country: 'Thailand',
      CountryCode: 'TH',
      Currency: 'Baht',
      Code: 'THB',
      Symbol: '฿'
    },
    {
      Country: 'Tonga',
      CountryCode: 'TO',
      Currency: 'PaÕanga',
      Code: 'TOP',
      Symbol: 'T$'
    },
    {
      Country: 'Trinidad and Tobago',
      CountryCode: 'TT',
      Currency: 'Trinidad and Tobago Dollar',
      Code: 'TTD',
      Symbol: '$'
    },
    {
      Country: 'Tunisia',
      CountryCode: 'TN',
      Currency: 'Tunisian Dinar',
      Code: 'TND',
      Symbol: 'د.ت.\u200f'
    },
    {
      Country: 'Turkey',
      CountryCode: 'TR',
      Currency: 'Lira',
      Code: 'TRY',
      Symbol: '₺'
    },
    {
      Country: 'Turkmenistan',
      CountryCode: 'TM',
      Currency: 'Manat',
      Code: 'TMT',
      Symbol: 'TMT'
    },
    {
      Country: 'Uganda',
      CountryCode: 'UG',
      Currency: 'Shilling',
      Code: 'UGX',
      Symbol: 'USh'
    },
    {
      Country: 'Ukraine',
      CountryCode: 'UA',
      Currency: 'Hryvnia',
      Code: 'UAH',
      Symbol: '₴'
    },
    {
      Country: 'United Arab Emirates',
      CountryCode: 'AE',
      Currency: 'Dirham',
      Code: 'AED',
      Symbol: 'د.إ.\u200f'
    },
    {
      Country: 'Uruguay',
      CountryCode: 'UY',
      Currency: 'Peso',
      Code: 'UYU',
      Symbol: '$'
    },
    {
      Country: 'Uzbekistan',
      CountryCode: 'UZ',
      Currency: 'Som',
      Code: 'UZS',
      Symbol: 'UZS'
    },
    {
      Country: 'Vanuatu',
      CountryCode: 'VU',
      Currency: 'Vatu',
      Code: 'VUV',
      Symbol: 'VUV'
    },
    {
      Country: 'Venezuela',
      CountryCode: 'VE',
      Currency: 'Bolivar',
      Code: 'VEF',
      Symbol: 'Bs.F.'
    },
    {
      Country: 'Vietnam',
      CountryCode: 'VN',
      Currency: 'Dong',
      Code: 'VND',
      Symbol: '₫'
    },
    {
      Country: 'Yemen',
      CountryCode: 'YE',
      Currency: 'Rial',
      Code: 'YER',
      Symbol: '﷼'
    },
    {
      Country: 'Zambia',
      CountryCode: 'ZM',
      Currency: 'Kwacha',
      Code: 'ZMK',
      Symbol: 'ZK'
    },
    {
      Country: 'Zimbabwe',
      CountryCode: 'ZW',
      Currency: 'Zimbabwe Dollar',
      Code: 'ZWD',
      Symbol: 'ZWD'
    },
    {
      Country: 'Aland Islands',
      CountryCode: 'AX',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Angola',
      CountryCode: 'AO',
      Currency: 'Angolan kwanza',
      Code: 'AOA',
      Symbol: 'AOA'
    },
    {
      Country: 'Antarctica',
      CountryCode: 'AQ',
      Currency: 'Antarctican dollar',
      Code: 'AQD',
      Symbol: 'AQD'
    },
    {
      Country: 'Bosnia and Herzegovina',
      CountryCode: 'BA',
      Currency: 'Bosnia and Herzegovina convertible mark',
      Code: 'BAM',
      Symbol: 'KM'
    },
    {
      Country: 'Congo (Kinshasa)',
      CountryCode: 'CD',
      Currency: 'Congolese Frank',
      Code: 'CDF',
      Symbol: 'FC'
    },
    {
      Country: 'Ghana',
      CountryCode: 'GH',
      Currency: 'Ghana cedi',
      Code: 'GHS',
      Symbol: 'GH₵'
    },
    {
      Country: 'Guernsey',
      CountryCode: 'GG',
      Currency: 'Guernsey pound',
      Code: 'GGP',
      Symbol: 'GGP'
    },
    {
      Country: 'Isle of Man',
      CountryCode: 'IM',
      Currency: 'Manx pound',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Laos',
      CountryCode: 'LA',
      Currency: 'Lao kip',
      Code: 'LAK',
      Symbol: 'LAK'
    },
    {
      Country: 'Macao S.A.R.',
      CountryCode: 'MO',
      Currency: 'Macanese pataca',
      Code: 'MOP',
      Symbol: 'MOP$'
    },
    {
      Country: 'Montenegro',
      CountryCode: 'ME',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Palestinian Territory',
      CountryCode: 'PS',
      Currency: 'Jordanian dinar',
      Code: 'JOD',
      Symbol: 'د.أ.\u200f'
    },
    {
      Country: 'Saint Barthelemy',
      CountryCode: 'BL',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Saint Helena',
      CountryCode: 'SH',
      Currency: 'Saint Helena pound',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Saint Martin (French part)',
      CountryCode: 'MF',
      Currency: 'Netherlands Antillean guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Saint Pierre and Miquelon',
      CountryCode: 'PM',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Serbia',
      CountryCode: 'RS',
      Currency: 'Serbian dinar',
      Code: 'RSD',
      Symbol: 'дин.'
    },
    {
      Country: 'US Armed Forces',
      CountryCode: 'USAF',
      Currency: 'US Dollar',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'New Zealand',
      CountryCode: 'NZ',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Cook Islands',
      CountryCode: 'CK',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Niue',
      CountryCode: 'NU',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Pitcairn',
      CountryCode: 'PN',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Tokelau',
      CountryCode: 'TK',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Australian',
      CountryCode: 'AU',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Christmas Island',
      CountryCode: 'CX',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Cocos (Keeling) Islands',
      CountryCode: 'CC',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Heard and Mc Donald Islands',
      CountryCode: 'HM',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Kiribati',
      CountryCode: 'KI',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Nauru',
      CountryCode: 'NR',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Norfolk Island',
      CountryCode: 'NF',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Tuvalu',
      CountryCode: 'TV',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'American Samoa',
      CountryCode: 'AS',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Andorra',
      CountryCode: 'AD',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Austria',
      CountryCode: 'AT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Belgium',
      CountryCode: 'BE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Finland',
      CountryCode: 'FI',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'France',
      CountryCode: 'FR',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'French Guiana',
      CountryCode: 'GF',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'French Southern Territories',
      CountryCode: 'TF',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Germany',
      CountryCode: 'DE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Greece',
      CountryCode: 'GR',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Guadeloupe',
      CountryCode: 'GP',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Ireland',
      CountryCode: 'IE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Italy',
      CountryCode: 'IT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Luxembourg',
      CountryCode: 'LU',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Martinique',
      CountryCode: 'MQ',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Mayotte',
      CountryCode: 'YT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Monaco',
      CountryCode: 'MC',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Netherlands',
      CountryCode: 'NL',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Portugal',
      CountryCode: 'PT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Reunion',
      CountryCode: 'RE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Samoa',
      CountryCode: 'WS',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'San Marino',
      CountryCode: 'SM',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Slovenia',
      CountryCode: 'SI',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Spain',
      CountryCode: 'ES',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Vatican City State (Holy See)',
      CountryCode: 'VA',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'South Georgia and the South Sandwich Islands',
      CountryCode: 'GS',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'United Kingdom',
      CountryCode: 'GB',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Jersey',
      CountryCode: 'JE',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'British Indian Ocean Territory',
      CountryCode: 'IO',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Guam',
      CountryCode: 'GU',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Marshall Islands',
      CountryCode: 'MH',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Micronesia Federated States of',
      CountryCode: 'FM',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Northern Mariana Islands',
      CountryCode: 'MP',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Palau',
      CountryCode: 'PW',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Puerto Rico',
      CountryCode: 'PR',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Turks and Caicos Islands',
      CountryCode: 'TC',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'United States',
      CountryCode: 'US',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'United States Minor Outlying Islands',
      CountryCode: 'UM',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Virgin Islands (British)',
      CountryCode: 'VG',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Virgin Islands (US)',
      CountryCode: 'VI',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Hong Kong',
      CountryCode: 'HK',
      Currency: 'HKD',
      Code: 'HKD',
      Symbol: '$'
    },
    {
      Country: 'Canada',
      CountryCode: 'CA',
      Currency: 'Canadian Dollar',
      Code: 'CAD',
      Symbol: '$'
    },
    {
      Country: 'Japan',
      CountryCode: 'JP',
      Currency: 'Japanese Yen',
      Code: 'JPY',
      Symbol: '￥'
    },
    {
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Currency: 'Afghani',
      Code: 'AFN',
      Symbol: '؋'
    },
    {
      Country: 'Albania',
      CountryCode: 'AL',
      Currency: 'Lek',
      Code: 'ALL',
      Symbol: 'Lek'
    },
    {
      Country: 'Algeria',
      CountryCode: 'DZ',
      Currency: 'Algerian Dinar',
      Code: 'DZD',
      Symbol: 'د.ج.\u200f'
    },
    {
      Country: 'Anguilla',
      CountryCode: 'AI',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Antigua and Barbuda',
      CountryCode: 'AG',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Dominica',
      CountryCode: 'DM',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Grenada',
      CountryCode: 'GD',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Montserrat',
      CountryCode: 'MS',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Kitts',
      CountryCode: 'KN',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Lucia',
      CountryCode: 'LC',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Vincent Grenadines',
      CountryCode: 'VC',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Argentina',
      CountryCode: 'AR',
      Currency: 'Peso',
      Code: 'ARS',
      Symbol: '$'
    },
    {
      Country: 'Armenia',
      CountryCode: 'AM',
      Currency: 'Dram',
      Code: 'AMD',
      Symbol: '֏'
    },
    {
      Country: 'Aruba',
      CountryCode: 'AW',
      Currency: 'Netherlands Antilles Guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Netherlands Antilles',
      CountryCode: 'AN',
      Currency: 'Netherlands Antilles Guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Azerbaijan',
      CountryCode: 'AZ',
      Currency: 'Manat',
      Code: 'AZN',
      Symbol: '₼'
    },
    {
      Country: 'Bahamas',
      CountryCode: 'BS',
      Currency: 'Bahamian Dollar',
      Code: 'BSD',
      Symbol: 'BSD'
    },
    {
      Country: 'Bahrain',
      CountryCode: 'BH',
      Currency: 'Bahraini Dinar',
      Code: 'BHD',
      Symbol: 'د.ب.\u200f'
    },
    {
      Country: 'Bangladesh',
      CountryCode: 'BD',
      Currency: 'Taka',
      Code: 'BDT',
      Symbol: '৳'
    },
    {
      Country: 'Barbados',
      CountryCode: 'BB',
      Currency: 'Barbadian Dollar',
      Code: 'BBD',
      Symbol: 'BBD'
    },
    {
      Country: 'Belarus',
      CountryCode: 'BY',
      Currency: 'Belarus Ruble',
      Code: 'BYR',
      Symbol: 'BYR'
    },
    {
      Country: 'Belize',
      CountryCode: 'BZ',
      Currency: 'Belizean Dollar',
      Code: 'BZD',
      Symbol: '$'
    },
    {
      Country: 'Benin',
      CountryCode: 'BJ',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Burkina Faso',
      CountryCode: 'BF',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Guinea-Bissau',
      CountryCode: 'GW',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Ivory Coast',
      CountryCode: 'CI',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Mali',
      CountryCode: 'ML',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Niger',
      CountryCode: 'NE',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Senegal',
      CountryCode: 'SN',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Togo',
      CountryCode: 'TG',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Bermuda',
      CountryCode: 'BM',
      Currency: 'Bermudian Dollar',
      Code: 'BMD',
      Symbol: 'BMD'
    },
    {
      Country: 'Bhutan',
      CountryCode: 'BT',
      Currency: 'Indian Rupee',
      Code: 'INR',
      Symbol: '₹'
    },
    {
      Country: 'India',
      CountryCode: 'IN',
      Currency: 'Indian Rupee',
      Code: 'INR',
      Symbol: '₹'
    },
    {
      Country: 'Bolivia',
      CountryCode: 'BO',
      Currency: 'Boliviano',
      Code: 'BOB',
      Symbol: 'Bs.'
    },
    {
      Country: 'Botswana',
      CountryCode: 'BW',
      Currency: 'Pula',
      Code: 'BWP',
      Symbol: 'P'
    },
    {
      Country: 'Bouvet Island',
      CountryCode: 'BV',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Norway',
      CountryCode: 'NO',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Svalbard and Jan Mayen Islands',
      CountryCode: 'SJ',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Brazil',
      CountryCode: 'BR',
      Currency: 'Brazil',
      Code: 'BRL',
      Symbol: 'R$'
    },
    {
      Country: 'Brunei Darussalam',
      CountryCode: 'BN',
      Currency: 'Bruneian Dollar',
      Code: 'BND',
      Symbol: '$'
    },
    {
      Country: 'Bulgaria',
      CountryCode: 'BG',
      Currency: 'Lev',
      Code: 'BGN',
      Symbol: 'лв.'
    },
    {
      Country: 'Burundi',
      CountryCode: 'BI',
      Currency: 'Burundi Franc',
      Code: 'BIF',
      Symbol: 'FBu'
    },
    {
      Country: 'Cambodia',
      CountryCode: 'KH',
      Currency: 'Riel',
      Code: 'KHR',
      Symbol: '៛'
    },
    {
      Country: 'Cameroon',
      CountryCode: 'CM',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Central African Republic',
      CountryCode: 'CF',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Chad',
      CountryCode: 'TD',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Congo Republic of the Democratic',
      CountryCode: 'CG',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Equatorial Guinea',
      CountryCode: 'GQ',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Gabon',
      CountryCode: 'GA',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Cape Verde',
      CountryCode: 'CV',
      Currency: 'Escudo',
      Code: 'CVE',
      Symbol: 'CVE'
    },
    {
      Country: 'Cayman Islands',
      CountryCode: 'KY',
      Currency: 'Caymanian Dollar',
      Code: 'KYD',
      Symbol: 'KYD'
    },
    {
      Country: 'Chile',
      CountryCode: 'CL',
      Currency: 'Chilean Peso',
      Code: 'CLP',
      Symbol: '$'
    },
    {
      Country: 'China',
      CountryCode: 'CN',
      Currency: 'Yuan Renminbi',
      Code: 'CNY',
      Symbol: '元'
    },
    {
      Country: 'Colombia',
      CountryCode: 'CO',
      Currency: 'Peso',
      Code: 'COP',
      Symbol: '$'
    },
    {
      Country: 'Comoros',
      CountryCode: 'KM',
      Currency: 'Comoran Franc',
      Code: 'KMF',
      Symbol: 'FC'
    },
    {
      Country: 'Congo-Brazzaville',
      CountryCode: 'CD',
      Currency: 'Congolese Frank',
      Code: 'CDF',
      Symbol: 'FC'
    },
    {
      Country: 'Costa Rica',
      CountryCode: 'CR',
      Currency: 'Costa Rican Colon',
      Code: 'CRC',
      Symbol: '₡'
    },
    {
      Country: 'Croatia (Hrvatska)',
      CountryCode: 'HR',
      Currency: 'Croatian Dinar',
      Code: 'HRK',
      Symbol: 'kn'
    },
    {
      Country: 'Cuba',
      CountryCode: 'CU',
      Currency: 'Cuban Peso',
      Code: 'CUP',
      Symbol: 'CUP'
    },
    {
      Country: 'Cyprus',
      CountryCode: 'CY',
      Currency: 'Cypriot Pound',
      Code: 'CYP',
      Symbol: 'CYP'
    },
    {
      Country: 'Czech Republic',
      CountryCode: 'CZ',
      Currency: 'Koruna',
      Code: 'CZK',
      Symbol: 'Kč'
    },
    {
      Country: 'Denmark',
      CountryCode: 'DK',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Faroe Islands',
      CountryCode: 'FO',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Greenland',
      CountryCode: 'GL',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Djibouti',
      CountryCode: 'DJ',
      Currency: 'Djiboutian Franc',
      Code: 'DJF',
      Symbol: 'Fdj'
    },
    {
      Country: 'Dominican Republic',
      CountryCode: 'DO',
      Currency: 'Dominican Peso',
      Code: 'DOP',
      Symbol: 'RD$'
    },
    {
      Country: 'East Timor',
      CountryCode: 'TP',
      Currency: 'Indonesian Rupiah',
      Code: 'IDR',
      Symbol: 'Rp'
    },
    {
      Country: 'Indonesia',
      CountryCode: 'ID',
      Currency: 'Indonesian Rupiah',
      Code: 'IDR',
      Symbol: 'Rp'
    },
    {
      Country: 'Ecuador',
      CountryCode: 'EC',
      Currency: 'Sucre',
      Code: 'ECS',
      Symbol: 'ECS'
    },
    {
      Country: 'Egypt',
      CountryCode: 'EG',
      Currency: 'Egyptian Pound',
      Code: 'EGP',
      Symbol: 'ج.م.\u200f'
    },
    {
      Country: 'El Salvador',
      CountryCode: 'SV',
      Currency: 'Salvadoran Colon',
      Code: 'SVC',
      Symbol: 'SVC'
    },
    {
      Country: 'Eritrea',
      CountryCode: 'ER',
      Currency: 'Ethiopian Birr',
      Code: 'ETB',
      Symbol: 'Br'
    },
    {
      Country: 'Ethiopia',
      CountryCode: 'ET',
      Currency: 'Ethiopian Birr',
      Code: 'ETB',
      Symbol: 'Br'
    },
    {
      Country: 'Estonia',
      CountryCode: 'EE',
      Currency: 'Estonian Kroon',
      Code: 'EEK',
      Symbol: 'kr'
    },
    {
      Country: 'Falkland Islands (Malvinas)',
      CountryCode: 'FK',
      Currency: 'Falkland Pound',
      Code: 'FKP',
      Symbol: 'FKP'
    },
    {
      Country: 'Fiji',
      CountryCode: 'FJ',
      Currency: 'Fijian Dollar',
      Code: 'FJD',
      Symbol: 'FJD'
    },
    {
      Country: 'French Polynesia',
      CountryCode: 'PF',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'New Caledonia',
      CountryCode: 'NC',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'Wallis and Futuna Islands',
      CountryCode: 'WF',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'Gambia',
      CountryCode: 'GM',
      Currency: 'Dalasi',
      Code: 'GMD',
      Symbol: 'GMD'
    },
    {
      Country: 'Georgia',
      CountryCode: 'GE',
      Currency: 'Lari',
      Code: 'GEL',
      Symbol: '₾'
    },
    {
      Country: 'Gibraltar',
      CountryCode: 'GI',
      Currency: 'Gibraltar Pound',
      Code: 'GIP',
      Symbol: 'GIP'
    },
    {
      Country: 'Guatemala',
      CountryCode: 'GT',
      Currency: 'Quetzal',
      Code: 'GTQ',
      Symbol: 'Q'
    },
    {
      Country: 'Guinea',
      CountryCode: 'GN',
      Currency: 'Guinean Franc',
      Code: 'GNF',
      Symbol: 'FG'
    },
    {
      Country: 'Guyana',
      CountryCode: 'GY',
      Currency: 'Guyanaese Dollar',
      Code: 'GYD',
      Symbol: 'GYD'
    },
    {
      Country: 'Haiti',
      CountryCode: 'HT',
      Currency: 'Gourde',
      Code: 'HTG',
      Symbol: 'HTG'
    },
    {
      Country: 'Honduras',
      CountryCode: 'HN',
      Currency: 'Lempira',
      Code: 'HNL',
      Symbol: 'L'
    },
    {
      Country: 'Hungary',
      CountryCode: 'HU',
      Currency: 'Forint',
      Code: 'HUF',
      Symbol: 'Ft'
    },
    {
      Country: 'Iceland',
      CountryCode: 'IS',
      Currency: 'Icelandic Krona',
      Code: 'ISK',
      Symbol: 'kr'
    },
    {
      Country: 'Iran (Islamic Republic of)',
      CountryCode: 'IR',
      Currency: 'Iranian Rial',
      Code: 'IRR',
      Symbol: '﷼'
    },
    {
      Country: 'Iraq',
      CountryCode: 'IQ',
      Currency: 'Iraqi Dinar',
      Code: 'IQD',
      Symbol: 'د.ع.\u200f'
    },
    {
      Country: 'Israel',
      CountryCode: 'IL',
      Currency: 'Shekel',
      Code: 'ILS',
      Symbol: '₪'
    },
    {
      Country: 'Jamaica',
      CountryCode: 'JM',
      Currency: 'Jamaican Dollar',
      Code: 'JMD',
      Symbol: '$'
    },
    {
      Country: 'Jordan',
      CountryCode: 'JO',
      Currency: 'Jordanian Dinar',
      Code: 'JOD',
      Symbol: 'د.أ.\u200f'
    },
    {
      Country: 'Kazakhstan',
      CountryCode: 'KZ',
      Currency: 'Tenge',
      Code: 'KZT',
      Symbol: 'тңг.'
    },
    {
      Country: 'Kenya',
      CountryCode: 'KE',
      Currency: 'Kenyan Shilling',
      Code: 'KES',
      Symbol: 'KSh'
    },
    {
      Country: 'Korea North',
      CountryCode: 'KP',
      Currency: 'Won',
      Code: 'KPW',
      Symbol: 'KPW'
    },
    {
      Country: 'Korea South',
      CountryCode: 'KR',
      Currency: 'Won',
      Code: 'KRW',
      Symbol: '₩'
    },
    {
      Country: 'Kuwait',
      CountryCode: 'KW',
      Currency: 'Kuwaiti Dinar',
      Code: 'KWD',
      Symbol: 'د.ك.\u200f'
    },
    {
      Country: 'Kyrgyzstan',
      CountryCode: 'KG',
      Currency: 'Som',
      Code: 'KGS',
      Symbol: 'KGS'
    },
    {
      Country: 'Lao PeopleÕs Democratic Republic',
      CountryCode: 'LA',
      Currency: 'Kip',
      Code: 'LAK',
      Symbol: 'LAK'
    },
    {
      Country: 'Latvia',
      CountryCode: 'LV',
      Currency: 'Lat',
      Code: 'LVL',
      Symbol: 'Ls'
    },
    {
      Country: 'Lebanon',
      CountryCode: 'LB',
      Currency: 'Lebanese Pound',
      Code: 'LBP',
      Symbol: 'ل.ل.\u200f'
    },
    {
      Country: 'Lesotho',
      CountryCode: 'LS',
      Currency: 'Loti',
      Code: 'LSL',
      Symbol: 'LSL'
    },
    {
      Country: 'Liberia',
      CountryCode: 'LR',
      Currency: 'Liberian Dollar',
      Code: 'LRD',
      Symbol: 'LRD'
    },
    {
      Country: 'Libyan Arab Jamahiriya',
      CountryCode: 'LY',
      Currency: 'Libyan Dinar',
      Code: 'LYD',
      Symbol: 'د.ل.\u200f'
    },
    {
      Country: 'Liechtenstein',
      CountryCode: 'LI',
      Currency: 'Swiss Franc',
      Code: 'CHF',
      Symbol: 'CHF'
    },
    {
      Country: 'Switzerland',
      CountryCode: 'CH',
      Currency: 'Swiss Franc',
      Code: 'CHF',
      Symbol: 'CHF'
    },
    {
      Country: 'Lithuania',
      CountryCode: 'LT',
      Currency: 'Lita',
      Code: 'LTL',
      Symbol: 'Lt'
    },
    {
      Country: 'Macau',
      CountryCode: 'MO',
      Currency: 'Pataca',
      Code: 'MOP',
      Symbol: 'MOP$'
    },
    {
      Country: 'Macedonia',
      CountryCode: 'MK',
      Currency: 'Denar',
      Code: 'MKD',
      Symbol: 'ден'
    },
    {
      Country: 'Madagascar',
      CountryCode: 'MG',
      Currency: 'Malagasy Franc',
      Code: 'MGA',
      Symbol: 'Ar'
    },
    {
      Country: 'Malawi',
      CountryCode: 'MW',
      Currency: 'Malawian Kwacha',
      Code: 'MWK',
      Symbol: 'MWK'
    },
    {
      Country: 'Malaysia',
      CountryCode: 'MY',
      Currency: 'Ringgit',
      Code: 'MYR',
      Symbol: 'RM'
    },
    {
      Country: 'Maldives',
      CountryCode: 'MV',
      Currency: 'Rufiyaa',
      Code: 'MVR',
      Symbol: 'MVR'
    },
    {
      Country: 'Malta',
      CountryCode: 'MT',
      Currency: 'Maltese Lira',
      Code: 'MTL',
      Symbol: 'MTL'
    },
    {
      Country: 'Mauritania',
      CountryCode: 'MR',
      Currency: 'Ouguiya',
      Code: 'MRO',
      Symbol: 'MRO'
    },
    {
      Country: 'Mauritius',
      CountryCode: 'MU',
      Currency: 'Mauritian Rupee',
      Code: 'MUR',
      Symbol: 'Rs'
    },
    {
      Country: 'Mexico',
      CountryCode: 'MX',
      Currency: 'Peso',
      Code: 'MXN',
      Symbol: '$'
    },
    {
      Country: 'Moldova Republic of',
      CountryCode: 'MD',
      Currency: 'Leu',
      Code: 'MDL',
      Symbol: 'MDL'
    },
    {
      Country: 'Mongolia',
      CountryCode: 'MN',
      Currency: 'Tugrik',
      Code: 'MNT',
      Symbol: 'MNT'
    },
    {
      Country: 'Morocco',
      CountryCode: 'MA',
      Currency: 'Dirham',
      Code: 'MAD',
      Symbol: 'د.م.\u200f'
    },
    {
      Country: 'Western Sahara',
      CountryCode: 'EH',
      Currency: 'Dirham',
      Code: 'MAD',
      Symbol: 'د.م.\u200f'
    },
    {
      Country: 'Mozambique',
      CountryCode: 'MZ',
      Currency: 'Metical',
      Code: 'MZN',
      Symbol: 'MT'
    },
    {
      Country: 'Myanmar',
      CountryCode: 'MM',
      Currency: 'Kyat',
      Code: 'MMK',
      Symbol: 'K'
    },
    {
      Country: 'Namibia',
      CountryCode: 'NA',
      Currency: 'Dollar',
      Code: 'NAD',
      Symbol: 'N$'
    },
    {
      Country: 'Nepal',
      CountryCode: 'NP',
      Currency: 'Nepalese Rupee',
      Code: 'NPR',
      Symbol: 'नेरू'
    },
    {
      Country: 'Nicaragua',
      CountryCode: 'NI',
      Currency: 'Cordoba Oro',
      Code: 'NIO',
      Symbol: 'C$'
    },
    {
      Country: 'Nigeria',
      CountryCode: 'NG',
      Currency: 'Naira',
      Code: 'NGN',
      Symbol: '₦'
    },
    {
      Country: 'Oman',
      CountryCode: 'OM',
      Currency: 'Sul Rial',
      Code: 'OMR',
      Symbol: 'ر.ع.\u200f'
    },
    {
      Country: 'Pakistan',
      CountryCode: 'PK',
      Currency: 'Rupee',
      Code: 'PKR',
      Symbol: '₨'
    },
    {
      Country: 'Panama',
      CountryCode: 'PA',
      Currency: 'Balboa',
      Code: 'PAB',
      Symbol: 'B/.'
    },
    {
      Country: 'Papua New Guinea',
      CountryCode: 'PG',
      Currency: 'Kina',
      Code: 'PGK',
      Symbol: 'PGK'
    },
    {
      Country: 'Paraguay',
      CountryCode: 'PY',
      Currency: 'Guarani',
      Code: 'PYG',
      Symbol: '₲'
    },
    {
      Country: 'Peru',
      CountryCode: 'PE',
      Currency: 'Nuevo Sol',
      Code: 'PEN',
      Symbol: 'S/.'
    },
    {
      Country: 'Philippines',
      CountryCode: 'PH',
      Currency: 'Peso',
      Code: 'PHP',
      Symbol: '₱'
    },
    {
      Country: 'Poland',
      CountryCode: 'PL',
      Currency: 'Zloty',
      Code: 'PLN',
      Symbol: 'zł'
    },
    {
      Country: 'Qatar',
      CountryCode: 'QA',
      Currency: 'Rial',
      Code: 'QAR',
      Symbol: 'ر.ق.\u200f'
    },
    {
      Country: 'Romania',
      CountryCode: 'RO',
      Currency: 'Leu',
      Code: 'RON',
      Symbol: 'RON'
    },
    {
      Country: 'Russian Federation',
      CountryCode: 'RU',
      Currency: 'Ruble',
      Code: 'RUB',
      Symbol: 'руб.'
    },
    {
      Country: 'Rwanda',
      CountryCode: 'RW',
      Currency: 'Rwanda Franc',
      Code: 'RWF',
      Symbol: 'FR'
    },
    {
      Country: 'Sao Tome and Principe',
      CountryCode: 'ST',
      Currency: 'Dobra',
      Code: 'STD',
      Symbol: 'STD'
    },
    {
      Country: 'Saudi Arabia',
      CountryCode: 'SA',
      Currency: 'Riyal',
      Code: 'SAR',
      Symbol: 'ر.س.\u200f'
    },
    {
      Country: 'Seychelles',
      CountryCode: 'SC',
      Currency: 'Rupee',
      Code: 'SCR',
      Symbol: 'SCR'
    },
    {
      Country: 'Sierra Leone',
      CountryCode: 'SL',
      Currency: 'Leone',
      Code: 'SLL',
      Symbol: 'SLL'
    },
    {
      Country: 'Singapore',
      CountryCode: 'SG',
      Currency: 'Dollar',
      Code: 'SGD',
      Symbol: '$'
    },
    {
      Country: 'Slovakia (Slovak Republic)',
      CountryCode: 'SK',
      Currency: 'Koruna',
      Code: 'SKK',
      Symbol: 'SKK'
    },
    {
      Country: 'Solomon Islands',
      CountryCode: 'SB',
      Currency: 'Solomon Islands Dollar',
      Code: 'SBD',
      Symbol: 'SBD'
    },
    {
      Country: 'Somalia',
      CountryCode: 'SO',
      Currency: 'Shilling',
      Code: 'SOS',
      Symbol: 'Ssh'
    },
    {
      Country: 'South Africa',
      CountryCode: 'ZA',
      Currency: 'Rand',
      Code: 'ZAR',
      Symbol: 'R'
    },
    {
      Country: 'Sri Lanka',
      CountryCode: 'LK',
      Currency: 'Rupee',
      Code: 'LKR',
      Symbol: 'රු'
    },
    {
      Country: 'Sudan',
      CountryCode: 'SD',
      Currency: 'Dinar',
      Code: 'SDG',
      Symbol: 'ج.س'
    },
    {
      Country: 'Suriname',
      CountryCode: 'SR',
      Currency: 'Surinamese Guilder',
      Code: 'SRD',
      Symbol: 'SRD'
    },
    {
      Country: 'Swaziland',
      CountryCode: 'SZ',
      Currency: 'Lilangeni',
      Code: 'SZL',
      Symbol: 'SZL'
    },
    {
      Country: 'Sweden',
      CountryCode: 'SE',
      Currency: 'Krona',
      Code: 'SEK',
      Symbol: 'kr'
    },
    {
      Country: 'Syrian Arab Republic',
      CountryCode: 'SY',
      Currency: 'Syrian Pound',
      Code: 'SYP',
      Symbol: '£S'
    },
    {
      Country: 'Taiwan',
      CountryCode: 'TW',
      Currency: 'Dollar',
      Code: 'TWD',
      Symbol: 'NT$'
    },
    {
      Country: 'Tajikistan',
      CountryCode: 'TJ',
      Currency: 'Tajikistan Ruble',
      Code: 'TJS',
      Symbol: 'TJS'
    },
    {
      Country: 'Tanzania',
      CountryCode: 'TZ',
      Currency: 'Shilling',
      Code: 'TZS',
      Symbol: 'TSh'
    },
    {
      Country: 'Thailand',
      CountryCode: 'TH',
      Currency: 'Baht',
      Code: 'THB',
      Symbol: '฿'
    },
    {
      Country: 'Tonga',
      CountryCode: 'TO',
      Currency: 'PaÕanga',
      Code: 'TOP',
      Symbol: 'T$'
    },
    {
      Country: 'Trinidad and Tobago',
      CountryCode: 'TT',
      Currency: 'Trinidad and Tobago Dollar',
      Code: 'TTD',
      Symbol: '$'
    },
    {
      Country: 'Tunisia',
      CountryCode: 'TN',
      Currency: 'Tunisian Dinar',
      Code: 'TND',
      Symbol: 'د.ت.\u200f'
    },
    {
      Country: 'Turkey',
      CountryCode: 'TR',
      Currency: 'Lira',
      Code: 'TRY',
      Symbol: '₺'
    },
    {
      Country: 'Turkmenistan',
      CountryCode: 'TM',
      Currency: 'Manat',
      Code: 'TMT',
      Symbol: 'TMT'
    },
    {
      Country: 'Uganda',
      CountryCode: 'UG',
      Currency: 'Shilling',
      Code: 'UGX',
      Symbol: 'USh'
    },
    {
      Country: 'Ukraine',
      CountryCode: 'UA',
      Currency: 'Hryvnia',
      Code: 'UAH',
      Symbol: '₴'
    },
    {
      Country: 'United Arab Emirates',
      CountryCode: 'AE',
      Currency: 'Dirham',
      Code: 'AED',
      Symbol: 'د.إ.\u200f'
    },
    {
      Country: 'Uruguay',
      CountryCode: 'UY',
      Currency: 'Peso',
      Code: 'UYU',
      Symbol: '$'
    },
    {
      Country: 'Uzbekistan',
      CountryCode: 'UZ',
      Currency: 'Som',
      Code: 'UZS',
      Symbol: 'UZS'
    },
    {
      Country: 'Vanuatu',
      CountryCode: 'VU',
      Currency: 'Vatu',
      Code: 'VUV',
      Symbol: 'VUV'
    },
    {
      Country: 'Venezuela',
      CountryCode: 'VE',
      Currency: 'Bolivar',
      Code: 'VEF',
      Symbol: 'Bs.F.'
    },
    {
      Country: 'Vietnam',
      CountryCode: 'VN',
      Currency: 'Dong',
      Code: 'VND',
      Symbol: '₫'
    },
    {
      Country: 'Yemen',
      CountryCode: 'YE',
      Currency: 'Rial',
      Code: 'YER',
      Symbol: '﷼'
    },
    {
      Country: 'Zambia',
      CountryCode: 'ZM',
      Currency: 'Kwacha',
      Code: 'ZMK',
      Symbol: 'ZK'
    },
    {
      Country: 'Zimbabwe',
      CountryCode: 'ZW',
      Currency: 'Zimbabwe Dollar',
      Code: 'ZWD',
      Symbol: 'ZWD'
    },
    {
      Country: 'Aland Islands',
      CountryCode: 'AX',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Angola',
      CountryCode: 'AO',
      Currency: 'Angolan kwanza',
      Code: 'AOA',
      Symbol: 'AOA'
    },
    {
      Country: 'Antarctica',
      CountryCode: 'AQ',
      Currency: 'Antarctican dollar',
      Code: 'AQD',
      Symbol: 'AQD'
    },
    {
      Country: 'Bosnia and Herzegovina',
      CountryCode: 'BA',
      Currency: 'Bosnia and Herzegovina convertible mark',
      Code: 'BAM',
      Symbol: 'KM'
    },
    {
      Country: 'Congo (Kinshasa)',
      CountryCode: 'CD',
      Currency: 'Congolese Frank',
      Code: 'CDF',
      Symbol: 'FC'
    },
    {
      Country: 'Ghana',
      CountryCode: 'GH',
      Currency: 'Ghana cedi',
      Code: 'GHS',
      Symbol: 'GH₵'
    },
    {
      Country: 'Guernsey',
      CountryCode: 'GG',
      Currency: 'Guernsey pound',
      Code: 'GGP',
      Symbol: 'GGP'
    },
    {
      Country: 'Isle of Man',
      CountryCode: 'IM',
      Currency: 'Manx pound',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Laos',
      CountryCode: 'LA',
      Currency: 'Lao kip',
      Code: 'LAK',
      Symbol: 'LAK'
    },
    {
      Country: 'Macao S.A.R.',
      CountryCode: 'MO',
      Currency: 'Macanese pataca',
      Code: 'MOP',
      Symbol: 'MOP$'
    },
    {
      Country: 'Montenegro',
      CountryCode: 'ME',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Palestinian Territory',
      CountryCode: 'PS',
      Currency: 'Jordanian dinar',
      Code: 'JOD',
      Symbol: 'د.أ.\u200f'
    },
    {
      Country: 'Saint Barthelemy',
      CountryCode: 'BL',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Saint Helena',
      CountryCode: 'SH',
      Currency: 'Saint Helena pound',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Saint Martin (French part)',
      CountryCode: 'MF',
      Currency: 'Netherlands Antillean guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Saint Pierre and Miquelon',
      CountryCode: 'PM',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Serbia',
      CountryCode: 'RS',
      Currency: 'Serbian dinar',
      Code: 'RSD',
      Symbol: 'дин.'
    },
    {
      Country: 'US Armed Forces',
      CountryCode: 'USAF',
      Currency: 'US Dollar',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'New Zealand',
      CountryCode: 'NZ',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Cook Islands',
      CountryCode: 'CK',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Niue',
      CountryCode: 'NU',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Pitcairn',
      CountryCode: 'PN',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Tokelau',
      CountryCode: 'TK',
      Currency: 'New Zealand Dollars',
      Code: 'NZD',
      Symbol: '$'
    },
    {
      Country: 'Australian',
      CountryCode: 'AU',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Christmas Island',
      CountryCode: 'CX',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Cocos (Keeling) Islands',
      CountryCode: 'CC',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Heard and Mc Donald Islands',
      CountryCode: 'HM',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Kiribati',
      CountryCode: 'KI',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Nauru',
      CountryCode: 'NR',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Norfolk Island',
      CountryCode: 'NF',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'Tuvalu',
      CountryCode: 'TV',
      Currency: 'Australian Dollars',
      Code: 'AUD',
      Symbol: '$'
    },
    {
      Country: 'American Samoa',
      CountryCode: 'AS',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Andorra',
      CountryCode: 'AD',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Austria',
      CountryCode: 'AT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Belgium',
      CountryCode: 'BE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Finland',
      CountryCode: 'FI',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'France',
      CountryCode: 'FR',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'French Guiana',
      CountryCode: 'GF',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'French Southern Territories',
      CountryCode: 'TF',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Germany',
      CountryCode: 'DE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Greece',
      CountryCode: 'GR',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Guadeloupe',
      CountryCode: 'GP',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Ireland',
      CountryCode: 'IE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Italy',
      CountryCode: 'IT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Luxembourg',
      CountryCode: 'LU',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Martinique',
      CountryCode: 'MQ',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Mayotte',
      CountryCode: 'YT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Monaco',
      CountryCode: 'MC',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Netherlands',
      CountryCode: 'NL',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Portugal',
      CountryCode: 'PT',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Reunion',
      CountryCode: 'RE',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Samoa',
      CountryCode: 'WS',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'San Marino',
      CountryCode: 'SM',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Slovenia',
      CountryCode: 'SI',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Spain',
      CountryCode: 'ES',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Vatican City State (Holy See)',
      CountryCode: 'VA',
      Currency: 'Euros',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'South Georgia and the South Sandwich Islands',
      CountryCode: 'GS',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'United Kingdom',
      CountryCode: 'GB',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Jersey',
      CountryCode: 'JE',
      Currency: 'Sterling',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'British Indian Ocean Territory',
      CountryCode: 'IO',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Guam',
      CountryCode: 'GU',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Marshall Islands',
      CountryCode: 'MH',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Micronesia Federated States of',
      CountryCode: 'FM',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Northern Mariana Islands',
      CountryCode: 'MP',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Palau',
      CountryCode: 'PW',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Puerto Rico',
      CountryCode: 'PR',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Turks and Caicos Islands',
      CountryCode: 'TC',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'United States',
      CountryCode: 'US',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'United States Minor Outlying Islands',
      CountryCode: 'UM',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Virgin Islands (British)',
      CountryCode: 'VG',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Virgin Islands (US)',
      CountryCode: 'VI',
      Currency: 'USD',
      Code: 'USD',
      Symbol: '$'
    },
    {
      Country: 'Hong Kong',
      CountryCode: 'HK',
      Currency: 'HKD',
      Code: 'HKD',
      Symbol: '$'
    },
    {
      Country: 'Canada',
      CountryCode: 'CA',
      Currency: 'Canadian Dollar',
      Code: 'CAD',
      Symbol: '$'
    },
    {
      Country: 'Japan',
      CountryCode: 'JP',
      Currency: 'Japanese Yen',
      Code: 'JPY',
      Symbol: '￥'
    },
    {
      Country: 'Afghanistan',
      CountryCode: 'AF',
      Currency: 'Afghani',
      Code: 'AFN',
      Symbol: '؋'
    },
    {
      Country: 'Albania',
      CountryCode: 'AL',
      Currency: 'Lek',
      Code: 'ALL',
      Symbol: 'Lek'
    },
    {
      Country: 'Algeria',
      CountryCode: 'DZ',
      Currency: 'Algerian Dinar',
      Code: 'DZD',
      Symbol: 'د.ج.\u200f'
    },
    {
      Country: 'Anguilla',
      CountryCode: 'AI',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Antigua and Barbuda',
      CountryCode: 'AG',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Dominica',
      CountryCode: 'DM',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Grenada',
      CountryCode: 'GD',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Montserrat',
      CountryCode: 'MS',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Kitts',
      CountryCode: 'KN',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Lucia',
      CountryCode: 'LC',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Saint Vincent Grenadines',
      CountryCode: 'VC',
      Currency: 'East Caribbean Dollar',
      Code: 'XCD',
      Symbol: 'XCD'
    },
    {
      Country: 'Argentina',
      CountryCode: 'AR',
      Currency: 'Peso',
      Code: 'ARS',
      Symbol: '$'
    },
    {
      Country: 'Armenia',
      CountryCode: 'AM',
      Currency: 'Dram',
      Code: 'AMD',
      Symbol: '֏'
    },
    {
      Country: 'Aruba',
      CountryCode: 'AW',
      Currency: 'Netherlands Antilles Guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Netherlands Antilles',
      CountryCode: 'AN',
      Currency: 'Netherlands Antilles Guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Azerbaijan',
      CountryCode: 'AZ',
      Currency: 'Manat',
      Code: 'AZN',
      Symbol: '₼'
    },
    {
      Country: 'Bahamas',
      CountryCode: 'BS',
      Currency: 'Bahamian Dollar',
      Code: 'BSD',
      Symbol: 'BSD'
    },
    {
      Country: 'Bahrain',
      CountryCode: 'BH',
      Currency: 'Bahraini Dinar',
      Code: 'BHD',
      Symbol: 'د.ب.\u200f'
    },
    {
      Country: 'Bangladesh',
      CountryCode: 'BD',
      Currency: 'Taka',
      Code: 'BDT',
      Symbol: '৳'
    },
    {
      Country: 'Barbados',
      CountryCode: 'BB',
      Currency: 'Barbadian Dollar',
      Code: 'BBD',
      Symbol: 'BBD'
    },
    {
      Country: 'Belarus',
      CountryCode: 'BY',
      Currency: 'Belarus Ruble',
      Code: 'BYR',
      Symbol: 'BYR'
    },
    {
      Country: 'Belize',
      CountryCode: 'BZ',
      Currency: 'Belizean Dollar',
      Code: 'BZD',
      Symbol: '$'
    },
    {
      Country: 'Benin',
      CountryCode: 'BJ',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Burkina Faso',
      CountryCode: 'BF',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Guinea-Bissau',
      CountryCode: 'GW',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Ivory Coast',
      CountryCode: 'CI',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Mali',
      CountryCode: 'ML',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Niger',
      CountryCode: 'NE',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Senegal',
      CountryCode: 'SN',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Togo',
      CountryCode: 'TG',
      Currency: 'CFA Franc BCEAO',
      Code: 'XOF',
      Symbol: 'CFA'
    },
    {
      Country: 'Bermuda',
      CountryCode: 'BM',
      Currency: 'Bermudian Dollar',
      Code: 'BMD',
      Symbol: 'BMD'
    },
    {
      Country: 'Bhutan',
      CountryCode: 'BT',
      Currency: 'Indian Rupee',
      Code: 'INR',
      Symbol: '₹'
    },
    {
      Country: 'India',
      CountryCode: 'IN',
      Currency: 'Indian Rupee',
      Code: 'INR',
      Symbol: '₹'
    },
    {
      Country: 'Bolivia',
      CountryCode: 'BO',
      Currency: 'Boliviano',
      Code: 'BOB',
      Symbol: 'Bs.'
    },
    {
      Country: 'Botswana',
      CountryCode: 'BW',
      Currency: 'Pula',
      Code: 'BWP',
      Symbol: 'P'
    },
    {
      Country: 'Bouvet Island',
      CountryCode: 'BV',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Norway',
      CountryCode: 'NO',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Svalbard and Jan Mayen Islands',
      CountryCode: 'SJ',
      Currency: 'Norwegian Krone',
      Code: 'NOK',
      Symbol: 'kr'
    },
    {
      Country: 'Brazil',
      CountryCode: 'BR',
      Currency: 'Brazil',
      Code: 'BRL',
      Symbol: 'R$'
    },
    {
      Country: 'Brunei Darussalam',
      CountryCode: 'BN',
      Currency: 'Bruneian Dollar',
      Code: 'BND',
      Symbol: '$'
    },
    {
      Country: 'Bulgaria',
      CountryCode: 'BG',
      Currency: 'Lev',
      Code: 'BGN',
      Symbol: 'лв.'
    },
    {
      Country: 'Burundi',
      CountryCode: 'BI',
      Currency: 'Burundi Franc',
      Code: 'BIF',
      Symbol: 'FBu'
    },
    {
      Country: 'Cambodia',
      CountryCode: 'KH',
      Currency: 'Riel',
      Code: 'KHR',
      Symbol: '៛'
    },
    {
      Country: 'Cameroon',
      CountryCode: 'CM',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Central African Republic',
      CountryCode: 'CF',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Chad',
      CountryCode: 'TD',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Congo Republic of the Democratic',
      CountryCode: 'CG',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Equatorial Guinea',
      CountryCode: 'GQ',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Gabon',
      CountryCode: 'GA',
      Currency: 'CFA Franc BEAC',
      Code: 'XAF',
      Symbol: 'CFA'
    },
    {
      Country: 'Cape Verde',
      CountryCode: 'CV',
      Currency: 'Escudo',
      Code: 'CVE',
      Symbol: 'CVE'
    },
    {
      Country: 'Cayman Islands',
      CountryCode: 'KY',
      Currency: 'Caymanian Dollar',
      Code: 'KYD',
      Symbol: 'KYD'
    },
    {
      Country: 'Chile',
      CountryCode: 'CL',
      Currency: 'Chilean Peso',
      Code: 'CLP',
      Symbol: '$'
    },
    {
      Country: 'China',
      CountryCode: 'CN',
      Currency: 'Yuan Renminbi',
      Code: 'CNY',
      Symbol: '元'
    },
    {
      Country: 'Colombia',
      CountryCode: 'CO',
      Currency: 'Peso',
      Code: 'COP',
      Symbol: '$'
    },
    {
      Country: 'Comoros',
      CountryCode: 'KM',
      Currency: 'Comoran Franc',
      Code: 'KMF',
      Symbol: 'FC'
    },
    {
      Country: 'Congo-Brazzaville',
      CountryCode: 'CD',
      Currency: 'Congolese Frank',
      Code: 'CDF',
      Symbol: 'FC'
    },
    {
      Country: 'Costa Rica',
      CountryCode: 'CR',
      Currency: 'Costa Rican Colon',
      Code: 'CRC',
      Symbol: '₡'
    },
    {
      Country: 'Croatia (Hrvatska)',
      CountryCode: 'HR',
      Currency: 'Croatian Dinar',
      Code: 'HRK',
      Symbol: 'kn'
    },
    {
      Country: 'Cuba',
      CountryCode: 'CU',
      Currency: 'Cuban Peso',
      Code: 'CUP',
      Symbol: 'CUP'
    },
    {
      Country: 'Cyprus',
      CountryCode: 'CY',
      Currency: 'Cypriot Pound',
      Code: 'CYP',
      Symbol: 'CYP'
    },
    {
      Country: 'Czech Republic',
      CountryCode: 'CZ',
      Currency: 'Koruna',
      Code: 'CZK',
      Symbol: 'Kč'
    },
    {
      Country: 'Denmark',
      CountryCode: 'DK',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Faroe Islands',
      CountryCode: 'FO',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Greenland',
      CountryCode: 'GL',
      Currency: 'Danish Krone',
      Code: 'DKK',
      Symbol: 'kr'
    },
    {
      Country: 'Djibouti',
      CountryCode: 'DJ',
      Currency: 'Djiboutian Franc',
      Code: 'DJF',
      Symbol: 'Fdj'
    },
    {
      Country: 'Dominican Republic',
      CountryCode: 'DO',
      Currency: 'Dominican Peso',
      Code: 'DOP',
      Symbol: 'RD$'
    },
    {
      Country: 'East Timor',
      CountryCode: 'TP',
      Currency: 'Indonesian Rupiah',
      Code: 'IDR',
      Symbol: 'Rp'
    },
    {
      Country: 'Indonesia',
      CountryCode: 'ID',
      Currency: 'Indonesian Rupiah',
      Code: 'IDR',
      Symbol: 'Rp'
    },
    {
      Country: 'Ecuador',
      CountryCode: 'EC',
      Currency: 'Sucre',
      Code: 'ECS',
      Symbol: 'ECS'
    },
    {
      Country: 'Egypt',
      CountryCode: 'EG',
      Currency: 'Egyptian Pound',
      Code: 'EGP',
      Symbol: 'ج.م.\u200f'
    },
    {
      Country: 'El Salvador',
      CountryCode: 'SV',
      Currency: 'Salvadoran Colon',
      Code: 'SVC',
      Symbol: 'SVC'
    },
    {
      Country: 'Eritrea',
      CountryCode: 'ER',
      Currency: 'Ethiopian Birr',
      Code: 'ETB',
      Symbol: 'Br'
    },
    {
      Country: 'Ethiopia',
      CountryCode: 'ET',
      Currency: 'Ethiopian Birr',
      Code: 'ETB',
      Symbol: 'Br'
    },
    {
      Country: 'Estonia',
      CountryCode: 'EE',
      Currency: 'Estonian Kroon',
      Code: 'EEK',
      Symbol: 'kr'
    },
    {
      Country: 'Falkland Islands (Malvinas)',
      CountryCode: 'FK',
      Currency: 'Falkland Pound',
      Code: 'FKP',
      Symbol: 'FKP'
    },
    {
      Country: 'Fiji',
      CountryCode: 'FJ',
      Currency: 'Fijian Dollar',
      Code: 'FJD',
      Symbol: 'FJD'
    },
    {
      Country: 'French Polynesia',
      CountryCode: 'PF',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'New Caledonia',
      CountryCode: 'NC',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'Wallis and Futuna Islands',
      CountryCode: 'WF',
      Currency: 'CFP Franc',
      Code: 'XPF',
      Symbol: 'XPF'
    },
    {
      Country: 'Gambia',
      CountryCode: 'GM',
      Currency: 'Dalasi',
      Code: 'GMD',
      Symbol: 'GMD'
    },
    {
      Country: 'Georgia',
      CountryCode: 'GE',
      Currency: 'Lari',
      Code: 'GEL',
      Symbol: '₾'
    },
    {
      Country: 'Gibraltar',
      CountryCode: 'GI',
      Currency: 'Gibraltar Pound',
      Code: 'GIP',
      Symbol: 'GIP'
    },
    {
      Country: 'Guatemala',
      CountryCode: 'GT',
      Currency: 'Quetzal',
      Code: 'GTQ',
      Symbol: 'Q'
    },
    {
      Country: 'Guinea',
      CountryCode: 'GN',
      Currency: 'Guinean Franc',
      Code: 'GNF',
      Symbol: 'FG'
    },
    {
      Country: 'Guyana',
      CountryCode: 'GY',
      Currency: 'Guyanaese Dollar',
      Code: 'GYD',
      Symbol: 'GYD'
    },
    {
      Country: 'Haiti',
      CountryCode: 'HT',
      Currency: 'Gourde',
      Code: 'HTG',
      Symbol: 'HTG'
    },
    {
      Country: 'Honduras',
      CountryCode: 'HN',
      Currency: 'Lempira',
      Code: 'HNL',
      Symbol: 'L'
    },
    {
      Country: 'Hungary',
      CountryCode: 'HU',
      Currency: 'Forint',
      Code: 'HUF',
      Symbol: 'Ft'
    },
    {
      Country: 'Iceland',
      CountryCode: 'IS',
      Currency: 'Icelandic Krona',
      Code: 'ISK',
      Symbol: 'kr'
    },
    {
      Country: 'Iran (Islamic Republic of)',
      CountryCode: 'IR',
      Currency: 'Iranian Rial',
      Code: 'IRR',
      Symbol: '﷼'
    },
    {
      Country: 'Iraq',
      CountryCode: 'IQ',
      Currency: 'Iraqi Dinar',
      Code: 'IQD',
      Symbol: 'د.ع.\u200f'
    },
    {
      Country: 'Israel',
      CountryCode: 'IL',
      Currency: 'Shekel',
      Code: 'ILS',
      Symbol: '₪'
    },
    {
      Country: 'Jamaica',
      CountryCode: 'JM',
      Currency: 'Jamaican Dollar',
      Code: 'JMD',
      Symbol: '$'
    },
    {
      Country: 'Jordan',
      CountryCode: 'JO',
      Currency: 'Jordanian Dinar',
      Code: 'JOD',
      Symbol: 'د.أ.\u200f'
    },
    {
      Country: 'Kazakhstan',
      CountryCode: 'KZ',
      Currency: 'Tenge',
      Code: 'KZT',
      Symbol: 'тңг.'
    },
    {
      Country: 'Kenya',
      CountryCode: 'KE',
      Currency: 'Kenyan Shilling',
      Code: 'KES',
      Symbol: 'KSh'
    },
    {
      Country: 'Korea North',
      CountryCode: 'KP',
      Currency: 'Won',
      Code: 'KPW',
      Symbol: 'KPW'
    },
    {
      Country: 'Korea South',
      CountryCode: 'KR',
      Currency: 'Won',
      Code: 'KRW',
      Symbol: '₩'
    },
    {
      Country: 'Kuwait',
      CountryCode: 'KW',
      Currency: 'Kuwaiti Dinar',
      Code: 'KWD',
      Symbol: 'د.ك.\u200f'
    },
    {
      Country: 'Kyrgyzstan',
      CountryCode: 'KG',
      Currency: 'Som',
      Code: 'KGS',
      Symbol: 'KGS'
    },
    {
      Country: 'Lao PeopleÕs Democratic Republic',
      CountryCode: 'LA',
      Currency: 'Kip',
      Code: 'LAK',
      Symbol: 'LAK'
    },
    {
      Country: 'Latvia',
      CountryCode: 'LV',
      Currency: 'Lat',
      Code: 'LVL',
      Symbol: 'Ls'
    },
    {
      Country: 'Lebanon',
      CountryCode: 'LB',
      Currency: 'Lebanese Pound',
      Code: 'LBP',
      Symbol: 'ل.ل.\u200f'
    },
    {
      Country: 'Lesotho',
      CountryCode: 'LS',
      Currency: 'Loti',
      Code: 'LSL',
      Symbol: 'LSL'
    },
    {
      Country: 'Liberia',
      CountryCode: 'LR',
      Currency: 'Liberian Dollar',
      Code: 'LRD',
      Symbol: 'LRD'
    },
    {
      Country: 'Libyan Arab Jamahiriya',
      CountryCode: 'LY',
      Currency: 'Libyan Dinar',
      Code: 'LYD',
      Symbol: 'د.ل.\u200f'
    },
    {
      Country: 'Liechtenstein',
      CountryCode: 'LI',
      Currency: 'Swiss Franc',
      Code: 'CHF',
      Symbol: 'CHF'
    },
    {
      Country: 'Switzerland',
      CountryCode: 'CH',
      Currency: 'Swiss Franc',
      Code: 'CHF',
      Symbol: 'CHF'
    },
    {
      Country: 'Lithuania',
      CountryCode: 'LT',
      Currency: 'Lita',
      Code: 'LTL',
      Symbol: 'Lt'
    },
    {
      Country: 'Macau',
      CountryCode: 'MO',
      Currency: 'Pataca',
      Code: 'MOP',
      Symbol: 'MOP$'
    },
    {
      Country: 'Macedonia',
      CountryCode: 'MK',
      Currency: 'Denar',
      Code: 'MKD',
      Symbol: 'ден'
    },
    {
      Country: 'Madagascar',
      CountryCode: 'MG',
      Currency: 'Malagasy Franc',
      Code: 'MGA',
      Symbol: 'Ar'
    },
    {
      Country: 'Malawi',
      CountryCode: 'MW',
      Currency: 'Malawian Kwacha',
      Code: 'MWK',
      Symbol: 'MWK'
    },
    {
      Country: 'Malaysia',
      CountryCode: 'MY',
      Currency: 'Ringgit',
      Code: 'MYR',
      Symbol: 'RM'
    },
    {
      Country: 'Maldives',
      CountryCode: 'MV',
      Currency: 'Rufiyaa',
      Code: 'MVR',
      Symbol: 'MVR'
    },
    {
      Country: 'Malta',
      CountryCode: 'MT',
      Currency: 'Maltese Lira',
      Code: 'MTL',
      Symbol: 'MTL'
    },
    {
      Country: 'Mauritania',
      CountryCode: 'MR',
      Currency: 'Ouguiya',
      Code: 'MRO',
      Symbol: 'MRO'
    },
    {
      Country: 'Mauritius',
      CountryCode: 'MU',
      Currency: 'Mauritian Rupee',
      Code: 'MUR',
      Symbol: 'Rs'
    },
    {
      Country: 'Mexico',
      CountryCode: 'MX',
      Currency: 'Peso',
      Code: 'MXN',
      Symbol: '$'
    },
    {
      Country: 'Moldova Republic of',
      CountryCode: 'MD',
      Currency: 'Leu',
      Code: 'MDL',
      Symbol: 'MDL'
    },
    {
      Country: 'Mongolia',
      CountryCode: 'MN',
      Currency: 'Tugrik',
      Code: 'MNT',
      Symbol: 'MNT'
    },
    {
      Country: 'Morocco',
      CountryCode: 'MA',
      Currency: 'Dirham',
      Code: 'MAD',
      Symbol: 'د.م.\u200f'
    },
    {
      Country: 'Western Sahara',
      CountryCode: 'EH',
      Currency: 'Dirham',
      Code: 'MAD',
      Symbol: 'د.م.\u200f'
    },
    {
      Country: 'Mozambique',
      CountryCode: 'MZ',
      Currency: 'Metical',
      Code: 'MZN',
      Symbol: 'MT'
    },
    {
      Country: 'Myanmar',
      CountryCode: 'MM',
      Currency: 'Kyat',
      Code: 'MMK',
      Symbol: 'K'
    },
    {
      Country: 'Namibia',
      CountryCode: 'NA',
      Currency: 'Dollar',
      Code: 'NAD',
      Symbol: 'N$'
    },
    {
      Country: 'Nepal',
      CountryCode: 'NP',
      Currency: 'Nepalese Rupee',
      Code: 'NPR',
      Symbol: 'नेरू'
    },
    {
      Country: 'Nicaragua',
      CountryCode: 'NI',
      Currency: 'Cordoba Oro',
      Code: 'NIO',
      Symbol: 'C$'
    },
    {
      Country: 'Nigeria',
      CountryCode: 'NG',
      Currency: 'Naira',
      Code: 'NGN',
      Symbol: '₦'
    },
    {
      Country: 'Oman',
      CountryCode: 'OM',
      Currency: 'Sul Rial',
      Code: 'OMR',
      Symbol: 'ر.ع.\u200f'
    },
    {
      Country: 'Pakistan',
      CountryCode: 'PK',
      Currency: 'Rupee',
      Code: 'PKR',
      Symbol: '₨'
    },
    {
      Country: 'Panama',
      CountryCode: 'PA',
      Currency: 'Balboa',
      Code: 'PAB',
      Symbol: 'B/.'
    },
    {
      Country: 'Papua New Guinea',
      CountryCode: 'PG',
      Currency: 'Kina',
      Code: 'PGK',
      Symbol: 'PGK'
    },
    {
      Country: 'Paraguay',
      CountryCode: 'PY',
      Currency: 'Guarani',
      Code: 'PYG',
      Symbol: '₲'
    },
    {
      Country: 'Peru',
      CountryCode: 'PE',
      Currency: 'Nuevo Sol',
      Code: 'PEN',
      Symbol: 'S/.'
    },
    {
      Country: 'Philippines',
      CountryCode: 'PH',
      Currency: 'Peso',
      Code: 'PHP',
      Symbol: '₱'
    },
    {
      Country: 'Poland',
      CountryCode: 'PL',
      Currency: 'Zloty',
      Code: 'PLN',
      Symbol: 'zł'
    },
    {
      Country: 'Qatar',
      CountryCode: 'QA',
      Currency: 'Rial',
      Code: 'QAR',
      Symbol: 'ر.ق.\u200f'
    },
    {
      Country: 'Romania',
      CountryCode: 'RO',
      Currency: 'Leu',
      Code: 'RON',
      Symbol: 'RON'
    },
    {
      Country: 'Russian Federation',
      CountryCode: 'RU',
      Currency: 'Ruble',
      Code: 'RUB',
      Symbol: 'руб.'
    },
    {
      Country: 'Rwanda',
      CountryCode: 'RW',
      Currency: 'Rwanda Franc',
      Code: 'RWF',
      Symbol: 'FR'
    },
    {
      Country: 'Sao Tome and Principe',
      CountryCode: 'ST',
      Currency: 'Dobra',
      Code: 'STD',
      Symbol: 'STD'
    },
    {
      Country: 'Saudi Arabia',
      CountryCode: 'SA',
      Currency: 'Riyal',
      Code: 'SAR',
      Symbol: 'ر.س.\u200f'
    },
    {
      Country: 'Seychelles',
      CountryCode: 'SC',
      Currency: 'Rupee',
      Code: 'SCR',
      Symbol: 'SCR'
    },
    {
      Country: 'Sierra Leone',
      CountryCode: 'SL',
      Currency: 'Leone',
      Code: 'SLL',
      Symbol: 'SLL'
    },
    {
      Country: 'Singapore',
      CountryCode: 'SG',
      Currency: 'Dollar',
      Code: 'SGD',
      Symbol: '$'
    },
    {
      Country: 'Slovakia (Slovak Republic)',
      CountryCode: 'SK',
      Currency: 'Koruna',
      Code: 'SKK',
      Symbol: 'SKK'
    },
    {
      Country: 'Solomon Islands',
      CountryCode: 'SB',
      Currency: 'Solomon Islands Dollar',
      Code: 'SBD',
      Symbol: 'SBD'
    },
    {
      Country: 'Somalia',
      CountryCode: 'SO',
      Currency: 'Shilling',
      Code: 'SOS',
      Symbol: 'Ssh'
    },
    {
      Country: 'South Africa',
      CountryCode: 'ZA',
      Currency: 'Rand',
      Code: 'ZAR',
      Symbol: 'R'
    },
    {
      Country: 'Sri Lanka',
      CountryCode: 'LK',
      Currency: 'Rupee',
      Code: 'LKR',
      Symbol: 'රු'
    },
    {
      Country: 'Sudan',
      CountryCode: 'SD',
      Currency: 'Dinar',
      Code: 'SDG',
      Symbol: 'ج.س'
    },
    {
      Country: 'Suriname',
      CountryCode: 'SR',
      Currency: 'Surinamese Guilder',
      Code: 'SRD',
      Symbol: 'SRD'
    },
    {
      Country: 'Swaziland',
      CountryCode: 'SZ',
      Currency: 'Lilangeni',
      Code: 'SZL',
      Symbol: 'SZL'
    },
    {
      Country: 'Sweden',
      CountryCode: 'SE',
      Currency: 'Krona',
      Code: 'SEK',
      Symbol: 'kr'
    },
    {
      Country: 'Syrian Arab Republic',
      CountryCode: 'SY',
      Currency: 'Syrian Pound',
      Code: 'SYP',
      Symbol: '£S'
    },
    {
      Country: 'Taiwan',
      CountryCode: 'TW',
      Currency: 'Dollar',
      Code: 'TWD',
      Symbol: 'NT$'
    },
    {
      Country: 'Tajikistan',
      CountryCode: 'TJ',
      Currency: 'Tajikistan Ruble',
      Code: 'TJS',
      Symbol: 'TJS'
    },
    {
      Country: 'Tanzania',
      CountryCode: 'TZ',
      Currency: 'Shilling',
      Code: 'TZS',
      Symbol: 'TSh'
    },
    {
      Country: 'Thailand',
      CountryCode: 'TH',
      Currency: 'Baht',
      Code: 'THB',
      Symbol: '฿'
    },
    {
      Country: 'Tonga',
      CountryCode: 'TO',
      Currency: 'PaÕanga',
      Code: 'TOP',
      Symbol: 'T$'
    },
    {
      Country: 'Trinidad and Tobago',
      CountryCode: 'TT',
      Currency: 'Trinidad and Tobago Dollar',
      Code: 'TTD',
      Symbol: '$'
    },
    {
      Country: 'Tunisia',
      CountryCode: 'TN',
      Currency: 'Tunisian Dinar',
      Code: 'TND',
      Symbol: 'د.ت.\u200f'
    },
    {
      Country: 'Turkey',
      CountryCode: 'TR',
      Currency: 'Lira',
      Code: 'TRY',
      Symbol: '₺'
    },
    {
      Country: 'Turkmenistan',
      CountryCode: 'TM',
      Currency: 'Manat',
      Code: 'TMT',
      Symbol: 'TMT'
    },
    {
      Country: 'Uganda',
      CountryCode: 'UG',
      Currency: 'Shilling',
      Code: 'UGX',
      Symbol: 'USh'
    },
    {
      Country: 'Ukraine',
      CountryCode: 'UA',
      Currency: 'Hryvnia',
      Code: 'UAH',
      Symbol: '₴'
    },
    {
      Country: 'United Arab Emirates',
      CountryCode: 'AE',
      Currency: 'Dirham',
      Code: 'AED',
      Symbol: 'د.إ.\u200f'
    },
    {
      Country: 'Uruguay',
      CountryCode: 'UY',
      Currency: 'Peso',
      Code: 'UYU',
      Symbol: '$'
    },
    {
      Country: 'Uzbekistan',
      CountryCode: 'UZ',
      Currency: 'Som',
      Code: 'UZS',
      Symbol: 'UZS'
    },
    {
      Country: 'Vanuatu',
      CountryCode: 'VU',
      Currency: 'Vatu',
      Code: 'VUV',
      Symbol: 'VUV'
    },
    {
      Country: 'Venezuela',
      CountryCode: 'VE',
      Currency: 'Bolivar',
      Code: 'VEF',
      Symbol: 'Bs.F.'
    },
    {
      Country: 'Vietnam',
      CountryCode: 'VN',
      Currency: 'Dong',
      Code: 'VND',
      Symbol: '₫'
    },
    {
      Country: 'Yemen',
      CountryCode: 'YE',
      Currency: 'Rial',
      Code: 'YER',
      Symbol: '﷼'
    },
    {
      Country: 'Zambia',
      CountryCode: 'ZM',
      Currency: 'Kwacha',
      Code: 'ZMK',
      Symbol: 'ZK'
    },
    {
      Country: 'Zimbabwe',
      CountryCode: 'ZW',
      Currency: 'Zimbabwe Dollar',
      Code: 'ZWD',
      Symbol: 'ZWD'
    },
    {
      Country: 'Aland Islands',
      CountryCode: 'AX',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Angola',
      CountryCode: 'AO',
      Currency: 'Angolan kwanza',
      Code: 'AOA',
      Symbol: 'AOA'
    },
    {
      Country: 'Antarctica',
      CountryCode: 'AQ',
      Currency: 'Antarctican dollar',
      Code: 'AQD',
      Symbol: 'AQD'
    },
    {
      Country: 'Bosnia and Herzegovina',
      CountryCode: 'BA',
      Currency: 'Bosnia and Herzegovina convertible mark',
      Code: 'BAM',
      Symbol: 'KM'
    },
    {
      Country: 'Congo (Kinshasa)',
      CountryCode: 'CD',
      Currency: 'Congolese Frank',
      Code: 'CDF',
      Symbol: 'FC'
    },
    {
      Country: 'Ghana',
      CountryCode: 'GH',
      Currency: 'Ghana cedi',
      Code: 'GHS',
      Symbol: 'GH₵'
    },
    {
      Country: 'Guernsey',
      CountryCode: 'GG',
      Currency: 'Guernsey pound',
      Code: 'GGP',
      Symbol: 'GGP'
    },
    {
      Country: 'Isle of Man',
      CountryCode: 'IM',
      Currency: 'Manx pound',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Laos',
      CountryCode: 'LA',
      Currency: 'Lao kip',
      Code: 'LAK',
      Symbol: 'LAK'
    },
    {
      Country: 'Macao S.A.R.',
      CountryCode: 'MO',
      Currency: 'Macanese pataca',
      Code: 'MOP',
      Symbol: 'MOP$'
    },
    {
      Country: 'Montenegro',
      CountryCode: 'ME',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Palestinian Territory',
      CountryCode: 'PS',
      Currency: 'Jordanian dinar',
      Code: 'JOD',
      Symbol: 'د.أ.\u200f'
    },
    {
      Country: 'Saint Barthelemy',
      CountryCode: 'BL',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Saint Helena',
      CountryCode: 'SH',
      Currency: 'Saint Helena pound',
      Code: 'GBP',
      Symbol: '£'
    },
    {
      Country: 'Saint Martin (French part)',
      CountryCode: 'MF',
      Currency: 'Netherlands Antillean guilder',
      Code: 'ANG',
      Symbol: 'ANG'
    },
    {
      Country: 'Saint Pierre and Miquelon',
      CountryCode: 'PM',
      Currency: 'Euro',
      Code: 'EUR',
      Symbol: '€'
    },
    {
      Country: 'Serbia',
      CountryCode: 'RS',
      Currency: 'Serbian dinar',
      Code: 'RSD',
      Symbol: 'дин.'
    },
    {
      Country: 'US Armed Forces',
      CountryCode: 'USAF',
      Currency: 'US Dollar',
      Code: 'USD',
      Symbol: '$'
    }
  ];

  var currSymbol;
  currencySymbols.forEach(function(item) {
    if (currencyCode == item.Code) {
      currSymbol = item.Symbol;
    }
  });

  return currSymbol;
};
