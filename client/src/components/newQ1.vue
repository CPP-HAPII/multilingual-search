<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap align-center>
      <v-flex xs12 d-flex>
        <v-subheader>Demographic Questionnaire</v-subheader>
      </v-flex>
    </v-layout>
    <v-layout row align-left>
      <v-flex xs6 d-flex>
        <ol>
          <li>
            <p>What is your first language?</p>
            <v-radio-group v-model="radio1" :mandatory="true">
            <v-radio label="English" value="radio-1"></v-radio>
            <v-radio label="Spanish" value="radio-2"></v-radio>
            <v-radio label="I consider both my first language" value="radio-3"></v-radio>
            </v-radio-group>
          </li>
          <li>
            <p>What is your proficiency in English, on a scale from 1 (elementary proficiency) to 5 (native or bilingual proficiency)?</p>
            <v-radio-group v-model="radio2" :mandatory="true">
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
            <v-radio label="4" value="4"></v-radio>
            <v-radio label="5" value="5"></v-radio>
            </v-radio-group>
          </li>
          <li>
            <p v-if="$store.state.language"> What is your proficiency in Chinese?</p>
            <p v-else>What is your proficiency in Spanish</p>
            <!-- <p> {{$store.state.language}}</p> -->
            <v-radio-group v-model="radio3" :mandatory="true">
            <v-radio label="1" value="1"></v-radio>
            <v-radio label="2" value="2"></v-radio>
            <v-radio label="3" value="3"></v-radio>
            <v-radio label="4" value="4"></v-radio>
            <v-radio label="5" value="5"></v-radio>
            </v-radio-group>
          </li>
          <li>
            <p>What is your country of origin?</p>
            <v-select
              :items="countries"
              label='Select Country'
              ></v-select>
          </li>
          <li>
            <p>What is your age?</p>
            <v-text-field
              label="Enter Age"
              placeholder=""
              v-model="age"
            ></v-text-field>
          </li>
          <li>
            <p>How many years of experience with web search engines (e.g. Google, Bing, Yahoo, Baidu) do you have?</p>
            <v-text-field
              label="Enter years of experience"
              placeholder=""
              v-model="experience"
            ></v-text-field>
          </li>
        </ol>
      </v-flex>
    </v-layout>
    <v-layout row align-left>
      <v-flex xs4 d-flex>
        <v-btn v-on:click="Continue">Next</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QueryService from '@/services/QueryService'
import Question from '@/components/Question.vue'
export default {
  data () {
    return {
      radio1: null,
      radio2: null,
      radio3: null,
      questions: [],
      age: null,
      experience: null,
      countries: ['United States', 'Afhganistan', 'Aland Islands',
        'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola',
        'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina',
        'Armenia', 'Aruba', 'Australia', 'Azerbaijan', 'Bahamas',
        'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
        'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia',
        'Bonaire', 'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island',
        'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam',
        'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon',
        'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic',
        'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Kneeling) Islands',
        'Colombia', 'Comoros', 'Congo', 'Congo, the Democratic Republic of the',
        'Cook Islands', 'Costa Rica', 'Côte d\'Ivoire', 'Croatia', 'Cuba',
        'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark', 'Dijibouti',
        'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
        'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia',
        'Falkland Islands (Malvinas)', 'Faoroe Islands', 'Fiji', 'Finland',
        'France', 'French Guiana', 'French Polynesia', 'French Souther Territories',
        'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gilbraltar',
        'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatamala',
        'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guayana', 'Haiti',
        'Heard Island and McDonald Islands', 'Holy See', 'Honduras',
        'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia',
        'Iran, Islamic Republic of', 'Iraq', 'Ireland', 'Isle of Man', 'Isreal',
        'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya',
        'Kiribati', 'Korea, Democratic People\'s Republic of', 'Korea, Republic of',
        'Kuwait', 'Kyrgysztan', 'Lao People\'s Democratic Republic', 'Latvia',
        'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
        'Luxembourg', 'Macao', 'Macedonia, the former Yugoslav Republic of',
        'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta',
        'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte',
        'Mexico', 'Micronesia, Federated States of', 'Moldova, Republic of',
        'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique',
        'Myamar', 'Namibia', 'Naura', 'Nepal', 'Netherlands', 'New Caledonia',
        'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Nive', 'Norfold Island',
        'Nothern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau',
        'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Phillipines',
        'Pitcairn', 'Polan', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion',
        'Romania', 'Russian Federation', 'Rwanda', 'Saint Barthélemy',
        'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis',
        'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon',
        'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
        'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone',
        'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands',
        'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands',
        'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen',
        'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan',
        'Tajikistan', 'Tanzania, United Republic of', 'Thailand', 'Timor-Lester',
        'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
        'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine',
        'United Arab Emirates', 'United Kingdom', 'United States Minor Outlying Islands',
        'Uruguay', 'Uzbekistan', 'Vanautu', 'Venezuela, Bolivarian Republic of',
        'Viet Nam', 'Virgin Islands, British', 'Virgin Islands, U.S.',
        'Wallis  and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbawe'],
      range: {
        start: 1,
        end: 5
      }
    }
  },
  async mounted () {
    this.questions = (await QueryService.questions(this.range)).data
    console.log(this.questions)
  },
  components: {
    Question
  },
  methods: {
    Continue: function () {
      this.$router.push('/query/1')
    }
  }
}
</script>

<style scoped>
  .p{
      align-content:"left"
  }
</style>
