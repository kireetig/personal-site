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

  films = [];

  ngOnInit() {
    this.http.get('https://ghibliapi.herokuapp.com/films').subscribe((res: any) => {
      this.films = res;
      window.addEventListener('scroll', this.moveCamera);
      window.addEventListener('mousemove', this.moveCameraAngle);
      this.setSceneHeight();
    });
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
