import { useState, useEffect } from 'react';
import style from '../styles/monitor.module.scss';
import Navbutton from "../component/navbutton";
import { Layout, Typography, Space, Card, notification} from 'antd';
const { Header, Content, Sider } = Layout;
const { Title } = Typography;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faRoad } from "@fortawesome/free-solid-svg-icons";

const MonitorPage = () => {
    const [setbool, setSetbool] = useState(false);

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: "매칭중",
            description: "병원과 매칭중입니다.",
        });
    };
    return (
        <Layout style={{ height: '100vh' }}>
            <Layout style={{ flexDirection: 'column', flex: '1 1 auto' }}>
                <Header style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
                    <Space size={20}>
                        <Title level={3} style={{ color: 'white', margin: '0' }}>999가4819</Title>
                        <Space style={{ display: 'flex', alignItems: 'center' }} size={10}>
                            <FontAwesomeIcon icon={faLocationDot} color={'white'} size={'lg'} />
                            <Title level={4} style={{ color: 'white', margin: '0' }}>청파동</Title>
                        </Space>
                    </Space>
                </Header>
                <Content style={{ flex: '1 1 auto' }}>
                    {setbool ?
                    <Card hoverable styles={{ body: { padding: 0, overflow: 'hidden', height: '100vh'} }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 30 }}>
                            <Space style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                <Space style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                                    <Typography.Title level={3}>
                                        강북삼성병원, 좌호빈 교수
                                    </Typography.Title>
                                </Space>
                                <Space style={{ display: 'flex', }} size={10}>
                                    <FontAwesomeIcon icon={faLocationDot} color={'black'} size={'sm'} />
                                    <Typography.Text>서울특별시 종로구 새문안로 29</Typography.Text>
                                </Space>
                                <Space style={{ display: 'flex', alignItems: 'center' }} size={10}>
                                    <FontAwesomeIcon icon={faClock} color={'black'} size={'sm'} />
                                    <Typography.Text>15분</Typography.Text>
                                    <FontAwesomeIcon icon={faRoad} color={'black'} size={'sm'} />
                                    <Typography.Text>5km</Typography.Text>
                                </Space>
                                <Space
                                    style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}
                                    size={0}
                                >
                                </Space>

                            </Space>
                        </div>
                    </Card>
                    : ''}
                </Content>
            </Layout>
            <Sider className={style.navbar} width={'32vh'} style={{ height: '100vh' }}>
                <Navbutton name="호출" style={{
                    background: 'rgb(0, 123, 255)'
                }} onClick={() => {
                    openNotificationWithIcon('info');
                    alert('병원 매칭을 요청했습니다.');
                    setTimeout(() => {
                        setSetbool(1);
                    }, 5000)
                }}/>
                <Navbutton name="재검색" style={{
                    backgroundColor: '#757575'
                }} />
                <Navbutton name="종료" style={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                }} />
            </Sider>
        </Layout>
    );
}

export default MonitorPage;
