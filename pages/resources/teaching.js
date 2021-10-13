import { Layout } from '../../components/layouts'


const Teaching= () =>{
    return (
        <Layout>
            <div>
        <h1 class="alignCenter">Courses Offered</h1>
        <table class="styled-table">
            <thead>
                <tr>
                    <th class="alignCenter">Course</th>
                    <th class="alignCenter">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="alignCenter">Software Engineering</td>
                    <td>To develop in-depth understanding of software engineering principles, practices and ability to apply them in developing large scale software systems.</td>
                </tr>
                <tr>
                    <td class="alignCenter">Software Systems Analsis and Design</td>
                    <td>Provides an introduction to software engineering concepts and techniques to undergraduate students. Enables the students to work in smaller teams and deliver software systems.</td>
                </tr>
                <tr>
                    <td class="alignCenter">Software Foundations</td>
                    <td>Provides mathematical foundations of programs and software systems so as to be able to prove properties about their behaviour.</td>
                </tr>
                <tr>
                    <td class="alignCenter">Software Quality Engineering</td>
                    <td>Imparts quality analyses of software systems. Topics include verification, software quality assurance, standards, etc. Concepts and skills necessary to design and and validation, metrics and measurements are also part of the curriculum.</td>
                </tr>
                <tr>
                    <td class="alignCenter">Internals of Application Servers</td>
                    <td>Understand essence of middleware and distributed object technology. J2EE Technology and Architecture overview. J2EE App Server architecture. Life cycle of a J2EE application-deployment through running and deployment.</td>
                </tr>
                <tr>
                    <td class="alignCenter">Principles of Programming Languages</td>
                    <td>This course is an introduction to the principles behind the design of programming languages, including object-oriented programming, and the use of formal methods in reasoning with programs. During the course, students build a series
                        of interpreters, each a mini abstract or virtual machine for a specific language.</td>
                </tr>
            </tbody>
        </table>
    </div>

        </Layout>
    )
}

export default Teaching;