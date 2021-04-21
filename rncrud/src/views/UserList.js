import React from 'react'
import { View, Text, FlatList  } from 'react-native'
import users from '../data/users'
import { Button, Icon, ListItem} from 'react-native-elements'
import { Alert } from 'react-native'

export default props => {

    function confirmUserDeletion(user){
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?',[
            {
                text: "Sim",
                onPress(){
                    console.warn('delete' + user.id)
                }
            },
            {
                text: "Não"
            }
        ])
    }

    function getActions (user) {
        return (
          <>
              <Button
                  onPress={() => props.navigation.navigate('UserForm', user)}
                  type="clear"
                  icon={<Icon name="edit" size={25} color="orange" />}
              />
              <Button
                  onPress={() => confirmUserDeletion(user)}
                  type="clear"
                  icon={<Icon name="delete" size={25} color="red" />}
               />
          </>
        )
    }


    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomDivider
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm')}
            />
        )
    }


    return (
      <View>
         <FlatList 
            keyExtractor={user => user.id.toString()}
            data={users}
            renderItem={getUserItem}
         />
      </View>
    )
}