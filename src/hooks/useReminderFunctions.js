import Tts from "react-native-tts";
import React, { useState } from 'react'
import useSpeechGenerator from "./useSpeechGenerator";
import RNCalendarEvents from "react-native-calendar-events";

const useReminderFunctions =  () => {
    const [status, setStatus] = useState('sekeek');

    const {speak} = useSpeechGenerator();
    const SetReminder = async (input) => {
        const item = input.replace("set a reminder to", '');
        console.log(item);
        speak(item);
        // RNCalendarEvents.checkPermissions((readOnly = false));
        RNCalendarEvents.requestPermissions((readOnly = false));

        RNCalendarEvents.saveEvent('Title of event', {
            startDate: '2022-03-08T16:23:32.413Z',
            endDate: '2022-03-08T16:31:42.993Z'
          })
    }

    const readSchedule = () => {
        
    }

    return {SetReminder}
};

export default useReminderFunctions;