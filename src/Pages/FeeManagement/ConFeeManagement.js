import React from 'react';
import { Tab, TabView } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ScheduleTab from './ScheduleTab';
import ReceiptsTab from './ReceiptsTab';
import Payment from './Payment';

const ConFeeManagement = () => {

    const [index, setIndex] = React.useState(0);
    const [receipts, setReceipts] = React.useState([
        { 'name': '2021-2022 - College Fee - Term - I', 'recNo': '0000265', 'refNo': '123450066432', 'paAm': 220, 'dop': '02/02/2020', 'status': 'Paid', 'src': 'https://www.clickdimensions.com/links/TestPDFfile.pdf' },
        { 'name': '2021-2022 - College Fee - Term - I', 'recNo': '0000261', 'refNo': '123450066431', 'paAm': 8000, 'dop': '07/02/2020', 'status': 'Paid', 'src': 'https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg' },
        { 'name': '2021-2022 - College Fee - Term - III', 'recNo': '0000262', 'refNo': '123450066433', 'paAm': 8000, 'dop': '07/02/2020', 'status': 'Paid', 'src': 'https://www.techup.co.in/wp-content/uploads/2020/01/techup_logo_72-scaled.jpg' },
    ]);

    return (
        <>
            <Tab
                value={index}
                onChange={(e) => setIndex(e)}
                indicatorStyle={{
                    backgroundColor: 'white',
                    height: 2,
                }}
                variant="primary"
            >
                <Tab.Item
                    title="Schedule"
                    titleStyle={{ fontSize: 12 }}
                    icon={<MaterialIcons name="schedule" size={12} color="white" />}
                />
                <Tab.Item
                    title="Receipts"
                    titleStyle={{ fontSize: 12 }}
                    icon={<Ionicons name="receipt" size={12} color="white" />}
                />
                <Tab.Item
                    title="Payment"
                    titleStyle={{ fontSize: 12 }}
                    icon={<Ionicons name="receipt" size={12} color="white" />}
                />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring" disableSwipe >
                <TabView.Item style={{ backgroundColor: '#d1b15a', width: '100%' }}>
                    <ScheduleTab />
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: '#97e6ae', width: '100%' }}>
                    <ReceiptsTab data={receipts} />
                </TabView.Item>
                <TabView.Item style={{ backgroundColor: '#97e6ae', width: '100%' }}>
                    <Payment />
                </TabView.Item>
            </TabView>
        </>
    );
}

export default ConFeeManagement;
