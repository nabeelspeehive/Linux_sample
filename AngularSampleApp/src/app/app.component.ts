import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet if you are using routing
import { CommonModule } from '@angular/common'; // Import CommonModule for essential Angular functionalities

@Component({
  selector: 'app-root',
  standalone: true,  // Indicate that this is a standalone component
  imports: [CommonModule, HttpClientModule, RouterOutlet], // Add HttpClientModule and other necessary modules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected styleUrls (it should be `styleUrls` not `styleUrl`)
})
export class AppComponent implements OnInit {
  weatherForecasts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Call the API directly when the component is initialized
    this.http.get<any[]>('https://localhost:7101/WeatherForecast').subscribe(data => {
      this.weatherForecasts = data;
    });
  }
}
