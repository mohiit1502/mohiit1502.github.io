export const createrepo = `<div id="createrepo" class="card hide widget good">
    <div class="card-body">
        <div class="card-title">Create Repository</div>
        <form>
            <div class="form-row">
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="repositoryName">Repository Name</label>
                    <input type="text" id="repositoryName" placeholder="Repository Name... " class="form-control">
                </div>
                <div class="form-group col-md-6 col-sm-6 col-lg-6 col-xs-6 mb-3">
                    <label for="homePageURL">Home Page URL</label>
                    <input type="text" id="homePageURL" placeholder="Home Page URL... " class="form-control">
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-3 col-sm-3 col-lg-3 col-xs-3 mb-3">
                    <div class="form-check form-check-inline">
                        <input type="checkbox" id="privateRepoChk" value="Option 1" class="form-check-input">
                        <label for="privateRepoChk" class="form-check-label">Private</label>
                    </div>
                </div>
                <div class="form-group col-md-4 col-sm-4 col-lg-4 col-xs-4 mb-3">
                    <div class="form-check form-check-inline">
                        <input type="checkbox" id="issuesChk" value="Option 2" class="form-check-input">
                        <label for="issuesChk" class="form-check-label">Allow Adding Issues?</label>
                    </div>
                </div>
                <div class="form-group col-md-4 col-sm-4 col-lg-4 col-xs-4 mb-3">
                    <div class="form-check form-check-inline">
                        <input type="checkbox" id="wikiChk" value="Option 3" class="form-check-input">
                        <label for="wikiChk" class="form-check-label">Add Wiki?</label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="description">Add some Description for this repository:</label>
                <textarea rows="3" class="form-control" id="description"></textarea>
            </div>
            <button type="button" data-toggle="modal" data-target="#submitConfirm" id="submitForm" class="btn btn-primary">Submit</button>
        </form>
    </div>
</div>
`