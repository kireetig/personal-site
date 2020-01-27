import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const perspectiveOrigin = {
  x: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--scenePerspectiveOriginX'
    )
  ),
  y: parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--scenePerspectiveOriginY'
    )
  ),
  maxGap: 10
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }


  films = [{
    title: 'About Me (Professional)',
    description: `I am Javascript enthusiastic. I have 4 years of experience in working on different Javascript/Typescript technologies like
     React Js, Angular. Node Js etc.,
     I like learning technologies related to javascript and typescript on my free time.
     I try to implement them. I like implement difficult logic, basically what drives me is challenge.
      I want my work to be one of the best.`
  }, {
    title: 'About Me (Non-professional)',
    description: `I like travelling, playing sports and watching tv. I play Badminton, Tennis, football.
    I tried most sports and i like learning more. Life is short keeping learning and enjoying.
    I value family and relationships`
  }, {
    title: 'Professional History',
    description: null,
    innerHtml: `<ul>
    <li>
      <div>
        <b>MSP Hitect SDN BHD (Kuala Lumpur, Malaysia)</b> <p class="mb-0">Software Engineer</p> <p>January 2019 to Till Date</p>
      </div>
    </li>
    <li>
        <div>
        <b>Zolostays Property Solution Pvt Ltd. (Bangalore, India)</b>
        <p class="mb-0">Frontend Developer</p>
        <p>September 2017 to January 2019</p>
        </div>
    </li>
    <li>
        <div>
        <b>Bananabook India Pvt Ltd. (Bangalore, India)</b>
        <p class="mb-0">Angular Developer</p>
        <p>September 2016 to August 2017</p>
        </div>
    </li>
</ul>`
  }, {
    title: 'My Technical Skills',
    description: null,
    innerHtml: `<ul>
    <li>HTML 5</li>
    <li>Css 3</li>
    <li>Javascript</li>
    <li>React Js</li>
    <li>Angular (1, 4 and above versions)</li>
    <li>Redux</li>
    <li>Mobx</li>
    <li>React Native</li>
    <li>Node Js</li>
</ul>`
  }, {
    title: 'Projects Worked on',
    description: null,
    innerHtml: `<div>
    <h3 class="mb-0">TalentPulse</h3>
    <p>Description: A Strategic HR Solution platform which helps companies to manage their employees and help companies to manage
     their resources better.</p>
     <p>Technology used: ReactJs with Mobx for state management</p>
     <p>Role:- To make design to reality and helping juniors when they stuck, code reviewing. Coming up with ideas to improve performance
      and better usage of the system.</p>
</div>`
  }, {
    title: 'Projects Worked on',
    description: null,
    innerHtml: `<div>
    <h3 class="mb-0">Axiata Mobility</h3>
    <p>Description: A platform to manage resources across different subsidiary companies.</p>
     <p>Technology used: ReactJs with Mobx for state management</p>
     <p>Role:- To make design to reality.</p>
</div>`
  }, {
    title: 'Projects Worked on',
    description: null,
    innerHtml: `<div>
    <h3 class="mb-0">Zolostays Customer Website </h3>
    <p>Description:  Helps users to browse, book and paying rents of accommodation, availing services with a simple click.</p>
     <p>Technology used: Angularjs 1 </p>
     <p>Role:-  Restyling website and implementing new features and maintaining the project.
      Managing existing features.
      API integration for raising tickets (issues) using Zendesk.
      Lead Square, Google Analytics integration in website.
      I am sole contributor in this project.
      Making website SEO meta changes.</p>
</div>`
  }, {
    title: 'Projects Worked on',
    description: null,
    innerHtml: `<div>
    <h3 class="mb-0">Zolostays Customer Website Revamp</h3>
    <p>Description:  Added new features like Check In, Checkout, Refund flow and total Design change. Its Progressive Web App (PWA)</p>
     <p>Technology used: React Js, Redux using Redux first routing </p>
     <p>Role:- Implementing same features of previous website using React Js.
      Writing Reusable and clean code. Implementing Search logic.</p>
</div>`
  }, {
    title: 'Projects Worked on',
    description: null,
    innerHtml: `<div>
    <h3 class="mb-0">Zolostays CRM</h3>
    <p>Description:  Website is used to manage Customer relations and resources offered to customer. Can download various reports. </p>
     <p>Technology used: Angularjs 1 </p>
     <p>Role:-  Implementing new features and maintaining. using Jquery datatables for displaying report data.
     Implementing new features depending on requirements.
      I am Sole contributor for this project. </p>
</div>`
  }, {
    title: 'Projects Worked on',
    description: null,
    innerHtml: `<div>
    <h3 class="mb-0">Zolostays CRM Revamp</h3>
    <p>Description:  Website is used to manage Customer relations and resources offered to customer. Can download various reports. </p>
     <p>Technology used: Angular, Redux </p>
     <p>Role:-   Researching to find best practices in architecture to implement them.
     Develop existing features with Angular 6. Using Datatables and integrating PowerBI for reports. </p>
</div>`
  },  {
    title: 'Projects Worked on',
    description: null,
    innerHtml: `<div>
    <h3 class="mb-0">NextQbicle website </h3>
    <p>Description: This website is regarding knowledge sharing and practicing interviews.  </p>
     <p>Technology used: Angular 5 </p>
     <p>Role:- Developing website from scratch and full all design and functional requirement.
     Using WEB RTC for audio recording. Solved Cross browser issues raised due to WEB RTC.
     Used TFS for version controlling. </p>
</div>`
  }, {
    title: 'Other Projects',
    description: null,
    innerHtml: `<div>
   <ul>
   <li><b>Play2Gather:-</b> A React Native app used to join different games hosted by other.</li>
   <li><b>BananaBook.net Website:-</b> A Social Website. Developed using Angularjs 1, Ionic Framework.</li>
   <li><b>Bananabook Phone Guide App:-</b> Video tutorials on how to use different mobiles.Developed using Angularjs 1, Ionic Framework</li>
</ul>
</div>`
  }, {
    title: 'Miscellaneous',
    description: null,
    innerHtml: `<div class="d-flex">
<img src="https://avatars1.githubusercontent.com/u/31013156?s=400&u=76bbafe27c8c60258d6af26d064d0ba8c012dec6&v=4" alt="">
   <ul>
   <li><b>Education:-</b> I have graduated Bachelores Degree from KL University, Vijayawada, Andhra Pradesh, India</li>
   <li><b>Email:-</b> developer.kireeti@gmail.com</li>
   <li><b>Marital Status:-</b> Single</li>
   <li><b>Age:-</b> 27</li>
   <li>I am available to work on freelancing projects, if i like project and technologies used.</li>
</ul>
</div>`
  }, {
    title: 'The End',
    description: 'You can contact me on my email. Please send your valuable feedback if any.',
  }];

  ngOnInit() {
    window.addEventListener('scroll', this.moveCamera);
    window.addEventListener('mousemove', this.moveCameraAngle);
    this.setSceneHeight();
  }

  moveCameraAngle(event) {
    const xGap =
      (((event.clientX - window.innerWidth / 2) * 100) /
        (window.innerWidth / 2)) *
      -1;
    const yGap =
      (((event.clientY - window.innerHeight / 2) * 100) /
        (window.innerHeight / 2)) *
      -1;
    if (perspectiveOrigin) {
      const newPerspectiveOriginX = perspectiveOrigin.x + (xGap * perspectiveOrigin.maxGap) / 100;
      const newPerspectiveOriginY = perspectiveOrigin.y + (yGap * perspectiveOrigin.maxGap) / 100;
      document.documentElement.style.setProperty(
        '--scenePerspectiveOriginX', newPerspectiveOriginX.toString()
      );
      document.documentElement.style.setProperty(
        '--scenePerspectiveOriginY',
        newPerspectiveOriginY.toString()
      );
    }
  }

  moveCamera() {
    document.documentElement.style.setProperty('--cameraZ', window.pageYOffset.toString());
  }

  setSceneHeight() {
    const numberOfItems = this.films.length; // Or number of items you have in `.scene3D`
    const itemZ = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--itemZ')
    );
    const scenePerspective = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--scenePerspective'
      )
    );
    const cameraSpeed = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--cameraSpeed')
    );

    const height =
      window.innerHeight +
      scenePerspective * cameraSpeed +
      itemZ * cameraSpeed * numberOfItems;

    // Update --viewportHeight value
    document.documentElement.style.setProperty('--viewportHeight', height.toString());
  }

}
