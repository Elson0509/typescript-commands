interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage{
    subject: string;
    body: string;
    attachment?: string[]
}

//DTO - Data Transfer Object 
interface IMessageDTO{
    to: IMailTo;
    message: IMailMessage;
}

class EmailService {
    sendMail({to, message} : IMessageDTO){
        console.log(`Sending email to ${to.name}: ${message.subject}`)
    }
}

export default EmailService