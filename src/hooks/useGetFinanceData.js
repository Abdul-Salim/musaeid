import { useEffect, useState } from "react"
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

const useGetFinanceData = (type) => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setData([]);
        setTotal(0);
        setLoading(true);
        firestore()
            .collection(type)
            .orderBy('date', 'desc')
            .get()
            .then(querySnapshot => {
                console.log('Total expense: ', querySnapshot);
                if (type !== 'summary') {
                    querySnapshot.forEach(documentSnapshot => {
                        setLoading(false);

                        //   console.log('Income: ', moment(documentSnapshot.data().date).format('DD MMM YY'));
                        setData((prev) =>
                            [...prev, {
                                date: moment(documentSnapshot.data().date).format('DD MMM YY'),
                                title: documentSnapshot?.data().title,
                                amount: documentSnapshot?.data().amount,
                                id: documentSnapshot?.id
                            }]
                        );
                        setTotal(prev => prev + Number(documentSnapshot?.data().amount))
                    });
                }
            });
    }, [])

    return { data, total, loading };
};

export default useGetFinanceData;