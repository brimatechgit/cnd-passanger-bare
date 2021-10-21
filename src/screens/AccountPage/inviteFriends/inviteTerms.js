import React, {useState} from 'react';
import { View, Text, Pressable, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import Button from '../../../compnents/Button/Button';


const InviteTermsPage = (props) => {

    const [isSelected, setSelection] = useState(false);

    return ( 
        <View style={{flex:1, padding: 15, alignItems:'center'}}>
            <View style={{alignItems:'center', padding: 15}}>
                <Text style={{fontSize: 22, fontWeight: 'bold', color: 'teal'}}>Terms & Conditions</Text>
            </View>

            <Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur numquam cumque consequuntur, doloremque quos, sapiente explicabo est voluptatem ab, aliquid exercitationem. Magnam, vero repellat labore ad nulla dolorem velit dicta amet fugiat eligendi quos deserunt expedita vitae ipsum fugit nostrum dolorum deleniti distinctio hic voluptatibus!
            </Text>



            <View style={{ flexDirection: 'row',alignItems:'center', paddingVertical:15}}>
             {/* I agree to the Terms & Conditions and Privacy Policy */}
             <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={{alignSelf: 'center',}}
                />
             <Text style={{fontSize:12, bottom:3}}>I agree to the <Pressable onPress={() => props.navigation.navigate(TermsPage)}><Text style={{fontSize:12, color: 'teal', top: 3}}>Terms & Conditions and Privacy Policy</Text></Pressable></Text>
            </View>
        </View>
     );
}
 
export default InviteTermsPage;