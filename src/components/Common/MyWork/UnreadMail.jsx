import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import classes from "./UnreaadMail.module.css";
import leftIcon from "../../../Images/Bearish/chevron_backward.svg"
import rightIcon from "../../../Images/Bearish/chevron_forward.svg"
import moreIcon from "../../../Images/Bearish/more_vertical.svg"

const INITIAL_ARRAY = [{
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
}, {
    senderMail: 'milankodinariya1995@gmail.com',
    subject: 'Test',
    description: 'We need to see the start of the email here, and the first few lines of the email should.We need to see the start of the email here, and the first few lines of the email should.'
},];

const UnreadMail = () => {

    const [state, setState] = useState(INITIAL_ARRAY);

    return (
        <>
            <Stack className={classes.unReadMilMain}>
                <Stack direction={'row'} justifyContent={'space-between'} paddingRight={'10px'}>
                    <Stack className={classes.emailName}>
                        Email Name
                    </Stack>
                    <Stack direction={'row'} gap={'30px'}>
                        <img alt={''} style={{cursor: 'pointer'}} src={leftIcon}/>
                        <img alt={''} style={{cursor: 'pointer'}} src={rightIcon}/>
                    </Stack>
                </Stack>
                <Stack sx={{overflowY: 'auto'}}>
                    <Stack width={'316px'}>
                        {(state || []).map((item, i) => (
                            <Stack key={i} className={classes.emailContent}>
                                <Stack direction={'row'} justifyContent={'space-between'}>
                                    <Stack className={classes.senderEmail}>
                                        {item.senderMail}
                                    </Stack>
                                    <img alt={''} style={{cursor: 'pointer'}} src={moreIcon}/>
                                </Stack>
                                <Stack className={classes.mailSubject}>
                                    {item.subject}
                                </Stack>
                                <Stack className={classes.mailDescription}>
                                    {item.description}
                                </Stack>
                                <Stack direction={'row'} gap={'20px'}>
                                    <Stack className={classes.markAsRead}>
                                        Mark as Read
                                    </Stack>
                                    <Stack className={classes.viewFull}>
                                        View Full
                                    </Stack>
                                </Stack>
                                <Stack className={classes.darkLine}/>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
};
export default UnreadMail;
