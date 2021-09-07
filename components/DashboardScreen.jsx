import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
  hr: {
    borderColor: 'lightgray',
    borderWidth: 1,
    width: '80%',
    marginLeft: '10%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    padding: 5,
    margin: 10,
    // backgroundColor: 'white'
  },
  circleContainer: {
    flexDirection: 'row',
  },
  openCircle: {
    marginRight: 15,
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#6699ff'
  },
  filledCircle: {
    marginRight: 15,
    height: 15,
    width: 15,
    borderRadius: 100,
    backgroundColor: '#6699ff'
  },
  medication: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10
  },
  barContainer: {
    height: 10,
    width: '100%',
    backgroundColor: 'navajowhite'
  },
  buddy: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10
  },
  historyDay: {

  },
  title: {
    fontSize: 25,
    fontFamily: 'AppleSDGothicNeo-Bold'
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'AppleSDGothicNeo-Bold'
  },
  takenButton: {
    backgroundColor: '#6699ff', 
    justifyContent: 'center', 
    borderRadius: 5
    // height: '50%', 
    // alignItems: 'center'
    // margin: 5,
    // padding: 5
  },
  medBar: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    borderRadius: 10
  }

});

function TakeMeds2 () {
  return (
    <View style={styles.section}>
      <Text>Take your meds</Text>
      <Button title="Full schedule" />
      <Text>Morning Medication</Text>
      <Text>6 routine meds</Text>
      <View style={styles.circleContainer}>
        <View style={styles.filledCircle}></View>
        <View style={styles.filledCircle}></View>
        <View style={styles.filledCircle}></View>
        <View style={styles.openCircle}></View>
        <View style={styles.openCircle}></View>
        <View style={styles.openCircle}></View>
      </View>
      <View style={styles.medication}>
        <Text>6:00 AM</Text>
        <Text>Vitamin C</Text>
        <Text>Take 1 tablet</Text>
        <Button title="Take" />
      </View>
      <View style={styles.medication}>
        <Text>6:00 AM</Text>
        <Text>Magnesium</Text>
        <Text>Take 1 tablet</Text>
        <Button title="Take" />
      </View>
      <View style={styles.medication}>
        <Text>6:00 AM</Text>
        <Text>Prednisolone</Text>
        <Text>Take 1 pill</Text>
        <Button title="Take" />
      </View>
    </View>
  )
}


// const medItem = ({item: med, onclick}) => {
//   // const dispatch = useDispatch()

//   // const handleClick = () => dispatch({ type: 'SUBMIT_MED', medId: med.id})    

//   return (
//     <View key={med.id} style={styles.medication}>
//       <Text>{med.dueTime}:00</Text>
//       <Text>{med.name}</Text>
//       <Text>Take {med.dosage} {med.dosageType}</Text>
//       <Text>{med.isTaken}</Text>
//       <Button title="Take" onPress={onclick}/>
//     </View>
//   )
// }


