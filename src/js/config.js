module.exports = {
  gitToken: '96ead73c54cbbf023a73ee57af145b205d460851',
  recasttoken: "26021d055040a9d9f1ad48476efab4a0",
  intentSlugToOperations: {
    createrepo: {
      requestMethod: 'post',
      intentMessage: 'Create a Repository in Github',
      getDataOperation: 'getCreateRepoJson',
      githubOperation: 'createRepository',
      showWidgetOperation: 'showCreateRepoWidget',
      populateDataOperation: 'populateCreateRepoData',
      successMessage: 'Repository Added!',
      cardMsg: 'Requested Repository has been added and is available at ',
      cardDataUrl: 'html_url',
      cardDataName: 'name',
    },
    createissue: {
      requestMethod: 'post',
      intentMessage: 'Raise an issue in Github',
      getDataOperation: 'getCreateIssueJson',
      githubOperation: 'createIssue',
      showWidgetOperation: 'showCreateIssueWidget',
      populateDataOperation: 'populateCreateIssueData',
      successMessage: 'Issue Created!',
      cardMsg: 'Issue Created as requested, issue details available at ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
    },
    closeissue: {
      requestMethod: 'post',
      intentMessage: 'Close an issue in Github',
      getDataOperation: 'getCloseIssueJson',
      githubOperation: 'closeIssue',
      showWidgetOperation: 'showCloseIssueWidget',
      populateDataOperation: 'populateCloseIssueData',
      successMessage: 'Issue Closed!',
      cardMsg: 'Issue Closed as requested, closed issue available at: ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
    },
    addissuecomment: {
      requestMethod: 'post',
      intentMessage: 'Add a comment on an issue in Github',
      getDataOperation: 'getAddCommentJson',
      githubOperation: 'addIssueComment',
      showWidgetOperation: 'showAddCommentWidget',
      populateDataOperation: 'populateAddCommentData',
      successMessage: 'Comment Added!',
      cardMsg: 'Comment Added as Requested, view here: ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
    },
    displaylastcomment: {
      requestMethod: 'get',
      intentMessage: 'Display last comment of an issue in Github',
      getDataOperation: 'getDisplayCommentJson',
      githubOperation: 'displayLastComment',
      showWidgetOperation: 'showDisplayCommentWidget',
      populateDataOperation: 'populateDisplayCommentData',
      successMessage: 'Comment Retrieved!',
      cardMsg: 'Please find requested comment below: ',
      cardDataUrl: 'html_url',
      cardDataName: 'title',
    },
    addcollab: {
      requestMethod: 'post',
      intentMessage: 'Add a collaborator',
      getDataOperation: 'getAddCollaboratorJson',
      githubOperation: 'addCollaborator',
      showWidgetOperation: 'showAddCollaboratorWidget',
      populateDataOperation: 'populateAddCollaboratorData',
      successMessage: 'Collaborator Added!',
      cardMsg: 'Collaborator added, details available at ',
      cardDataUrl: 'html_url',
      cardDataName: 'invitee,login',
    },
    viewrepos: {
      requestMethod: 'get',
      intentMessage: 'View Repositories for current user',
      getDataOperation: 'getViewRepositoryJson',
      githubOperation: 'viewRepositories',
      showWidgetOperation: 'showViewRepoWidget',
      populateDataOperation: 'populateViewRepoData',
      successMessage: 'Showing repositories',
      cardMsg: 'Repository Details available below: ',
      cardDataUrl: 'html_url',
      cardDataName: 'invitee,login',
    },
    resethistory: {
      requestMethod: 'purge',
      intentMessage: 'Clear all Operations History',
      successMessage: 'Purged!',
      cardMsg: 'Purged history of all Operations and Commands!'
    },
  },
  costants: {
    hiddenIntentFieldId: 'intentHidden',
  },
  actions: {
    createrepo: { type: 'ADD_REPO'},
    addcollab: { type: 'ADD_COLLAB'},
    createissue: { type: 'ADD_ISSUE'},
    addissuecomment: { type: 'ADD_COMMENT'},
    closeissue: { type: 'CLOSE_ISSUE'},
    displaylastcomment: { type: 'SHOW_LAST_COMMENT'},
    viewrepos: { type: 'VIEW_REPO' },
    action_add_query: { type: 'ADD_QUERY'},
    action_clear_history: { type: 'CLEAR_HISTORY' }
  }   
};
