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
        @click="Borrow"
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
  import {apiBuildsGet} from "@/APIs/Buildings";
  import {apiRoomsPost} from "@/APIs/Room";
  import Swal from "sweetalert2";
  
  export default {
    nmae:'Borrow',
    
    data: () => ({ 
      selected_times: [],
      items_times: ['08:00~09:00', '09:00~10:00','10:00~11:00','11:00~12:00','12:00~13:00','13:00~14:00', '14:00~15:00','15:00~16:00','16:00~17:00','17:00~18:00'],
      selected_builds: null,
      items_builds: [],
      selected_rooms: [],
      items_rooms: [],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      build_room_List:[],
     
      
    }),
    mounted() {
      this.initialize();
    },

    watch:{
      //選擇建築讀取對應的教室資料
      selected_builds(val){
        if(val != null){
          console.log("watch",val)
          const buildIndex = this.items_builds.findIndex(element => element === val)
          this.items_rooms = []
          this.build_room_List[buildIndex].forEach(element => this.items_rooms.push(element));
        //console.log("watch",this.items_rooms)
        }
        
      }
    },

    methods:{
      initialize(){
        //初始化 建築 與 教室 資料
        apiBuildsGet()
        .then((res) => {
          //console.log(res.data)
          for(let i = 0;i<res.data.length;i++){
            let temp = [];
            this.items_builds.push(res.data[i].buildingName)
            for(let j = 0;j<res.data[i].rooms.length;j++){
              temp.push(res.data[i].rooms[j])
            }
            this.build_room_List.push(temp)
          }
          //console.log(this.build_room_List)
        })
        .catch()

      },

      Borrow(){
        let temp = {
          building:this.selected_builds,
          room:this.selected_rooms,
          date:this.date,
          time:this.selected_times
        }
        if(temp.building != null && temp.room != [] && temp.date != null && temp.time != []){
          apiRoomsPost(temp)
          .then((res) => {
            console.log('RoomsPost data',res)
          
            Swal.fire({
              icon: 'success',
              title: 'SUCCESS !!',
              text: "Borrow Success !",
            })
            this.selected_builds = null
            this.selected_rooms = []
            this.date = null
            this.selected_times =[]   
          })
          .catch(() => {
            Swal.fire({
              icon: 'error',
              title: 'ERROR !!',
              text: "Borrow Fail !",
            })
          })
        }
        else{
          Swal.fire({
            icon: 'error',
            title: 'ERROR !!',
            text: "Borrow Fail !",
          })

          this.selected_builds = null
          this.selected_rooms = []
          this.date = null
          this.selected_times =[]
        }
        
        
      },

      
    },
    
  }
</script>