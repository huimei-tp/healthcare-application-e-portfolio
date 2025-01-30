import React, {useState} from 'react';
import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

const content = {
    "self-introduction": "Hello! My name is Sofia, I’m a Year 2 Student at Temasek Polytechnic pursuing a Diploma in Information Technology. Unlike many of my peers, I only started coding when I entered Poly. So, with my limited coding experience, I was determined to work my way up, and now I have the opportunity to represent my school in the Mobile Application Development category at WorldSkills Singapore 2025. I created this e-portfolio to document my learning journey, and I hope that any aspiring coders who come across this site feel inspired to pursue their goals, even if it means starting by yourself. :)",
    "profile-photo": "",
    "project-introduction": "Guided Learning is a fundamental subject for students looking to pursue self-directed learning in their chosen area of inquiry The process focuses on four stages: planning, performing, monitoring, and reflecting. I have the opportunity to plan my individual learning project, refine and execute the learning plan, and monitor and reflect on my learning progress and project. The outcome of this subject would be this E-Portfolio as well as self-fulfillment.",
    "project-context": "My Guided Learning project focuses on studying the essential skill sets needed to develop a mobile application using Kotlin and Jetpack Compose. Afterwards, I will be building a Healthcare Mobile Application as part of the graded assignment for three of my mapped subjects — Full Stack Web Development (CIT2C20), IoT Application Development (CMC2C16), and DevOps Essentials (CIT2C22). Additionally, I will be participating in the internal qualifying round at Temasek Polytechnic to earn a spot in the official WorldSkills Competition in April 2025.",
}

export default function About(){
    const [selectedKey, setSelectedKey] = useState('1');
    
    function getItem(label, key) {
        return {
          key,
          label,
        };
      }

    const items = [
        getItem('About Me', '1'),
        getItem('Project', '2'),
        getItem('Context', '3'),
        getItem('Proposal', '4'),
        getItem('Learning Contract', '5'),
    ]

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };

    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return <div>About Me Content</div>;
            case '2':
                return <div>Project Content</div>;
            case '3':
                return <div>Context Content</div>;
            case '4':
                return <div>Proposal Content</div>;
            case '5':
                return <div>Learning Contract Content</div>;
            default:
                return <div>Select a tab to see content</div>;
        }
    };

    return(
        <Layout className='layout'>
            <Content className='context-box' style={{
                padding: '64px',
            }}>
                <Layout style={{
                    padding: '24px',
                    background: "#D0DDD0",
                    borderRadius: 24,
                    height: '70vh'
                }}>
                    <Sider style={{
                        background: "#FFFFFF",
                        borderRadius: 16,
                    }}>
                        <Menu 
                            defaultSelectedKeys={['1']} 
                            selectedKeys={[selectedKey]} 
                            onClick={handleMenuClick} 
                            items={items} style={{
                                padding:'16px 0px',
                                background: "#FFFFFF",
                                borderRadius: 16,
                        }}/>
                    </Sider>
                    <Content
                        style={{
                        padding: '0 24px',
                        minHeight: 280,
                        }}
                    >
                        {renderContent()}
                    </Content>
                </Layout>
            </Content>
        </Layout>
    )
};