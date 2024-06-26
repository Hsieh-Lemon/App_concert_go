import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectColorMode } from '../redux/colorSlice';
import { setGeneralAccountInfo } from "../redux/accountSlice";
import { selectGeneral } from "../redux/accountSlice";
import { Platform, KeyboardAvoidingView, ScrollView } from 'react-native';

import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    FormControlErrorIcon,
    FormControlLabel,
    FormControlLabelText,
    AlertCircleIcon,
    VStack,
    Text,
    Input,
    InputField,
} from "@gluestack-ui/themed";

const AdavancedSettingScreen = () => {
    const colorMode = useSelector(selectColorMode);
    const backgroundColor = colorMode === 'light' ? 'white' : 'black';
    const general = useSelector(selectGeneral);
    const dispatch = useDispatch();
    const [name, setName] = useState(general.name);
    const [nameIsError, setNameIsError] = useState(true);
    const [email, setEmail] = useState(general.email);
    const [emailIsError, setEmailIsError] = useState(true);
    const [adrs, setAdrs] = useState(general.adrs);
    const [tel, setTel] = useState(general.tel);

    const nameRegex = /^[a-zA-Z]+\w*$/;
    const emailRegex = /\w{3,}@[a-zA-Z_]+\.[a-zA-Z]{2,5}/;
    useEffect(() => {
        if (!nameIsError && !emailIsError)
            dispatch(setGeneralAccountInfo({ name, email, adrs, tel }))

        if (email.match(emailRegex)) setEmailIsError(false)
        else setEmailIsError(true);

        if (name.match(nameRegex)) setNameIsError(false)
        else setNameIsError(true);
    }, [name, email, adrs, tel]);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
                <VStack space={2} mt={5} width="80%" alignSelf="center" bg={backgroundColor}>
                    <Text fontSize={28} mt={20} alignSelf="center">
                        User Setting
                    </Text>
                    <FormControl mb={5} mt={10} isRequired>
                        <FormControlLabel>
                            <FormControlLabelText>Name</FormControlLabelText>
                        </FormControlLabel>
                        <Input variant="underlined">
                            <InputField
                                placeholder="Input your name"
                                value={name}
                                onChangeText={(text) => {
                                    setName(text);
                                    if (nameRegex.test(text)) setNameIsError(false);
                                    else setNameIsError(true);
                                }}
                            />
                        </Input>
                        <FormControlError isInvalid={nameIsError}>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                You must enter a valid name.
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>
                    <FormControl mb={5} isRequired>
                        <FormControlLabel>
                            <FormControlLabelText>Email</FormControlLabelText>
                        </FormControlLabel>
                        <Input variant="underlined">
                            <InputField
                                placeholder="Input your Email"
                                value={email}
                                onChangeText={(text) => {
                                    setEmail(text);
                                    if (emailRegex.test(text)) setEmailIsError(false);
                                    else setEmailIsError(true);
                                }}
                            />
                        </Input>
                        <FormControlError isInvalid={emailIsError}>
                            <FormControlErrorIcon as={AlertCircleIcon} />
                            <FormControlErrorText>
                                Must be the form of abc@example.com.
                            </FormControlErrorText>
                        </FormControlError>
                    </FormControl>
                    <FormControl mb={5}>
                        <FormControlLabel>
                            <FormControlLabelText>Address</FormControlLabelText>
                        </FormControlLabel>
                        <Input variant="underlined">
                            <InputField
                                placeholder="Input your Address"
                                value={adrs}
                                onChangeText={(text) => setAdrs(text)}
                            />
                        </Input>
                    </FormControl>
                    <FormControl mb={5}>
                        <FormControlLabel>
                            <FormControlLabelText>Tel</FormControlLabelText>
                        </FormControlLabel>
                        <Input variant="underlined">
                            <InputField
                                placeholder="Input your Telephone"
                                value={tel}
                                onChangeText={(text) => setTel(text)}
                            />
                        </Input>
                    </FormControl>
                </VStack>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default AdavancedSettingScreen;