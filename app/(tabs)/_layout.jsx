import { View, Text ,Image,StyleSheet} from 'react-native'
import {Tabs,Redirect} from 'expo-router';
import {icons} from '../../constants';
const TabIcon = ({icon,color,name,focused}) =>{
    return(
        <View style={StyleSheet.view}>
            <Image
            
             source={icon}
             resizeMode='contain'
             tintColor={color}
             style={{
                 width:24,
                 height:24,
                 tintColor:color,
                 marginLeft:5
                 
             }}
            />
            <Text style={[styles.textXs, focused ? styles.fontPsemibold : styles.fontPregular]}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
     <Tabs
     screenOptions={{
        tabBarShowLabel:false,
     }}>
        <Tabs.Screen name="home" options={{
            title: 'Home',	
            headerShown: false,
            tabBarIcon:({color,focused}) =>(
           <TabIcon
           icon ={icons.home}
           color ={color}
           name="Home"
           focused={focused}/>
            )
        }}/>
  <Tabs.Screen name="bookmark" options={{
            title: 'Bookmark',	
            headerShown: false,
            tabBarIcon:({color,focused}) =>(
           <TabIcon
           icon ={icons.bookmark}
           color ={color}
           name="Bookmark"
           focused={focused}/>
            )
        }}/>
         <Tabs.Screen name="create" options={{
            title: 'Create',	
            headerShown: false,
            tabBarIcon:({color,focused}) =>(
           <TabIcon
           icon ={icons.plus}
           color ={color}
           name="Create"
           focused={focused}/>
            )
        }}/>
         <Tabs.Screen name="profile" options={{
            title: 'Profile',	
            headerShown: false,
            tabBarIcon:({color,focused}) =>(
           <TabIcon
           icon ={icons.profile}
           color ={color}
           name="Profile"
           focused={focused}/>
            )
        }}/>
   
     </Tabs>
    </>
  )
}


const styles = StyleSheet.create({
    fontPsemibold: {
      fontFamily: 'Poppins-SemiBold',
    },
    fontPregular: {
        fontFamily: 'Poppins-Regular',
    },
    view:{
        alignItems:'center',
        justifyContent:'center',
        gap:2,
    },
    textXs: {
        fontSize: 12, // assuming text-xs corresponds to a font size of 12
      }
  });
export default TabsLayout