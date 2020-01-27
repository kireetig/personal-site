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
  },{
    title: 'Professional History',
    description: null,
    innerHtml: `<ul>
<li><div>
MSP Hitect SDN BHD (Kuala Lumpur, Malaysia) Software Engineer - January 2019 to Till Date
</div></li>
</ul>`
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
