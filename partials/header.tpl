<div class="row">
    <div class="col-xs-3 hidden-xs">
        <a href="#" class="btn btn-default pull-left" role="button">Back to Home</a>
    </div>

    <div class="col-sm-6 col-xs-12">
        <ol class="breadcrumb">
            <li *ngFor="let page of pages">{{ page }}</li>
        </ol>
    </div>

    <div class="col-xs-3 hidden-xs">
        <img src="dist/img/logo.png" alt="Logo" class="img-responsive pull-right">
    </div>
</div>

<div class="row">
    <div class="col-xs-12">
        <h2>Shows</h2>
        <h4>Please select the show you would like to see.</h4>
    </div>
</div>