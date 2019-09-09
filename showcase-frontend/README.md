### HTML snippet
```
<div class="row">
<div class="players" *ngFor="let player of players$ | async">
      <img [src]="player.imgURL" class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="card-title">{{ player.name }}</h3>
        <p class="card-text">{{ player.info }} </p>
      </div>
</div>
</div>
 ```