function TakeMeds () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_MEDS' })
    setTime(new Date().getHours() < 12 ? 'Morning' : 'Evening')
    
  }, [])
  const medList = useSelector(state => state.meds)
  const [time, setTime] = useState('')

  const morningList = medList.filter(med => med.dueTime < 12);
  const eveningList = medList.filter(med => med.dueTime >= 12);

  var takenList;
  var notTakenList;

  if(time === 'Morning') {
    takenList = medList.filter(med => med.dueTime < 12 && med.isTaken);
    notTakenList = medList.filter(med => med.dueTime < 12 && !med.isTaken);
  }else {
    takenList = medList.filter(med => med.dueTime >= 12 && med.isTaken);
    notTakenList = medList.filter(med => med.dueTime >= 12 && !med.isTaken);
  }

  console.log(takenList)

  // const takenList = medList.filter(med => med.isTaken);
  // const notTakenList = medList.filter(med => !med.isTaken);
  

  const handleClick = (medId) => {
    console.log('handleClick')
    dispatch({ type: 'SUBMIT_MED', medId: medId})
    
  }
  
  const medItem = ({item: med}) => {
    return (
      <View key={med.id} style={styles.medication} >
        <View>
          <Text style={{color: 'gray'}}>{med.dueTime}:00</Text>
          <Text style={{fontSize: 20, fontFamily: 'AppleSDGothicNeo-Bold',}}>{med.name}</Text>
          <Text style={{fontSize: 20, fontFamily: 'AppleSDGothicNeo-Light',}}>Take {med.dosage} {med.dosageType}</Text>
        </View>
        <View style={styles.takenButton} >
          <Button title="Take" onPress={() => handleClick(med.id)} color='white' />
        </View>
        
      </View>
    )
  }

  return (
    <View style={styles.section}>
      <View flexDirection='row' justifyContent='space-between'>
        <Text style={styles.title} >Take your meds</Text>
        <Button title="Full schedule" color='#3333cc'/>
      </View>

      <View style={styles.medBar}>
        <Text style={{fontSize: 20, fontFamily: 'AppleSDGothicNeo-Bold', margin: 10}}> {time} Medication</Text>
        <View style={{marginLeft: 10, paddingLeft: 2}}>
          <Text style={{color: 'gray'}}> {time === 'Morning' ? morningList.length : eveningList.length} routine meds</Text>
        </View>
        <View style={{margin: 10, paddingLeft: 5}}>
          <View style={styles.circleContainer}>
            {takenList.map(() => (
              <View style={styles.filledCircle}></View>
            ))}
            {notTakenList.map(() => (
              <View style={styles.openCircle}></View>
            ))}
            
          </View>
        </View>
       
      </View>
     
      <FlatList
        data={notTakenList}
        renderItem={medItem}
        keyExtractor={med => String(med.id)}
      />
    </View>
  )
}

function AsNeeded () {
  return (
    <View style={styles.section}>
      <Text>As-needed medication</Text>
      <Text>3 of 5 meds okay to take</Text>
      <Button title="View" />
    </View>
  )
}

function Rewards () {
  return (
    <View style={styles.section}>
      <Text>Earn Rewards</Text>
      <Button title="All Rewards" />
      <Text>80 Points</Text>
      <View style={styles.barContainer}>
        <View style={{ backgroundColor: 'orange', position: 'absolute', width: '20%', height: '100%' }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.filledCircle} />
        <Text>5 Stars earned</Text>
        <Text>Open the app once a day</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.filledCircle} />
        <Text>15 Stars earned</Text>
        <Text>3 meds taken</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.openCircle} />
        <Text>0 Stars earned</Text>
        <Text>Daily health survey</Text>
      </View>
      <Text>Expand</Text>
    </View>
  )
}

function buddyItem ({item: buddy}) {
  return (
    <View key={buddy.id} style={styles.buddy}>
      <Image source={{uri: buddy.avatarUrl}} style={{ height: 40, width: 40 }} />
      <Text>{buddy.name}</Text>
      <Text>All-time adherence</Text>
      <Text>{String(buddy.adherence).slice(0, 2)}%</Text>
    </View>
  )
}

function Buddies () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'FETCH_BUDDIES' })
  }, [])
  const buddyList = useSelector(state => state.buddies)
  // console.log(buddyList)

  return (
    <View style={styles.section}>
      <Text>Check on buddies</Text>
      <Button title="All buddies" />
      <FlatList
        data={buddyList.slice(0,3)}
        renderItem={buddyItem}
        keyExtractor={buddy => String(buddy.id)}
      />
    </View>
  )
}

function RecentHistory () {
  return (
    <View style={styles.section}>
      <Text>Past 7 days</Text>
      <Button title="Medication history" />
      <Text>Medication Progress</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.historyDay}>
          <Text>Th</Text>
          <Text>12</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Fri</Text>
          <Text>13</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '100%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Sat</Text>
          <Text>14</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '100%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Sun</Text>
          <Text>15</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Mon</Text>
          <Text>16</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Tues</Text>
          <Text>17</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
        <View style={styles.historyDay}>
          <Text>Wed</Text>
          <Text>18</Text>
          <View style={styles.barContainer}>
            <View style={{ backgroundColor: 'orange', width: '50%', height: '100%' }} />
          </View>
        </View>
      </View>
    </View>
  )
}

function DashboardScreen () {
  return (
    <ScrollView>
      <TakeMeds />
      <View style={styles.hr} />
      <AsNeeded />
      <View style={styles.hr} />
      <Rewards />
      <View style={styles.hr} />
      <Buddies />
      <View style={styles.hr} />
      <RecentHistory />
    </ScrollView>
  );
}

export default DashboardScreen