import { faker } from '@faker-js/faker'
import React from 'react'
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

function App() {
    return (
        <>
            <div className='ui-container'>
                <div className='ui cards'>
                    <ApprovalCard>
                        <h4>Warning</h4>
                        <div>are you sure you want to do this? </div>
                    </ApprovalCard>
                        <ApprovalCard>
                            {/* create 3 different comments  */}
                            <CommentDetail
                                name='Suhil'
                                date={new Date().toLocaleTimeString()}
                                comment={faker.random.words(5)}
                                avatar={faker.image.avatar()}
                            />
                        </ApprovalCard>
                        <ApprovalCard>
                            <CommentDetail
                                name='Rucha'
                                date={new Date().toLocaleDateString()}
                                comment={faker.random.words(5)}
                                avatar={faker.image.avatar()}
                            />
                        </ApprovalCard>
                        <ApprovalCard>
                            <CommentDetail
                                name='Kirtan'
                                date={new Date().toLocaleString()}
                                comment={faker.random.words(5)}
                                avatar={faker.image.avatar()}
                            />
                        </ApprovalCard>
                    </div>
            </div>
        </>
    )
}

export default App