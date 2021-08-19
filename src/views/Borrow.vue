<template>
  <div class="borrow pa-6">
    <v-img
  
      max-height="200"
      max-width="1600"
      src="https://picsum.photos/1920/1080?random"
    ></v-img>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
                
          <v-autocomplete
            v-model="selected_builds"
            :items=items_builds
            prepend-icon="mdi-domain"
            chips
            label="Building"
            full-width
            hide-details
            hide-no-data
            hide-selected
            
            single-line
          ></v-autocomplete>

        </v-col>
  
        <v-col
          cols="12"
          sm="6"
        >
          <v-autocomplete
            v-model="selected_rooms"
            :items=items_rooms
            prepend-icon="mdi-google-classroom"
            chips
            label="Rooms"
            full-width
            hide-details
            hide-no-data
            hide-selected
            multiple
            single-line
          ></v-autocomplete>
        </v-col>
         
        <v-col
          cols="12"
          sm="12"
        >
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Picker in menu"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>

            <v-date-picker
              v-model="date"
              no-title
              scrollable
            >

              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="menu = false"
              >
                Cancel
              </v-btn>

              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>

      </v-row>

     <v-autocomplete
        v-model="selected_times"
        :items=items_times
        prepend-icon="mdi-clock-time-eight"
        chips
        label="Time"
        full-width
        hide-details
        hide-no-data
        hide-selected
        multiple
        single-line
      >

      </v-autocomplete>
          
      <v-col
        cols="12"
        sm="12"
        align="center"
        justify="space-around"
      >
      <v-btn
        tile
        color="primary"
      >
      <v-icon left>
        mdi-pencil
        </v-icon>
          Submit
        </v-btn>
      </v-col>

    </v-container>
      
  </div>
</template>

<script>
  
  export default {
    nmae:'Borrow',
    data: () => ({ 
      selected_times: [],
      items_times: ['08:00~09:00', '09:00~10:00','10:00~11:00','11:00~12:00'],
      selected_builds: [],
      items_builds: ['中正樓','莊敬樓'],
      selected_rooms: [],
      items_rooms: ['201','203'],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      
    }),
    
  }
</script>