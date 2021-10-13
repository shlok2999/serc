import { Layout } from '../../components/layouts'


const UsefulLink = () => {
    return(
        <Layout>
                <div class="alignCenter">
        <h1>Links</h1>
        <table class="styled-table">
            <thead>
                <tr>
                    <th class="alignCenter">Content</th>
                    <th class="alignCenter">Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="alignCenter">List of ACM Turing Award Lectures</td>
                    <td class="alignCenter"><a href="https://dblp.uni-trier.de/db/journals/cacm/turing.html">Visit</a></td>
                </tr>
                <tr>
                    <td class="alignCenter">ICSE's Most Influential Papers</td>
                    <td class="alignCenter"><a href="https://www.sigsoft.org/awards/icseMIPAward.html">Visit</a></td>
                </tr>
                <tr>
                    <td class="alignCenter">Software Engineering Readings</td>
                    <td class="alignCenter"><a href="http://people.engr.ncsu.edu/txie/sereading.htm">Visit</a></td>
                </tr>
                <tr>
                    <td class="alignCenter">PhD Dissertations in the Area of Software Engineering (SIGSOFT)</td>
                    <td class="alignCenter"><a href="https://www.sigsoft.org/dissertations.html/">Visit</a></td>
                </tr>
                <tr>
                    <td class="alignCenter">Good conferences and journals listed by Tao Xie</td>
                    <td class="alignCenter"><a href="https://cs.illinois.edu/homes/taoxie/sereading.htm">Visit</a></td>
                </tr>
                <tr>
                    <td class="alignCenter">Other Software Engineering Research Centers</td>
                    <td class="alignCenter"><a href="https://www.cs.wm.edu/semeru/index.html">Visit</a></td>
                </tr>
                <tr>
                    <td class="alignCenter">Microstack (Openstack) Ussuri Configuration Document</td>
                    <td class="alignCenter"><a href="https://github.com/SIREN-DST/Crawling-Engines/blob/master/Microstack(Openstack)_Configuration.pdf">Visit</a></td>
                </tr>
            </tbody>
        </table>
    </div>
        </Layout>
    )
}

export default UsefulLink;
