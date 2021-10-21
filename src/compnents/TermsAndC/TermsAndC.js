import React from 'react';
import { View, Text, Pressable } from 'react-native';


const TermsAndCo = ({route, navigation}) => {
    return ( 
        <View style={{padding: 15}}>
            
            <Text style={{fontSize: 22, paddingVertical: 10, fontWeight:'bold', color:'teal'}}>{route.params.pageTitle} | {route.params.title}</Text>


            <Text>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat
            </Text>
        </View>
     );
}
 
export default TermsAndCo;