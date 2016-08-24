<div class="row">
    <div class="col-xs-12">
        <h2>Shows</h2>
        <h4>Please select the show you would like to see.</h4>
    </div>
</div>

<div class="row">
    <div class="col-sm-4 col-xs-6">
        <div class="panel panel-default show-selector">
            <div class="panel-body">
                <img src="dist/img/shrek.png" alt="Shrek" class="img-responsive">
                <h3>Test</h3>
                <h5>This is a concept.</h5>
            </div>
        </div>
    </div>

    <div class="col-sm-4 col-xs-6">
        <div class="panel panel-default show-selector">
            <div class="panel-body">
                <img src="dist/img/shrek.png" alt="Shrek" class="img-responsive">
                <h3>Test</h3>
                <h5>This is a concept.</h5>
            </div>
        </div>
    </div>

    <div class="col-sm-4 col-xs-6">
        <div class="panel panel-default show-selector">
            <div class="panel-body">
                <img src="dist/img/shrek.png" alt="Shrek" class="img-responsive">
                <h3>Test</h3>
                <h5>This is a concept.</h5>
            </div>
        </div>
    </div>
</div>

<div class="collapse" id="show-details">
    <div class="row">
        <div class="col-sm-6 col-xs-12 col-ls-xs-6">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-xs-12">
                            <h4>Please select a show date and time.</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-12" id="datepicker-container"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-6 col-xs-12 col-ls-xs-6">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-xs-12">
                            <h4>Please specify the number of people in your group.</h4>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-6 col-xs-offset-3">
                            <input type="number" class="form-control" placeholder="Adults" id="adult-amount" min="0" max="30">
                        </div>
                    </div>

                    <br>

                    <div class="row">
                        <div class="col-xs-6 col-xs-offset-3">
                            <input type="number" class="form-control" placeholder="Children" id="child-amount" min="0" max="30">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-offset-10 col-xs-2">
            <a href="seats.html" class="btn btn-primary pull-right" role="button" id="select-seats-button">Select Seats</a>
        </div>
    </div>
</div>