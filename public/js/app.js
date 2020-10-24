(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NotFound.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NotFound.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {//console.log('Component mounted.')
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: new Form({
        id: '',
        name: '',
        email: '',
        password: '',
        type: '',
        bio: '',
        photo: ''
      })
    };
  },
  mounted: function mounted() {
    console.log('Component mounted.');
  },
  methods: {
    getProfilePhoto: function getProfilePhoto() {
      var photo = this.form.photo.length > 200 ? this.form.photo : "img/profile/" + this.form.photo;
      return "img/progile/" + this.form.photo;
      return photo;
    },
    updateInfo: function updateInfo() {
      var _this = this;

      this.$Progress.start();

      if (this.form.password == '') {
        this.form.password = undefined;
      }

      this.form.put('api/profile').then(function () {
        Fire.$emit('AfterCreate');

        _this.$Progress.finish();
      })["catch"](function () {
        _this.$Progress.fail();
      });
    },
    updateProfile: function updateProfile(e) {
      var _this2 = this;

      //console.log('uploading');
      var file = e.target.files[0];
      var reader = new FileReader();
      var limit = 1024 * 1024 * 2;

      if (file['size'] > limit) {
        swal.fire({
          type: 'error',
          title: 'Oops..',
          text: 'You are uploading a large file'
        });
        return false;
      } else {} //console.log(file);
      //let vm=this;


      reader.onloadend = function (file) {
        _this2.form.photo = reader.result; //console.log('RESULT', reader.result)
      };

      reader.readAsDataURL(file);
    }
  },
  created: function created() {
    var _this3 = this;

    axios.get("api/profile").then(function (_ref) {
      var data = _ref.data;
      return _this3.form.fill(data);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      editmode: false,
      users: {},
      form: new Form({
        id: '',
        name: '',
        username: '',
        password: '',
        type: '',
        bio: '',
        photo: ''
      })
    };
  },
  methods: {
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('api/user?page=' + page).then(function (response) {
        _this.users = response.data;
      });
    },
    updateUser: function updateUser(id) {
      var _this2 = this;

      this.$Progress.start(); //console.log('Editing data');

      this.form.put('api/user/' + this.form.id).then(function () {
        //success
        $('#addNew').modal('hide');
        swal.fire('Updated!', 'Information Has been Updated.', 'success');

        _this2.$Progress.finish();

        Fire.$emit('AfterCreate');
      })["catch"](function () {
        _this2.$Progress.fail();
      });
    },
    editModal: function editModal(user) {
      this.editmode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(user);
    },
    newModal: function newModal() {
      this.editmode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    deleteUser: function deleteUser(id) {
      var _this3 = this;

      swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        // Send request to the server
        if (result.value) {
          _this3.form["delete"]('api/user/' + id).then(function () {
            swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            Fire.$emit('AfterCreate');
          })["catch"](function () {
            swal.fire("Failed!", "There was something wronge.", "warning");
          });
        }
      });
    },
    loadUser: function loadUser() {
      var _this4 = this;

      if (this.$gate.isAdminOrAuthor()) {
        axios.get("api/user").then(function (_ref) {
          var data = _ref.data;
          return _this4.users = data;
        });
      }
    },
    createUser: function createUser() {
      var _this5 = this;

      this.$Progress.start();
      this.form.post('api/user').then(function () {
        Fire.$emit('AfterCreate');
        $('#addNew').modal('hide');
        toast({
          type: 'success',
          title: 'User Created in successfully'
        });

        _this5.$Progress.finish();
      })["catch"](function () {});
    }
  },
  created: function created() {
    var _this6 = this;

    Fire.$on('searching', function () {
      var query = _this6.$parent.search;
      axios.get('api/findUser?q=' + query).then(function (data) {
        _this6.users = data.data;
      })["catch"](function () {});
    });
    this.loadUser();
    Fire.$on('AfterCreate', function () {
      _this6.loadUser();
    }); //console.log('Component mounted.')
    //setInterval(() => this.loadUser(),3000);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  /*
   * The component's data.
   */
  data: function data() {
    return {
      tokens: []
    };
  },

  /**
   * Prepare the component (Vue 1.x).
   */
  ready: function ready() {
    this.prepareComponent();
  },

  /**
   * Prepare the component (Vue 2.x).
   */
  mounted: function mounted() {
    this.prepareComponent();
  },
  methods: {
    /**
     * Prepare the component (Vue 2.x).
     */
    prepareComponent: function prepareComponent() {
      this.getTokens();
    },

    /**
     * Get all of the authorized tokens for the user.
     */
    getTokens: function getTokens() {
      var _this = this;

      axios.get('/oauth/tokens').then(function (response) {
        _this.tokens = response.data;
      });
    },

    /**
     * Revoke the given token.
     */
    revoke: function revoke(token) {
      var _this2 = this;

      axios["delete"]('/oauth/tokens/' + token.id).then(function (response) {
        _this2.getTokens();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/Clients.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  /*
   * The component's data.
   */
  data: function data() {
    return {
      clients: [],
      createForm: {
        errors: [],
        name: '',
        redirect: ''
      },
      editForm: {
        errors: [],
        name: '',
        redirect: ''
      }
    };
  },

  /**
   * Prepare the component (Vue 1.x).
   */
  ready: function ready() {
    this.prepareComponent();
  },

  /**
   * Prepare the component (Vue 2.x).
   */
  mounted: function mounted() {
    this.prepareComponent();
  },
  methods: {
    /**
     * Prepare the component.
     */
    prepareComponent: function prepareComponent() {
      this.getClients();
      $('#modal-create-client').on('shown.bs.modal', function () {
        $('#create-client-name').focus();
      });
      $('#modal-edit-client').on('shown.bs.modal', function () {
        $('#edit-client-name').focus();
      });
    },

    /**
     * Get all of the OAuth clients for the user.
     */
    getClients: function getClients() {
      var _this = this;

      axios.get('/oauth/clients').then(function (response) {
        _this.clients = response.data;
      });
    },

    /**
     * Show the form for creating new clients.
     */
    showCreateClientForm: function showCreateClientForm() {
      $('#modal-create-client').modal('show');
    },

    /**
     * Create a new OAuth client for the user.
     */
    store: function store() {
      this.persistClient('post', '/oauth/clients', this.createForm, '#modal-create-client');
    },

    /**
     * Edit the given client.
     */
    edit: function edit(client) {
      this.editForm.id = client.id;
      this.editForm.name = client.name;
      this.editForm.redirect = client.redirect;
      $('#modal-edit-client').modal('show');
    },

    /**
     * Update the client being edited.
     */
    update: function update() {
      this.persistClient('put', '/oauth/clients/' + this.editForm.id, this.editForm, '#modal-edit-client');
    },

    /**
     * Persist the client to storage using the given form.
     */
    persistClient: function persistClient(method, uri, form, modal) {
      var _this2 = this;

      form.errors = [];
      axios[method](uri, form).then(function (response) {
        _this2.getClients();

        form.name = '';
        form.redirect = '';
        form.errors = [];
        $(modal).modal('hide');
      })["catch"](function (error) {
        if (_typeof(error.response.data) === 'object') {
          form.errors = _.flatten(_.toArray(error.response.data.errors));
        } else {
          form.errors = ['Something went wrong. Please try again.'];
        }
      });
    },

    /**
     * Destroy the given client.
     */
    destroy: function destroy(client) {
      var _this3 = this;

      axios["delete"]('/oauth/clients/' + client.id).then(function (response) {
        _this3.getClients();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  /*
   * The component's data.
   */
  data: function data() {
    return {
      accessToken: null,
      tokens: [],
      scopes: [],
      form: {
        name: '',
        scopes: [],
        errors: []
      }
    };
  },

  /**
   * Prepare the component (Vue 1.x).
   */
  ready: function ready() {
    this.prepareComponent();
  },

  /**
   * Prepare the component (Vue 2.x).
   */
  mounted: function mounted() {
    this.prepareComponent();
  },
  methods: {
    /**
     * Prepare the component.
     */
    prepareComponent: function prepareComponent() {
      this.getTokens();
      this.getScopes();
      $('#modal-create-token').on('shown.bs.modal', function () {
        $('#create-token-name').focus();
      });
    },

    /**
     * Get all of the personal access tokens for the user.
     */
    getTokens: function getTokens() {
      var _this = this;

      axios.get('/oauth/personal-access-tokens').then(function (response) {
        _this.tokens = response.data;
      });
    },

    /**
     * Get all of the available scopes.
     */
    getScopes: function getScopes() {
      var _this2 = this;

      axios.get('/oauth/scopes').then(function (response) {
        _this2.scopes = response.data;
      });
    },

    /**
     * Show the form for creating new tokens.
     */
    showCreateTokenForm: function showCreateTokenForm() {
      $('#modal-create-token').modal('show');
    },

    /**
     * Create a new personal access token.
     */
    store: function store() {
      var _this3 = this;

      this.accessToken = null;
      this.form.errors = [];
      axios.post('/oauth/personal-access-tokens', this.form).then(function (response) {
        _this3.form.name = '';
        _this3.form.scopes = [];
        _this3.form.errors = [];

        _this3.tokens.push(response.data.token);

        _this3.showAccessToken(response.data.accessToken);
      })["catch"](function (error) {
        if (_typeof(error.response.data) === 'object') {
          _this3.form.errors = _.flatten(_.toArray(error.response.data.errors));
        } else {
          _this3.form.errors = ['Something went wrong. Please try again.'];
        }
      });
    },

    /**
     * Toggle the given scope in the list of assigned scopes.
     */
    toggleScope: function toggleScope(scope) {
      if (this.scopeIsAssigned(scope)) {
        this.form.scopes = _.reject(this.form.scopes, function (s) {
          return s == scope;
        });
      } else {
        this.form.scopes.push(scope);
      }
    },

    /**
     * Determine if the given scope has been assigned to the token.
     */
    scopeIsAssigned: function scopeIsAssigned(scope) {
      return _.indexOf(this.form.scopes, scope) >= 0;
    },

    /**
     * Show the given access token to the user.
     */
    showAccessToken: function showAccessToken(accessToken) {
      $('#modal-create-token').modal('hide');
      this.accessToken = accessToken;
      $('#modal-access-token').modal('show');
    },

    /**
     * Revoke the given token.
     */
    revoke: function revoke(token) {
      var _this4 = this;

      axios["delete"]('/oauth/personal-access-tokens/' + token.id).then(function (response) {
        _this4.getTokens();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import MonthlyIncome from ''
// import VueApexCharts from "apexcharts";

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {// "apexchart": VueApexCharts,
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("dashboard", {
    cards: function cards(state) {
      return state.cards;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("dashboard", ["getCards", "getReport"])),
  mounted: function mounted() {
    console.log('Component mounted.');
  },
  created: function created() {
    this.getReport();
    this.getCards();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Developer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Developer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Add.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/Add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormEdit_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormEdit.vue */ "./resources/js/views/logs/FormEdit.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["CLEAR_ERRORS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["toastSuccess"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["submitLog"]), {
    submit: function submit() {
      var _this = this;

      this.$Progress.start();
      this.submitLog().then(function () {
        _this.$router.push({
          name: "logs.data"
        });

        _this.$Progress.finish();

        _this.toastSuccess();
      });
    }
  }),
  created: function created() {
    this.CLEAR_ERRORS();
  },
  components: {
    "log-form": _FormEdit_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/views/logs/Form.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.editLog(this.$route.params.id);
    this.getLogs();
    this.CLEAR_ERRORS();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["CLEAR_ERRORS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["toastSuccess"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["editLog", "updateLog", "getLogs"]), {
    submit: function submit() {
      var _this = this;

      this.$Progress.start();
      this.updateLog(this.$route.params.id).then(function () {
        _this.$router.push({
          name: "logs.data"
        });

        _this.$Progress.finish();

        _this.toastSuccess();
      });
    }
  }),
  components: {
    "log-form": _Form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { Money } from "v-money"
// import { ModelSelect } from 'vue-search-select'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      statuses: [{
        'name': 'TODO'
      }, {
        'name': 'DOING'
      }, {
        'name': 'REVIEW'
      }, {
        'name': 'DONE'
      }] // categories: [
      //     {'id': 1,'name': 'Suplier'},
      //     {'id': 2,'name': 'Foodline'},
      //     {'id': 3,'name': 'Hardline'},
      //     {'id': 4,'name': 'Softline'},
      // ]

    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["errors"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    log: function log(state) {
      return state.log;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    categories: function categories(state) {
      return state.categories;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    subcategories: function subcategories(state) {
      return state.subcategories;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("log", ["CLEAR_FORM"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["CLEAR_ERRORS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["getCategories", "getSubCategories"])),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  },
  created: function created() {
    this.CLEAR_FORM();
    this.getCategories();
    this.getSubCategories();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/FormEdit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/FormEdit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { Money } from "v-money"
// import { ModelSelect } from 'vue-search-select'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      statuses: [{
        'name': 'TODO'
      }, {
        'name': 'DOING'
      }, {
        'name': 'REVIEW'
      }, {
        'name': 'DONE'
      }] // categories: [
      //     {'id': 1,'name': 'Suplier'},
      //     {'id': 2,'name': 'Foodline'},
      //     {'id': 3,'name': 'Hardline'},
      //     {'id': 4,'name': 'Softline'},
      // ]

    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["errors"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    log: function log(state) {
      return state.log;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    categories: function categories(state) {
      return state.categories;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    subcategories: function subcategories(state) {
      return state.subcategories;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("log", ["CLEAR_FORM"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["CLEAR_ERRORS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["getCategories", "getSubCategories"])),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  },
  created: function created() {
    this.CLEAR_FORM();
    this.getCategories();
    this.getSubCategories();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Log.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/Log.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getLogs();
  },
  data: function data() {
    return {
      search: "",
      enabled: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["log"]), {
    page: {
      get: function get() {
        return this.$store.state.log.page;
      },
      set: function set(val) {
        this.$store.commit("log/SET_PAGE", val);
      }
    }
  }),
  watch: {
    page: function page() {
      this.getLogs();
    },
    search: function search() {
      this.getLogs(this.search);
    }
  },
  methods: _objectSpread({
    clear: function clear() {
      // this.getDocumentFilter(this.search);
      this.$store.commit("log/CLEAR_FILTER");
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["getLogs", "removeLog"]), {
    deleteLog: function deleteLog(id) {
      var _this = this;

      var swalWithBootstrapButtons = swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");

          _this.removeLog(id).then(function () {
            // Fire.$emit("AfterCreate");
            swal("Deleted!", "Your file has been deleted.", "success");
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Add.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/Add.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FormEdit_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormEdit.vue */ "./resources/js/views/reports/FormEdit.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["CLEAR_ERRORS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["toastSuccess"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["submitLog"]), {
    submit: function submit() {
      var _this = this;

      this.$Progress.start();
      this.submitLog().then(function () {
        _this.$router.push({
          name: "logs.data"
        });

        _this.$Progress.finish();

        _this.toastSuccess();
      });
    }
  }),
  created: function created() {
    this.CLEAR_ERRORS();
  },
  components: {
    "log-form": _FormEdit_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Edit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/Edit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Form_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue */ "./resources/js/views/reports/Form.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.editLog(this.$route.params.id);
    this.getLogs();
    this.CLEAR_ERRORS();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["CLEAR_ERRORS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["toastSuccess"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["editLog", "updateLog", "getLogs"]), {
    submit: function submit() {
      var _this = this;

      this.$Progress.start();
      this.updateLog(this.$route.params.id).then(function () {
        _this.$router.push({
          name: "logs.data"
        });

        _this.$Progress.finish();

        _this.toastSuccess();
      });
    }
  }),
  components: {
    "log-form": _Form_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { Money } from "v-money"
// import { ModelSelect } from 'vue-search-select'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      statuses: [{
        'name': 'TODO'
      }, {
        'name': 'DOING'
      }, {
        'name': 'REVIEW'
      }, {
        'name': 'DONE'
      }] // categories: [
      //     {'id': 1,'name': 'Suplier'},
      //     {'id': 2,'name': 'Foodline'},
      //     {'id': 3,'name': 'Hardline'},
      //     {'id': 4,'name': 'Softline'},
      // ]

    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["errors"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    log: function log(state) {
      return state.log;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    categories: function categories(state) {
      return state.categories;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    subcategories: function subcategories(state) {
      return state.subcategories;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("log", ["CLEAR_FORM"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["CLEAR_ERRORS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["getCategories", "getSubCategories"])),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  },
  created: function created() {
    this.CLEAR_FORM();
    this.getCategories();
    this.getSubCategories();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/FormEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/FormEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { Money } from "v-money"
// import { ModelSelect } from 'vue-search-select'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      statuses: [{
        'name': 'TODO'
      }, {
        'name': 'DOING'
      }, {
        'name': 'REVIEW'
      }, {
        'name': 'DONE'
      }] // categories: [
      //     {'id': 1,'name': 'Suplier'},
      //     {'id': 2,'name': 'Foodline'},
      //     {'id': 3,'name': 'Hardline'},
      //     {'id': 4,'name': 'Softline'},
      // ]

    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["errors"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    log: function log(state) {
      return state.log;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    categories: function categories(state) {
      return state.categories;
    }
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("log", {
    subcategories: function subcategories(state) {
      return state.subcategories;
    }
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("log", ["CLEAR_FORM"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(["CLEAR_ERRORS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["getCategories", "getSubCategories"])),
  destroyed: function destroyed() {
    this.CLEAR_FORM();
  },
  created: function created() {
    this.CLEAR_FORM();
    this.getCategories();
    this.getSubCategories();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Report.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/Report.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getLogs();
  },
  data: function data() {
    return {
      search: "",
      enabled: true
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["log"]), {
    page: {
      get: function get() {
        return this.$store.state.log.page;
      },
      set: function set(val) {
        this.$store.commit("log/SET_PAGE", val);
      }
    }
  }),
  watch: {
    page: function page() {
      this.getLogs();
    },
    search: function search() {
      this.getLogs(this.search);
    }
  },
  methods: _objectSpread({
    print: function print() {
      window.print();
    },
    clear: function clear() {
      // this.getDocumentFilter(this.search);
      this.$store.commit("log/CLEAR_FILTER");
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("log", ["getLogs", "removeLog"]), {
    deleteLog: function deleteLog(id) {
      var _this = this;

      var swalWithBootstrapButtons = swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");

          _this.removeLog(id).then(function () {
            // Fire.$emit("AfterCreate");
            swal("Deleted!", "Your file has been deleted.", "success");
          });
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.widget-user-header{\n    background-position: center center;\n    background-size: cover;\n    height: 400px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.action-link[data-v-397d14ca] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.action-link[data-v-1552a5b6] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.action-link[data-v-49962cc0] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Example Component")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v(
                "\n                    I'm an example component.\n                "
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-10 mt-4" }, [
        _c("h3", [_vm._v(" Not Found what you're looking ")]),
        _vm._v(" "),
        _c(
          "svg",
          {
            attrs: {
              id: "c72640af-2824-4ace-a782-4df73f48977c",
              "data-name": "Layer 1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              width: "600",
              height: "100%",
              viewBox: "0 0 1143.14 862.91"
            }
          },
          [
            _c(
              "defs",
              [
                _c(
                  "linearGradient",
                  {
                    attrs: {
                      id: "969f2d34-5bff-4fc3-8c31-c6509eddc389",
                      x1: "551.46",
                      y1: "688.44",
                      x2: "551.46",
                      y2: "150.11",
                      gradientUnits: "userSpaceOnUse"
                    }
                  },
                  [
                    _c("stop", {
                      attrs: {
                        offset: "0",
                        "stop-color": "gray",
                        "stop-opacity": "0.25"
                      }
                    }),
                    _c("stop", {
                      attrs: {
                        offset: "0.54",
                        "stop-color": "gray",
                        "stop-opacity": "0.12"
                      }
                    }),
                    _c("stop", {
                      attrs: {
                        offset: "1",
                        "stop-color": "gray",
                        "stop-opacity": "0.1"
                      }
                    })
                  ],
                  1
                ),
                _c("linearGradient", {
                  attrs: {
                    id: "488cd128-ff9c-494f-bd41-35fb6c1caf21",
                    x1: "1059.46",
                    y1: "856.62",
                    x2: "1059.46",
                    y2: "468.94",
                    "xlink:href": "#969f2d34-5bff-4fc3-8c31-c6509eddc389"
                  }
                }),
                _c("linearGradient", {
                  attrs: {
                    id: "ccb18d0b-874b-442a-b8cb-57bcf76cdeb5",
                    x1: "814.74",
                    y1: "881.34",
                    x2: "814.74",
                    y2: "496.8",
                    gradientTransform:
                      "matrix(-1, -0.04, -0.04, 1, 1070.86, 21.29)",
                    "xlink:href": "#969f2d34-5bff-4fc3-8c31-c6509eddc389"
                  }
                })
              ],
              1
            ),
            _c("title", [_vm._v("content")]),
            _c("ellipse", {
              attrs: {
                cx: "1023.75",
                cy: "834.07",
                rx: "100.11",
                ry: "24.73",
                fill: "#6c63ff",
                opacity: "0.1"
              }
            }),
            _c("ellipse", {
              attrs: {
                cx: "140.04",
                cy: "838.19",
                rx: "100.11",
                ry: "24.73",
                fill: "#6c63ff",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M713.17,251.41s-14.07-5.71-58.81,14.82S604,284.14,592.44,281s-18-3.88-30.46-21c0,0-8.76-47.48-17.23-54.84s-44.5,4.19-44.5,4.19-43.19,9.91-51.42-47.81c0,0,5.84-43.51-2.11-56.86,0,0,16,6.93,42.54-4.25s47.69,12,47.69,12,6.68,17.3,6,27.61,3.53,14.18,16.17,9.2c0,0,6.2-8.83-2.59-23.42s-15.06-25.47-12.6-36.8,9.5-27,32.16-34.9,53.44-9.38,68.22-15.53,18.35-10.15,18.35-10.15S653.55,37.58,675,76.19s7.77,55.38,7.77,55.38-11.4,27.16-61.7,25c0,0-48.47,1.77-22,22.33,0,0,16.93-3.45,42.23-11.49s43.57,25.15,48.1,48.25S713.17,251.41,713.17,251.41Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#6c63ff"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M648,57.75l.27-.07c1.94,7.37-19.73,37-38.24,60.53l-.22-.17C635.94,84.83,649.51,63.42,648,57.75Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#444053"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M610.2,117.55l.11.3c-14.79,18.81-33.39,41.25-48.28,57.87-1.42,1.59-2.83,3.25-4.19,4.95l-.42-.35c1.36-1.7,2.78-3.37,4.2-5C576.5,158.75,595.42,136.35,610.2,117.55Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#444053"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M557.78,179.88l.29.5c-27.1,33.83-28.89,86.36-29,86.82l-5.72-6.6C523.47,260.14,530.49,213.94,557.78,179.88Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#444053"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M681.74,233.06s-32-16.61-56.85-10.65-81-21.06-81-21.06-23.81-9.68-28.59-20.7c0,0-16.33-17.26-17.26-26.2s-16.83-31.4-27.2-32.27",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M677.12,249.05S661,238.21,662.9,225.58",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M652.43,263.06s-23-8.36-25.32-41.11",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M615.3,271.54s-22-18.25-14.69-50.13",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M570.68,262.62s-14.65-30.71-1.62-50.69",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M682.12,212.82s-16.65,5.28-13.08,14",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M662,182.61s-22.27,7.07-22.8,38.57",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M631,175.34s-20.26,25-18.77,47.75",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M595.48,185.15s-20.13,19.24-17.56,29.95",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M583.34,178.35s-18.88,3.39-21.52-2.81",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M558.81,155.56s9.54,12.63,12,9.8",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M653.36,147.57S605.78,151,595,136.68",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M548.8,91.91s22.33,47.93,38.54,54",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M572.22,69.08s13.72,44.09,30.71,57.85",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M673.39,111.19s-36.19,15.53-57.92-.18",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10",
                "stroke-width": "0.75"
              }
            }),
            _c("path", {
              attrs: {
                d: "M604.46,59.68s8.27,32.41,19.41,40.24",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10",
                "stroke-width": "0.75"
              }
            }),
            _c("path", {
              attrs: {
                d: "M667.92,74.89s-20.33,7.7-27.93,1.8",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10",
                "stroke-width": "0.75"
              }
            }),
            _c("path", {
              attrs: {
                d: "M541.39,166.15s0,28.25-7.69,30.26",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M478.52,202.75s30.54,2.62,44.63-13.14",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M533.51,132.78s-7.39,28.65-27.78,36.37",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M460.2,172.57s21.62,7.52,40.21-11.62",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M509.47,108.15s-2,24.33-15.27,35.72",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d: "M461,135.49s17.94.13,22.14-5.72",
                transform: "translate(-28.43 -18.54)",
                fill: "none",
                stroke: "#444053",
                "stroke-miterlimit": "10"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M620.4,156c-71.4,11.91-142.91,5.5-211.75-3.38s-137.52-20.22-209.07-18c-46,1.44-97.17,10.48-129,38.22-30.62,26.69-35,63.18-34.71,96.18.22,24.82,2.55,50.53,19.36,70.49,11.67,13.85,29.51,23.91,43,36.72,47,44.58,33.67,113.64,3.91,172.12-14,27.44-31.11,54.37-40.5,82.5S51.32,689.28,69,712.57c17.54,23.09,51.09,36.39,86,43.52,70.89,14.47,149.57,7,225.67-3.39,168.44-23.11,335-60.49,501.08-97.8,61.47-13.8,123.21-27.68,182.35-48,32.84-11.26,66.25-25.43,87.28-47.84,26.69-28.45,26.93-67.72.56-91.54-44.24-40-143.21-32.48-177.6-78-18.94-25-11.23-58.62,3.24-88.17,31-63.4,91.75-125.65,83-189.36-6-43.76-48.38-80.4-104.68-90.53-59-10.61-134.41,7.11-167.78,50.62C753.76,117,683.44,145.5,620.4,156Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#6c63ff",
                opacity: "0.1"
              }
            }),
            _c("rect", {
              attrs: {
                x: "76.29",
                y: "150.11",
                width: "950.33",
                height: "538.33",
                rx: "12.49",
                ry: "12.49",
                fill: "url(#969f2d34-5bff-4fc3-8c31-c6509eddc389)"
              }
            }),
            _c("rect", {
              attrs: {
                x: "77.8",
                y: "157.68",
                width: "947.42",
                height: "528.97",
                rx: "12.49",
                ry: "12.49",
                fill: "#fff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "77.8",
                y: "157.68",
                width: "947.42",
                height: "528.97",
                rx: "12.49",
                ry: "12.49",
                fill: "#fff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "77.8",
                y: "157.68",
                width: "947.42",
                height: "528.97",
                rx: "12.49",
                ry: "12.49",
                fill: "#5a5773",
                opacity: "0.04"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1048.84,170.15H111a4.81,4.81,0,0,0-4.81,4.81V195.3h947.42V175A4.81,4.81,0,0,0,1048.84,170.15Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#5a5773"
              }
            }),
            _c(
              "g",
              {
                attrs: {
                  id: "83eb5f8b-b68b-4721-b047-6100bc74156f",
                  "data-name": "buttons"
                }
              },
              [
                _c("circle", {
                  attrs: { cx: "96.72", cy: "164.18", r: "6.5", fill: "#fff" }
                }),
                _c("circle", {
                  attrs: { cx: "114.22", cy: "164.18", r: "6.5", fill: "#fff" }
                }),
                _c("circle", {
                  attrs: { cx: "131.72", cy: "164.18", r: "6.5", fill: "#fff" }
                })
              ]
            ),
            _c("rect", {
              attrs: {
                x: "141.22",
                y: "293.86",
                width: "790",
                height: "392.78",
                rx: "10.19",
                ry: "10.19",
                fill: "#fff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "107.72",
                y: "203.45",
                width: "227.24",
                height: "23.85",
                rx: "3.86",
                ry: "3.86",
                fill: "#5a5773",
                opacity: "0.2"
              }
            }),
            _c("rect", {
              attrs: {
                x: "536.22",
                y: "339.45",
                width: "227.24",
                height: "23.85",
                rx: "3.86",
                ry: "3.86",
                fill: "#6c63ff",
                opacity: "0.2"
              }
            }),
            _c("rect", {
              attrs: {
                x: "536.22",
                y: "406.23",
                width: "354.83",
                height: "23.85",
                rx: "3.86",
                ry: "3.86",
                fill: "#6c63ff",
                opacity: "0.2"
              }
            }),
            _c("rect", {
              attrs: {
                x: "536.22",
                y: "445.23",
                width: "354.83",
                height: "23.85",
                rx: "3.86",
                ry: "3.86",
                fill: "#6c63ff",
                opacity: "0.2"
              }
            }),
            _c("rect", {
              attrs: {
                x: "536.22",
                y: "484.23",
                width: "354.83",
                height: "23.85",
                rx: "3.86",
                ry: "3.86",
                fill: "#6c63ff",
                opacity: "0.2"
              }
            }),
            _c("rect", {
              attrs: {
                x: "536.22",
                y: "523.23",
                width: "354.83",
                height: "23.85",
                rx: "3.86",
                ry: "3.86",
                fill: "#6c63ff",
                opacity: "0.2"
              }
            }),
            _c("rect", {
              attrs: {
                x: "184.05",
                y: "566.23",
                width: "707",
                height: "23.85",
                rx: "3.86",
                ry: "3.86",
                fill: "#6c63ff",
                opacity: "0.2"
              }
            }),
            _c("rect", {
              attrs: {
                x: "184.05",
                y: "605.23",
                width: "707",
                height: "23.85",
                rx: "3.86",
                ry: "3.86",
                fill: "#6c63ff",
                opacity: "0.2"
              }
            }),
            _c("rect", {
              attrs: {
                x: "184.05",
                y: "644.23",
                width: "707",
                height: "23.85",
                rx: "3.86",
                ry: "3.86",
                fill: "#6c63ff",
                opacity: "0.2"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M757.73,678.54s5.93,7.75-2.74,19.46-15.81,21.59-12.92,28.89c0,0,13.07-21.74,23.72-22S769.44,691.61,757.73,678.54Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#6c63ff"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M757.73,678.54a9.6,9.6,0,0,1,1.21,2.43c10.39,12.2,15.92,23.59,5.94,23.87-9.3.27-20.46,16.9-23.13,21.09a7.72,7.72,0,0,0,.32,1s13.07-21.74,23.72-22S769.44,691.61,757.73,678.54Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M768.75,688.42c0,2.73-.3,4.94-.68,4.94s-.68-2.21-.68-4.94.38-1.44.76-1.44S768.75,685.69,768.75,688.42Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#ffd037"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M772.54,691.68c-2.4,1.3-4.49,2.09-4.67,1.76s1.62-1.66,4-3,1.45-.36,1.63,0S774.93,690.37,772.54,691.68Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#ffd037"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M726.41,678.54s-5.93,7.75,2.73,19.46,15.82,21.59,12.93,28.89c0,0-13.08-21.74-23.72-22S714.7,691.61,726.41,678.54Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#6c63ff"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M726.41,678.54a9.39,9.39,0,0,0-1.22,2.43c-10.38,12.2-15.91,23.59-5.93,23.87,9.3.27,20.45,16.9,23.12,21.09a7.68,7.68,0,0,1-.31,1s-13.08-21.74-23.72-22S714.7,691.61,726.41,678.54Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M715.38,688.42c0,2.73.31,4.94.69,4.94s.68-2.21.68-4.94S716.37,687,716,687,715.38,685.69,715.38,688.42Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#ffd037"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M711.6,691.68c2.4,1.3,4.49,2.09,4.67,1.76s-1.62-1.66-4-3-1.45-.36-1.63,0S709.2,690.37,711.6,691.68Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#ffd037"
              }
            }),
            _c("ellipse", {
              attrs: {
                cx: "713.64",
                cy: "758.15",
                rx: "62",
                ry: "9.51",
                fill: "#6c63ff",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M774,716.44l-.3,2.42-.41,3.42-.18,1.43-.41,3.42-.18,1.43-.42,3.41-4.74,38.9c-.43,3.47-6.1,6.18-13,6.18H729.74c-6.85,0-12.51-2.71-12.93-6.18L712.05,732l-.41-3.41-.18-1.43-.42-3.42-.17-1.43-.42-3.42-.3-2.42c-.23-2,2.84-3.62,6.71-3.62h50.42C771.15,712.82,774.22,714.47,774,716.44Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#65617d"
              }
            }),
            _c("polygon", {
              attrs: {
                points:
                  "745.25 700.32 744.84 703.74 682.44 703.74 682.02 700.32 745.25 700.32",
                fill: "#9d9cb5"
              }
            }),
            _c("polygon", {
              attrs: {
                points:
                  "744.66 705.16 744.25 708.58 683.03 708.58 682.61 705.16 744.66 705.16",
                fill: "#9d9cb5"
              }
            }),
            _c("polygon", {
              attrs: {
                points:
                  "744.07 710.01 743.65 713.43 683.62 713.43 683.21 710.01 744.07 710.01",
                fill: "#9d9cb5"
              }
            }),
            _c("rect", {
              attrs: {
                x: "184.05",
                y: "326.22",
                width: "302",
                height: "221.54",
                rx: "8.5",
                ry: "8.5",
                fill: "#6c63ff",
                opacity: "0.2"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1153.48,591.15c.38-1-2.44-6.72-2.44-7s-2.91-3.45-2.91-5.22-3.85-5.6-3.85-5.6-5.17-2.14-5.73-6.81-6.19-4.75-6.2-4.75h0s0-.42,0-1.07a14.72,14.72,0,0,0-.69-5.45,5.49,5.49,0,0,0-3.19-2.71s-.57-3.64-1.69-4.76a5.35,5.35,0,0,1-1.32-5c.57-1.76-.75-6.24-3.47-6.9s-5.83-1.68-5.83-1.68l-.75.13-.37-.13a15.59,15.59,0,0,1-2,.25,2.47,2.47,0,0,1-1.59-.52c-.94-1-8.55-3-10-3s-5.45-1.87-5.45-1.87-2.82-2.14-4-3.08-3.23-4.35-3.54-4.87l0-.07h0l0,0a17.25,17.25,0,0,1-.85-2.45h0a22.06,22.06,0,0,0,3.49-4.81c.1-.18.19-.36.28-.55a2.1,2.1,0,0,0,.61-.09l.25-.1a4.06,4.06,0,0,0,2-2.38h0a6.32,6.32,0,0,0,.18-.62c0-.07,0-.14,0-.21l.09-.42a2,2,0,0,1,0-.24l.06-.42,0-.24c0-.18,0-.35.07-.53h0a18.7,18.7,0,0,1,.29-2v0h0c.56-2.53,2.09-4.67,3.16-7h0c.15-.33.3-.67.43-1s.26-.75.37-1.13l.09-.35c.07-.28.13-.56.19-.84s0-.25.07-.38q.09-.57.15-1.17a14.46,14.46,0,0,0-1-6.55c-.7-1.75-1.75-3.33-2.46-5.08-1.08-2.65-1.37-5.66-2.68-8.19a9.75,9.75,0,0,0-11.7-4.76c-2,.76-3.82,2.23-5.89,2.89-2.78.89-5.74.22-8.62-.17s-6-.44-8.36,1.44c-2.66,2.16-3.38,6.22-5.88,8.59-1,1-2.35,1.63-3.46,2.55a5.65,5.65,0,0,0-1.74,2.38l-.06.19a1.83,1.83,0,0,0-.06.25,2.33,2.33,0,0,0-.05.28,1.11,1.11,0,0,0,0,.19,2.09,2.09,0,0,0,0,.5h0a3.81,3.81,0,0,0,.07.47l0,.13c0,.13.07.26.12.39s0,.05,0,.07.11.29.17.43l.09.21c0,.06,0,.12.08.17a12.44,12.44,0,0,1,.87,2.17,2.41,2.41,0,0,1-.09,1.43,4.22,4.22,0,0,1-1,1.37,19.35,19.35,0,0,0-4.24,6.79q-.17.44-.3.87v0l.13,0a5.68,5.68,0,0,0,.82.17,4,4,0,0,0,.47,0,7.32,7.32,0,0,0,1.92-.14l.48-.12a10.87,10.87,0,0,0,1.9-.69c0,.19,0,.38,0,.57s0,.21,0,.32a22.18,22.18,0,0,0,12.33,19.84c0,.2.05.4.08.6l.06.51-.25-.24s-1.69-.84-3.29,1.58a10.62,10.62,0,0,1-4.6,3.55s-17.1,2.7-17.76,4.94l-8,.47s-2.82.37-3.1,6.25-1.78,6.43-1.78,6.43-3.29,5.79-3,8.77a4.89,4.89,0,0,1-2.54,4.48l-.37,5.32s-3.1-.47-4,3.17a12.65,12.65,0,0,1-2.34,5.31s-5.17,4.3-5.45,7.93l-3.2,2s-7.42-1.68-9.11-4.66c0,0-.2-.2-.52-.49l0-.07v0c-1.11-1-3.46-3.24-3.1-2.73a2.25,2.25,0,0,1,.15,1.5l-.55-.61-1.48-1.64s-12-11.24-19-12.13h0c-.09-.18-.55-2-1.75-.85a9.8,9.8,0,0,0-.07,14.37l11.24,10.49.29.21,2.41,3.1c-.41,1-.75,1.92-1,2.78l0,.09-.18.54a1.21,1.21,0,0,0-.05.18c-.06.18-.11.35-.16.52l-.09.3c0,.06,0,.12,0,.18-.27.94-.44,1.66-.52,2.06l-.63-.2.61.27,0,.09c0,.13,0,.2,0,.2l.58.25c3.29,1.43,19.71,8.64,20.55,9.73s7.14,4.76,12.78,1.77,6.85-7.55,6.85-7.55,5.45-7.56,5.64-8.68,4.41-2.42,4.41-2.42.38,12.49-1.78,17.07-6.2,24.81-6.2,24.81a2.86,2.86,0,0,1,.8,0l-.24,1.17a2.72,2.72,0,0,1,1,0c-.3,2.3-2,13-2,13s-.56,4.85-1.5,6.53-1,10.45-1,10.45l-1.51,6.34s.2.44.57,1.09v0a16.23,16.23,0,0,0,4.32,5.59,11.06,11.06,0,0,1-.76,2.9,10.2,10.2,0,0,0-.75,4.48s-1.59,7.18-1.41,9.23-1,7.09-1,7.09l-1.69,16.23s-1.12,14.08-.56,17.91a34.37,34.37,0,0,1-.38,9s1.13,11.1.85,12.31-1.69,6.44-.85,9.33.38,10.82.38,10.82.56,10.45,1.22,13.81a23.64,23.64,0,0,1-.19,7.65s-.66,7.18-.94,7.18-2.72,4.94,2.25,9.79,1.89,4.1,1.89,4.1-4-2-3.48,2.06c.44,3.81,1.06,2.82,1.12,2.71l-.94,3.07.66.09-.54.65a14.05,14.05,0,0,1-1.9,2,4.07,4.07,0,0,0-1.22,2.7s-6.95,7.56-13.43,11.38c-3.41,2-6.35,3.71-7.63,5.13-1.16,1.26-1,2.28,1.43,3.08,5.07,1.68,14,2.52,20.38.37a23.84,23.84,0,0,0,10-6.43s4-2.06,8-1.31,11.84-4.38,11.84-4.38l-.15-1.32-.41-3.82a3,3,0,0,1-.66-2.32,12,12,0,0,0-.33-3.36c-.07-.37-.14-.74-.21-1.08l.72-.14s-.93-4.75.76-5.69,1.21-13.15,1.21-13.15-2.15-2.8-3.28-3.26-.1-6.26.1-7,1.69-15.21,1.69-15.21-.57-4.56.18-6.52-.94-9.52-.94-9.52a1.74,1.74,0,0,1,.47-2.05c1-1.12.66-11.1.66-11.1s-.09-5-.09-6.35,1.12-6.06,2.16-7.64.37-6.53.37-6.53v0l.06-.37c0-.14,0-.32.08-.53l.08-.5a72.67,72.67,0,0,1,1.84-8.1c1.22-3.91,2.63-10.81,2.63-10.81l8.73-22.78.1-.27s4,7.46,4,14.37c0,0,1,8.3.76,10.54S1065,728,1065,728s1.22,15.11,1.22,15.76,1.51,12.31,2.45,14.09-.94,7.18-1.51,7.74.19,14.27.19,14.27-1.41,10.82-1.69,13.06-1.41,10.82-.47,14.18.56,3.82.56,3.82,3.39,3.46,1.41,3.74a5.17,5.17,0,0,0-3.76,6.8,89.61,89.61,0,0,0,4.14,10l1.56-.33,0,1.11.11,5.56s.66,5.31.28,6.53c-.27.88-.65,5.06-.83,7.25-.07.8-.11,1.33-.11,1.33s0,4.94,10.43,3.45,12.3-5.6,12.3-5.6l.08-.51c.15-.94.49-2.94.77-4.06.37-1.49-3-8.21-3-8.21s-.56-4.57-1.5-5.59a5,5,0,0,1-.76-2c-.08-.38-.16-.77-.22-1.15a6.78,6.78,0,0,1,.7.12s-.57-3.26,1.6-4.29,1.59-3.17,1.31-4.1.84-6.16.84-6.16a3,3,0,0,1,.75-3c1.32-1.31,2.35-10.45,2.35-10.45l.19-35.26s.66-6.25-.09-8.77-1.5-7.37-.47-8.68.09-7.36.09-7.36,0-12.78,1.41-16,.94-23.23.94-23.23l.37-13.15s3.07-2.9,2.35-18c3.27-.21,7-.33,7.52.13,1,.84,7.7,5.13,11.65,2.42a52.29,52.29,0,0,0,4.69-3.63l-1.66-28c1,1.56,1.66,2.59,1.66,2.59,0-3.91,11.09-16.6,11.09-16.6s10.33-13.34,12.58-14.92,6.67-10,6.67-10a40.59,40.59,0,0,1,2.26-4.66C1156.49,596.65,1153.11,592.17,1153.48,591.15Zm-24.23,9.79c-2.82.28-8.74,6.72-8.83,8.12a5.76,5.76,0,0,1-1.25,2.5c0-.56-.09-1.13-.14-1.71-.66-8.25-1.38-18.29-1-19.26.56-1.68.37-9.24.37-9.24h0l.11-.15c1.89,5.86,7.77,12.76,7.77,12.76s1,3,2.26,3.07S1129.25,600.94,1129.25,600.94Z",
                transform: "translate(-28.43 -18.54)",
                fill: "url(#488cd128-ff9c-494f-bd41-35fb6c1caf21)"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M978.65,598.81s3.43-18,14.44-18l8.06,16.57-5.37,3.7S984.11,601.4,978.65,598.81Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#65617d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1001.15,597.33l-5.37,3.7s-8.21.26-14.08-1.18a16.24,16.24,0,0,1-3.05-1l.06-.29,0-.06a40,40,0,0,1,2.08-6.6c.34-.81.72-1.64,1.14-2.47,1.61-3.1,3.88-6.15,7-7.65a9.49,9.49,0,0,1,3.67-1h.49l.18.37,2.72,5.6Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1092.61,671.94s11.57-1.11,12.59-.27,7.59,5.09,11.47,2.4,1.3-12,1.3-12.4-.37-13.61-.37-13.61l-6.94-9.35-8.7-16.38-17.78-1.76.46,26-.09,13.33Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#65617d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1092.61,671.94s11.57-1.11,12.59-.27,7.59,5.09,11.47,2.4,1.3-12,1.3-12.4-.37-13.61-.37-13.61l-6.94-9.35-8.7-16.38-17.78-1.76.46,26-.09,13.33Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M990.78,580.3s-.93,11.29-8,11.48c0,0-2-1.2-4.68-3.21-6.18-4.63-16-13.52-13.28-21.79,3.89-11.85,22.77,10,22.77,10l1.46,1.63Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#fbbebe"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M990.78,580.3s-.93,11.29-8,11.48c0,0-2-1.2-4.68-3.21l-.6-.77a9.21,9.21,0,0,0,3.86,1,5.21,5.21,0,0,0,5-3.17,40,40,0,0,0,2-4.49,14,14,0,0,0,.71-2.77Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M987.72,600.76l-1.58-2-5.33-6.86-2.71-3.51a9.13,9.13,0,0,0,3.85,1,5.18,5.18,0,0,0,5-3.17,39.18,39.18,0,0,0,1.95-4.48c.88-2.5.86-3.78.55-4.22s2,1.68,3.06,2.72l0,0,.51.48.19.38L996,586.5a1.45,1.45,0,0,1,0,.23C996.2,588.43,997.1,599.22,987.72,600.76Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#e7effd"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1043.18,839s-7.78,5.1-11.67,4.35a14,14,0,0,0-7.87,1.3,23.36,23.36,0,0,1-9.81,6.39c-6.3,2.13-15.09,1.29-20.09-.37-2.36-.79-2.55-1.81-1.41-3.06s4.16-3.09,7.52-5.09c6.39-3.8,13.24-11.29,13.24-11.29a4,4,0,0,1,1.2-2.69,13.8,13.8,0,0,0,1.87-2c1-1.17,1.93-2.4,1.93-2.4L1041,825s.39,1.65.7,3.34a12.08,12.08,0,0,1,.32,3.33,3,3,0,0,0,.65,2.31l.41,3.78Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#65617d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1091,845.42c-.27,1.11-.61,3.09-.76,4,0,.31-.07.51-.07.51s-1.85,4.07-12.13,5.55-10.27-3.42-10.27-3.42l.1-1.33c.18-2.16.55-6.31.82-7.19.37-1.2-.27-6.48-.27-6.48l-.11-5.52-.08-3.83,17-1.76a32.8,32.8,0,0,0,.55,3.79,4.87,4.87,0,0,0,.75,2c.92,1,1.48,5.55,1.48,5.55S1091.4,843.94,1091,845.42Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#65617d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1041,825s.39,1.65.7,3.34c-2.47.45-13.27,2.32-16,1-3.06-1.48-9.63-2.31-9.63-2.31l.11-.38c1-1.17,1.93-2.4,1.93-2.4Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1085.84,829.77c-4.31-.73-13.78,1-17.5,1.8l-.08-3.83,17-1.76A32.8,32.8,0,0,0,1085.84,829.77Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1095.47,689.44l-.36,13s.46,19.9-.93,23-1.39,15.83-1.39,15.83.93,6-.09,7.31-.28,6.11.46,8.61.09,8.7.09,8.7l-.18,35s-1,9.07-2.32,10.37a3.05,3.05,0,0,0-.74,3s-1.11,5.18-.83,6.11.83,3.05-1.29,4.07-1.58,4.26-1.58,4.26c-5.09-1.21-19.53,2-19.53,2a88.58,88.58,0,0,1-4.08-9.91,5.13,5.13,0,0,1,3.71-6.76c1.94-.27-1.39-3.7-1.39-3.7s.37-.46-.56-3.8.19-11.85.47-14.07,1.66-13,1.66-13-.74-13.61-.18-14.16,2.4-5.93,1.48-7.68-2.41-13.33-2.41-14-1.2-15.65-1.2-15.65-1.11-10.46-.83-12.68-.75-10.46-.75-10.46c0-6.85-4-14.26-4-14.26l-.1.27L1050,713.6s-1.39,6.85-2.59,10.74a70.55,70.55,0,0,0-1.81,8l-.08.5-.08.52-.06.37v0s.64,4.9-.38,6.48a23.11,23.11,0,0,0-2.12,7.59c0,1.3.09,6.3.09,6.3s.37,9.9-.65,11a1.73,1.73,0,0,0-.46,2s1.66,7.5.92,9.44-.18,6.48-.18,6.48-1.48,14.35-1.67,15.09-1.2,6.48-.09,6.94,3.24,3.24,3.24,3.24.46,12.13-1.2,13.05-.75,5.65-.75,5.65-13.42,2.59-16.47,1.11-9.63-2.31-9.63-2.31l.92-3c-.06.11-.67,1.1-1.1-2.69-.47-4,3.42-2,3.42-2s3.06.74-1.85-4.07-2.5-9.72-2.22-9.72.92-7.13.92-7.13a23.57,23.57,0,0,0,.19-7.59c-.65-3.33-1.2-13.7-1.2-13.7s.46-7.87-.38-10.74.56-8,.84-9.26-.84-12.22-.84-12.22a34.27,34.27,0,0,0,.38-9c-.56-3.8.55-17.78.55-17.78l1.67-16.1s1.2-5,1-7,1.39-9.16,1.39-9.16a10.16,10.16,0,0,1,.74-4.45c.93-1.85,1.3-8,1.3-8l8.89-20.36,4.35-18,58.78-.56s.21,1.56.57,4.39.86,7,1.42,12.19c.51,4.7,1.07,10.23,1.62,16.38C1099.18,685.92,1095.47,689.44,1095.47,689.44Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#3f3d56"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1090,527.35,1076.31,542s-17.58-7-15.73-9.45c.71-.93.6-3.87.19-7.11-.65-5.13-2-11-2-11s30.73-5,28.13.18a8.52,8.52,0,0,0-.19,6.15A23.29,23.29,0,0,0,1090,527.35Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#fbbebe"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1086.86,514.57c-.94,1.9-1.39,2.08-.8,4.12-4,4.31-9.13,9-15.49,9a21.92,21.92,0,0,1-9.8-2.3c-.65-5.13-2-11-2-11S1089.46,509.39,1086.86,514.57Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1092.61,505.13a22,22,0,0,1-44.07,0c0-.11,0-.21,0-.32a22,22,0,0,1,44.06.32Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#fbbebe"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1095.8,650.48c-2.92,0-12.64.1-23.5.28h-.13l-3.59.06h-.11c-12.88.2-25.57-2.31-30.67-1.84-10.83,1,3.89-10,3.89-10a90.83,90.83,0,0,0,24.67,2.49l3.12-.16c9.84-.56,19.73-1.48,24.9-3C1094.74,641.15,1095.24,645.31,1095.8,650.48Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1095.8,649.92c-2.92,0-12.64.11-23.5.28h-.13l-3.59.06h-.11c-12.88.21-25.57-2.31-30.67-1.83-10.83,1,3.89-10,3.89-10a90.37,90.37,0,0,0,24.67,2.49l3.12-.16c9.84-.55,19.73-1.48,24.9-3C1094.74,640.59,1095.24,644.75,1095.8,649.92Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#5f5d7e"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1064.65,533.46l-17,8-13.15,101.64s7.78-3.52,12.22-1.3,18.14.19,18.14.19,10-.56,11.48.56,18.89-4.63,18.89-4.63,3.15-7,.74-8.15.74-12,.74-12l-1.48-73.32-3-9.44-8-4.82-8.14,6.48-3.89.56Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1064.65,532.35l-17,8L1034.47,642s7.78-3.52,12.22-1.3,18.14.19,18.14.19,10-.56,11.48.55,18.89-4.62,18.89-4.62,3.15-7,.74-8.15.74-12,.74-12l-1.48-73.32-3-9.44-8-4.82-8.14,6.48-3.89.56Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#e7effd"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1064.37,537.07s4.91,5.83,4.82,7-.28,4.08-.28,4.08l-3.7,7.49s-2,9.35-2,11.3-3.24,18.79-3.24,18.79L1056,611.68l-4.91,34,5,8.61,5.93-5,7.87-60.54,1.66-11.94s1.76-21.48,1.76-23.7a75.45,75.45,0,0,0-1-8.05s1.21-5.56,6.21-6.85-.38-.28-.38-.28l-2.86-2.31-2.5,1S1065.85,534.48,1064.37,537.07Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1063.82,536.51s4.9,5.83,4.81,7-.28,4.07-.28,4.07l-3.7,7.5s-2,9.35-2,11.29-3.24,18.79-3.24,18.79l-3.88,25.92-4.91,34,5,8.61,5.92-5,7.87-60.54,1.67-11.94s1.76-21.48,1.76-23.7a75.73,75.73,0,0,0-1-8.06s1.2-5.55,6.2-6.85-.37-.27-.37-.27l-2.87-2.32-2.5,1S1065.3,533.92,1063.82,536.51Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#6c63ff"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1060.58,526.79s-.74.56-.93,4.26-2.78,12-2.78,12,9.63-6.66,14.44-5.92Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1060.58,525.68s-.74.56-.93,4.26-2.78,12-2.78,12,9.63-6.66,14.44-5.92Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#e7effd"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1086.87,523.83l-15.18,13.33s12.77,7.59,14.44,9.44,3.33-18.14,3.33-18.14Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1087.42,522.72l-15.18,13.33s12.78,7.59,14.44,9.44,3.33-18.14,3.33-18.14Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#e7effd"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1061.13,526.79s-1.66-.83-3.24,1.58a10.45,10.45,0,0,1-4.53,3.51s-16.85,2.69-17.5,4.91l-7.87.46s-2.78.37-3,6.21-1.76,6.38-1.76,6.38-3.24,5.74-3,8.7a4.87,4.87,0,0,1-2.5,4.45l11.57,30.08s.37,12.41-1.76,16.94-6.11,24.63-6.11,24.63,1.67-.37,1.57.74-2,13.24-2,13.24-.56,4.81-1.48,6.48-1,10.36-1,10.36l-1.48,6.3s3.51,7.87,8.88,6.76S1041,656.39,1041,656.39l6.2-22.68,4.82-22.4,1.39-15.18,2.22-33.61,3.24-22.21S1062.43,528.37,1061.13,526.79Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1060.58,525.68s-1.67-.83-3.24,1.58a10.51,10.51,0,0,1-4.54,3.51s-16.85,2.69-17.5,4.91l-7.86.46s-2.78.37-3.06,6.2-1.76,6.39-1.76,6.39-3.24,5.74-3,8.7a4.85,4.85,0,0,1-2.5,4.45L1028.73,592s.37,12.41-1.76,16.94-6.11,24.63-6.11,24.63,1.67-.37,1.58.74-2,13.23-2,13.23-.55,4.82-1.48,6.48-1,10.37-1,10.37l-1.48,6.3s3.52,7.87,8.89,6.75,15.09-22.12,15.09-22.12l6.2-22.68,4.81-22.4L1052.8,595l2.22-33.61,3.24-22.21S1061.87,527.26,1060.58,525.68Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#65617d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1001.15,597.33l-5.37,3.7s-8.21.26-14.08-1.18l-3-1.33-.6-.26.62.2a12.26,12.26,0,0,0,7.41.26c7.6-2.56,6.76-15.1,6.46-17.94,0-.29-.05-.47-.06-.54v0l0,.07a5,5,0,0,0,.35.49l.34.36h0L996,586.5a1.45,1.45,0,0,1,0,.23Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1019.75,561.14l-2.59.74-.37,5.27s-3-.46-3.89,3.15a12.71,12.71,0,0,1-2.31,5.28s-5.09,4.26-5.37,7.87l-3.15,1.94s-7.31-1.67-9-4.63c0,0,3.34,23.88-14.44,18,0,0,19.9,8.7,20.83,9.91s7,4.72,12.59,1.76,6.76-7.5,6.76-7.5,5.37-7.5,5.55-8.61,4.35-2.41,4.35-2.41l8-19.25Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#65617d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1084.74,534.94l2.68-12.22s1.21,4,2.41,4.91l4,3s4,1.85,5.37,1.85,8.89,2,9.81,3,4.63.28,4.63.28,3.05,1,5.74,1.67,4,5.09,3.42,6.85a5.35,5.35,0,0,0,1.3,5c1.11,1.11,1.67,4.72,1.67,4.72a5.42,5.42,0,0,1,3.14,2.68c.93,2,.65,6.48.65,6.48l-13.79,19.44s.18,7.5-.37,9.17,1.94,30,1.94,30l2.87,48.69a50.51,50.51,0,0,1-4.63,3.61c-.83.37-1.66-17.22-1.66-17.86s-21.39-32-21.39-32-2.87-4.63-2.87-5.65-2.68-10.37-2.68-10.37l-4.07-18Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1130.69,562.11c0,.64,0,1.06,0,1.06l-13.78,19.42v0s.19,7.5-.37,9.17c-.32,1,.38,10.93,1,19.11.47,5.9.9,10.88.9,10.88l1.22,20.65,1.65,28a50.51,50.51,0,0,1-4.63,3.61c-.83.37-1.66-17.22-1.66-17.87s-21.39-32-21.39-32-2.87-4.63-2.87-5.65-2.68-10.37-2.68-10.37l-4.07-18,1.85-55.17,1.57-12.22s2.32,4,3.52,4.9l4,3.06s4,1.85,5.37,1.85,8.89,2,9.81,3,4.63.28,4.63.28,3.06,1,5.74,1.67,4,5.09,3.42,6.85a5.36,5.36,0,0,0,1.3,5c1.11,1.11,1.67,4.72,1.67,4.72a5.42,5.42,0,0,1,3.14,2.68A15,15,0,0,1,1130.69,562.11Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#65617d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1017.53,808.76c.46,0,19.9.74,19.53,3.89S1017.53,808.76,1017.53,808.76Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M1021.88,814s13.05,2.13,9.63,4.07S1021.88,814,1021.88,814Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1070.39,806.73s21.66,1.85,18.42,4.25-10.92,2.78-11.29,2.87S1070.39,806.73,1070.39,806.73Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M1067.8,816.26s12,2,12.4,4.35S1067.8,816.26,1067.8,816.26Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M1074.46,760.53s11,2.59,11.67,4.35Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M1032,768.49s-5.74,1.67-.18,5S1032,768.49,1032,768.49Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1057.43,679.53c.65,0,10.74-3.33,14.26-1.85a23.45,23.45,0,0,0,7.86,1.48Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1058.73,690.08l-.1.92L1050,713.6s-1.39,6.85-2.59,10.74a70.55,70.55,0,0,0-1.81,8l7.64-47.37Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M1072.17,650.2l-3.59.06h-.11l-2.11-9.33,3.12-.17Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#3f3d56"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1115.84,638.9l-2.3,1.9-7.7,6.33s-20.82,11.11-26.56.56c-5.06-9.3,18.55-15.94,24.24-17.39l1.21-.29Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#fbbebe"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1026.88,547.9s4.07,1.85,5,4.44S1026.88,547.9,1026.88,547.9Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1014.29,575.67s-5.92,7.22-3.52,10S1014.29,575.67,1014.29,575.67Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M1120.19,552s-5.55.56-5.74,5.37Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M1068.72,627.88c.56-.56,13.33-19.44,16.3-17.77Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1092.61,505.13a22,22,0,0,1-2.61,10.4l-.16,0c-1.4-.3-2.13-1.92-3.19-2.94a4.33,4.33,0,0,0-5-.7,5.08,5.08,0,0,0-2.46,4.75c-.7-3-.48-6.12-1.17-9.09s-2.76-6-5.6-6c-1.22,0-2.65.45-3.53-.47-.53-.55-.64-1.42-1-2.09-2-3.29-8.2-1.63-10.72.06s-5.45,4.37-8.58,5.81a22,22,0,0,1,44.06.32Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1067.85,498.38c.4.67.51,1.54,1,2.1.88.91,2.31.44,3.53.46,2.84.05,4.92,3.06,5.6,6s.47,6.12,1.18,9.08a5,5,0,0,1,2.45-4.74,4.35,4.35,0,0,1,5,.69c1.06,1,1.79,2.65,3.19,2.94s2.74-1.05,3.24-2.52a38.58,38.58,0,0,0,.8-4.61c.63-2.88,2.52-5.25,3.56-8a14.51,14.51,0,0,0-.09-10.34c-.7-1.74-1.73-3.3-2.43-5-1.07-2.63-1.35-5.61-2.65-8.12a9.6,9.6,0,0,0-11.53-4.74c-2,.76-3.76,2.22-5.8,2.88-2.74.88-5.66.22-8.49-.18s-6-.43-8.24,1.43c-2.62,2.15-3.34,6.18-5.8,8.53-1,1-2.32,1.62-3.41,2.53a4.7,4.7,0,0,0-1.91,3.76c.17,1.92,2,3.66,1.35,5.44a4.22,4.22,0,0,1-1,1.35,19.38,19.38,0,0,0-4.48,7.63c5,1.54,10.32-3.92,14.19-6.5C1059.65,496.76,1065.82,495.1,1067.85,498.38Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#7c5c5c"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1115.84,638.9l-2.3,1.9c-2-3.39-10.38-10.15-10.38-10.15l.36-.35,1.21-.29Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1118.06,635.47s-.82,2.06-1.68,3.84-1.79,3.4-1.83,2.09c-.1-2.6-10.83-11.3-10.83-11.3l1.45-1.42,1.69-1.64Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#e7effd"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1118.43,621.77l1.22,20.65c-2.88-4.47-10.77-15.93-15.84-15.56l12.31-14.16a16.5,16.5,0,0,0,1.41-1.81C1118,616.79,1118.43,621.77,1118.43,621.77Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1118.06,635.47s-.82,2.06-1.68,3.84c-3.23-4.42-7.66-9.65-11.21-10.63l1.69-1.64Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1127.32,560.58l3.33,2.59s5.56.1,6.11,4.72,5.65,6.76,5.65,6.76,3.79,3.8,3.79,5.56,2.87,4.9,2.87,5.18,2.78,5.92,2.41,6.94,3,5.46,1.94,7.13a42.87,42.87,0,0,0-2.22,4.63s-4.35,8.33-6.57,9.9-12.4,14.82-12.4,14.82-10.93,12.58-10.93,16.47c0,0-10.64-17.77-16.94-17.31l12.31-14.16s2.13-2.32,2.23-3.7,5.92-7.78,8.7-8.06c0,0,.46-3.79-.74-3.89s-2.22-3-2.22-3-8.15-9.63-8.24-15.74S1127.32,560.58,1127.32,560.58Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#65617d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1132.23,569.37s-7.78,5.74-6.11,7.6S1132.23,569.37,1132.23,569.37Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M1132.6,593.07s14.44-4.63,15.92,0Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1043.18,839s-7.78,5.1-11.67,4.35a14,14,0,0,0-7.87,1.3,23.36,23.36,0,0,1-9.81,6.39c-6.3,2.13-15.09,1.29-20.09-.37-2.36-.79-2.55-1.81-1.41-3.06,5.43,1.08,17.58,3.23,20.85,1.67a86.78,86.78,0,0,0,10.37-6.48s8-1.11,9.07-1.11c.79,0,6.94-2.54,10.41-4Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1090.27,849.45c0,.31-.07.51-.07.51s-1.85,4.07-12.13,5.55-10.27-3.42-10.27-3.42l.1-1.33C1071.15,852,1078.25,853.37,1090.27,849.45Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M1030.72,568.26s0,21.11-1.8,23.19S1030.72,568.26,1030.72,568.26Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M1114.17,575.07l2.69,7.54S1117.92,575.21,1114.17,575.07Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("g", { attrs: { opacity: "0.1" } }, [
              _c("path", {
                attrs: {
                  d:
                    "M1048.72,494.15c.68-1.73-1.1-3.44-1.33-5.3a3.41,3.41,0,0,0-.3,1.67c.12,1.41,1.16,2.72,1.43,4A2.28,2.28,0,0,0,1048.72,494.15Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M1079.44,514.09c-.66-2.92-.46-6-1.14-8.93s-2.76-6-5.6-6c-1.22,0-2.65.44-3.53-.47-.54-.55-.64-1.42-1-2.1-2-3.28-8.2-1.61-10.73.07-3.78,2.51-9,7.78-13.84,6.58-.23.56-.45,1.13-.63,1.72,5,1.54,10.32-3.92,14.19-6.5,2.53-1.68,8.7-3.34,10.73-.06.4.67.51,1.54,1,2.1.88.91,2.31.44,3.53.46,2.84.05,4.92,3.06,5.6,6s.47,6.12,1.18,9.08A5,5,0,0,1,1079.44,514.09Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M1093.36,510.62c-.5,1.47-1.82,2.82-3.25,2.52s-2.12-1.92-3.18-2.94a4.36,4.36,0,0,0-5-.7,5.06,5.06,0,0,0-2.46,4.49,4.83,4.83,0,0,1,2.18-2.68,4.35,4.35,0,0,1,5,.69c1.06,1,1.79,2.65,3.19,2.94s2.74-1.05,3.24-2.52a11.81,11.81,0,0,0,.51-2.66A6.42,6.42,0,0,1,1093.36,510.62Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M1097.72,498c-1,2.74-2.93,5.11-3.56,8-.12.58-.2,1.18-.27,1.78.64-2.88,2.51-5.24,3.55-8a13.89,13.89,0,0,0,.85-3.84A14,14,0,0,1,1097.72,498Z",
                  transform: "translate(-28.43 -18.54)"
                }
              })
            ]),
            _c("circle", {
              attrs: { cx: "935.51", cy: "546.26", r: "0.23", fill: "#e6e8ec" }
            }),
            _c("rect", {
              attrs: {
                x: "849.12",
                y: "551.42",
                width: "181.18",
                height: "208.22",
                rx: "6.61",
                ry: "6.61",
                fill: "#fff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "849.12",
                y: "551.42",
                width: "181.18",
                height: "208.22",
                rx: "6.61",
                ry: "6.61",
                fill: "#5a5773",
                opacity: "0.1"
              }
            }),
            _c("rect", {
              attrs: {
                x: "858.36",
                y: "562.04",
                width: "162.7",
                height: "186.98",
                rx: "6.61",
                ry: "6.61",
                fill: "#fff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "882.03",
                y: "599.54",
                width: "111.62",
                height: "38.52",
                rx: "6.03",
                ry: "6.03",
                fill: "#6c63ff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "886.13",
                y: "652.15",
                width: "103.43",
                height: "7.86",
                fill: "#6c63ff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "868.55",
                y: "668.74",
                width: "142.32",
                height: "7.86",
                fill: "#6c63ff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "868.55",
                y: "686.2",
                width: "142.32",
                height: "7.86",
                fill: "#6c63ff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "868.55",
                y: "703.66",
                width: "142.32",
                height: "7.86",
                fill: "#6c63ff"
              }
            }),
            _c("rect", {
              attrs: {
                y: "482.59",
                width: "426.61",
                height: "208.22",
                rx: "6.61",
                ry: "6.61",
                fill: "#fff"
              }
            }),
            _c("rect", {
              attrs: {
                y: "482.59",
                width: "426.61",
                height: "208.22",
                rx: "6.61",
                ry: "6.61",
                fill: "#5a5773",
                opacity: "0.1"
              }
            }),
            _c("rect", {
              attrs: {
                x: "21.76",
                y: "493.21",
                width: "383.08",
                height: "186.98",
                rx: "6.61",
                ry: "6.61",
                fill: "#fff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "77.51",
                y: "530.72",
                width: "262.81",
                height: "38.52",
                rx: "6.03",
                ry: "6.03",
                fill: "#6c63ff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "87.15",
                y: "583.32",
                width: "243.53",
                height: "7.86",
                fill: "#6c63ff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "45.75",
                y: "599.91",
                width: "335.1",
                height: "7.86",
                fill: "#6c63ff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "45.75",
                y: "617.37",
                width: "335.1",
                height: "7.86",
                fill: "#6c63ff"
              }
            }),
            _c("rect", {
              attrs: {
                x: "45.75",
                y: "634.83",
                width: "335.1",
                height: "7.86",
                fill: "#6c63ff"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M132.7,859.18c1.19-4.34,2-8.16,2-8.16a17,17,0,0,1,2.22-8.27l0-1.2h0l.34-8.81a29.33,29.33,0,0,0-2-4.7c-1.48-2.83.5-12.92.5-12.92s6.43-14.07,5.35-23.2,13.62-39.83,13.62-39.83a39.48,39.48,0,0,0-.92-9,6.9,6.9,0,0,1-.1-1.87,1.77,1.77,0,0,1,0-.23v.07c.43-6,5.59-17,5.59-17l.19-21.4s-2.54-12.72,3-29.45c1.95-5.84,3.23-10.52,4.07-14.14.1-.41.19-.8.27-1.18-10.08-1.94-17.78-3.52-17.78-3.52s6.83-24.38,11-28.53,7.83-17.57,7.83-17.57,2.74-17.3-.4-22.5-3.28-14-3.28-14-7.42-5.83-8.28-8.32-2.23-8.1-2.12-11,1.17-5.5.91-7.05,2.51-7.29,1.34-10.11a7.74,7.74,0,0,1-.4-2.69s0,0,0-.08v0a37.42,37.42,0,0,1,.95-7.19,20.4,20.4,0,0,1,7.7-3.74l.19-.66.5-1.71a8.33,8.33,0,0,1,.76-.42l.05-.63.16-2.49L165,510c-2-9.86,11.12-10.81,11.12-10.81a6.87,6.87,0,0,1,3.81-3.1c2.66-.82-.12,14.71-1.39,15.66-1,.71-4,5.5-5.45,7.85h0l-.24.39a5.4,5.4,0,0,1,.58.65l-.63,3.37-.1.51a14,14,0,0,1,1.95,3.63s-2.49,2.52-2.12,5.46a17.59,17.59,0,0,1-1,6.73c.14-.15,1.89-1.9,3.55-1.4s6.28,2.09,6.28,2.09,3.47.75,3.12,1.51,2.23,4.24,2.23,4.24l9.73-8.53c.11-.27.21-.53.31-.8a22.35,22.35,0,0,0,1-3.87,20.92,20.92,0,0,1-3-1.07,6.53,6.53,0,0,1-2.54-1.76c-.9-1.16-1-2.7-1.35-4.11-.64-2.76-2.14-5.26-3.19-7.91a25.29,25.29,0,0,1-1.34-14,9.32,9.32,0,0,1,1.6-4c1.62-2.05,4.43-2.8,6.52-4.4s3.49-4.13,5.89-5.3c2.18-1.06,4.77-.82,7.16-.34A38.26,38.26,0,0,1,220.55,496c1.34.87,2.81,1.87,4.4,1.64a6.07,6.07,0,0,0,3.3-2.23.74.74,0,0,1,0-.14l.11-.11a16.49,16.49,0,0,1,1.18,7.08c0,.37,0,.75-.08,1.12,0,.13,0,.26,0,.39a1.82,1.82,0,0,0,0,.33h0a1.65,1.65,0,0,0,.06.49,3.51,3.51,0,0,0,.83,1.31,7.15,7.15,0,0,1,.72,1.07c0-.13-.07-.26-.11-.39a5.58,5.58,0,0,1,.86,3,2.93,2.93,0,0,1-.79,2.09,9.29,9.29,0,0,1-1.58,1.18,17.95,17.95,0,0,1-9.28,18.29c-.12.26-.24.53-.35.8a22.36,22.36,0,0,0-2.1,10.17c0,.25,0,.5.08.75s.23.27.33.41h0s15.5.75,19.28-2.42,8.9,8.43,8.9,8.43,5.52,1.29,6.67.26,7.64.14,7.64.14a14,14,0,0,1,9.82-3.17,28.69,28.69,0,0,1,7.27-3.68h0l.18-.06h0a7.84,7.84,0,0,1,3.51-.31s7.87-6,10.22-9.31S305,517.69,305,517.63l.07-.6.19-1.82a6.12,6.12,0,0,0,.94.12l.24-.63a34.33,34.33,0,0,1,2.45-5.08s.09-2.31-.56-2.91.63-9,.63-9,7.49-15.8,13.18-3.57c0,0,11.34,8.21,1.22,16.87,0,0-4,1.74-4.57,3.21-.4,1-1.83,3.62-2.79,5.39l-.43.79.11.1-.2,1.5-.08.59c1.79,1.11,3,2.19,2.67,3a17,17,0,0,0-1.27,4.11S302.66,546,300.64,553.19c0,0-37.06,20.14-49,21.22l1.65,10.84a86.42,86.42,0,0,1,.14,8.79c-.25,2.3.94,12.81.94,12.81s1.47,15.46,3.14,17.68,1,11.44,1,11.44a77.91,77.91,0,0,0,1.88,13.16c1.52,5.91,0,13.09,0,13.09s5.51,14.07-8.59,4.13c0,0-7.08-.71-15.24-1.3,0,.26,0,.54,0,.81,0,1.06-.05,2.2-.08,3.4-.2,7.93-.57,18.85-1.25,27.1-1.2,14.59-6.76,43.33-6.76,43.33l-.56,14.52a19.24,19.24,0,0,1,.26,4.17,27,27,0,0,1-4.47,14.39l-1.49,9.65s-2.85,6.28-3.05,10.09a4.54,4.54,0,0,0,.08.93,7.42,7.42,0,0,1,.07,1.49c0,4.4-3.08,14.82-3.08,14.82s-.57,10.61-2.18,11.16c-1.38.48,1.58,6.19,2.46,7.83a1.63,1.63,0,0,0,.07-.3l.19.32a7.54,7.54,0,0,1,.39,2.71,3.87,3.87,0,0,1-1.91,3.66c-3.09,1.73-4.77,3.2-2.23,3.92a28.23,28.23,0,0,1,2.78.69l.15-.35a1.71,1.71,0,0,1,1,1.9,7.77,7.77,0,0,1-1.09,3.56,38.76,38.76,0,0,1-4.6,7.68l-1.22-.18a6.1,6.1,0,0,0,.66,1.33,5.08,5.08,0,0,0,1.74,1.67,5.56,5.56,0,0,0,2.14.82,6.17,6.17,0,0,1,4.42,2.37c1.5,2.11,2.39,4.94-.84,7.27l-11.51,3.48s-19.64,1.79-18.44-2.55,2-8.16,2-8.16a17.35,17.35,0,0,1,1.88-7.72,10.32,10.32,0,0,1,.74-1.12l-.69-.1S191,839.89,189.12,838c-.42-.45-.51-.78-.4-1-.17-.53.33-.82,1-1,0,.12.09.25.13.38a9.65,9.65,0,0,1,1.9-.13s.83-5.05-1.16-7a1.9,1.9,0,0,1-.34-1.52,7.79,7.79,0,0,1,.29-2.06.75.75,0,0,0,.07.12c1.22-4.56,5-11.74,5-11.74s.33-4.61-.87-6.51,1.13-25.06,1.13-25.06-.05-11.24,1.58-16.41-1.31-11.45-1.31-11.45,0-.12.05-.33a.41.41,0,0,0,0-.09s.1-.69.26-1.76l0,.11c.44-3,1.25-8.31,1.79-10.79.77-3.51.63-20.46.63-20.46L196.28,714l-5.57,12.26-6,16.4s-2.81,3.4-3,7c0,.18,0,.35,0,.53a8.32,8.32,0,0,1,0,1.11,9.92,9.92,0,0,1-1.88,5.85s-1.73,7.79-4,9.7-2.45,5.76-2.45,5.76-3.14,11.28-4.49,13.23c-1.13,1.64-1.37,6.27-1.41,7.69h0c0,.26,0,.41,0,.41s-.53,4.06-.65,7.48c0,.42,0,.83,0,1.21a.22.22,0,0,1,0-.08,11.59,11.59,0,0,0,.22,2.77s0,.11,0,.17l0-.58a29.09,29.09,0,0,1,.55,7.12c-.09,4.09-.9,8.91-3.49,11.66-4.48,4.76-7.15,4-7.15,4s1.83,6.23,4.32,7.56a1.59,1.59,0,0,1,.27.18c0-.12,0-.24.07-.35a3,3,0,0,1,.66,2.32c.08,2.71-1.8,7-3.5,9a5,5,0,0,1-2.19,1.18,3.77,3.77,0,0,0,.39.26,7.85,7.85,0,0,0,.86.44,4.25,4.25,0,0,0,1.28.39,6.08,6.08,0,0,1,4.42,2.37c1.5,2.1,2.39,4.93-.84,7.26l-11.51,3.48S131.49,863.52,132.7,859.18Z",
                transform: "translate(-28.43 -18.54)",
                fill: "url(#ccb18d0b-874b-442a-b8cb-57bcf76cdeb5)"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M207.05,869.31l11.15-3.49c3.13-2.34,2.27-5.17.82-7.28a5.84,5.84,0,0,0-4.27-2.35,5.22,5.22,0,0,1-2.08-.83A5,5,0,0,1,211,853.7a8.2,8.2,0,0,1-1.09-4.3s-11.94-4-15.38-.59A9,9,0,0,0,193,850.9a18,18,0,0,0-1.84,7.72s-.76,3.81-1.93,8.16S207.05,869.31,207.05,869.31Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#2d293d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M153.44,861.82l11.15-3.49c3.13-2.34,2.27-5.17.82-7.27a5.84,5.84,0,0,0-4.28-2.36,3.93,3.93,0,0,1-1.24-.38,7.86,7.86,0,0,1-.83-.45c-3-1.81-2.77-6-2.77-6s-11.94-4-15.38-.59a8.84,8.84,0,0,0-1.22,1.52,17.45,17.45,0,0,0-2.16,8.29s-.77,3.82-1.93,8.16S153.44,861.82,153.44,861.82Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#2d293d"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M194.52,848.81A9,9,0,0,0,193,850.9h0l18,2.79a8.2,8.2,0,0,1-1.09-4.3S198,845.4,194.52,848.81Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M139.69,842.84l-.13,3.39c2.64,4.75,16.29,4.26,20.33,2.09a7.86,7.86,0,0,1-.83-.45c-3-1.81-2.77-6-2.77-6s-11.94-4-15.38-.59A8.84,8.84,0,0,0,139.69,842.84Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M138.1,828.16a31.07,31.07,0,0,1,2,4.7L139.61,845c2.88,5.2,18.94,4.12,21.2,1.44s4.84-9.83,2.43-11.15-4.18-7.56-4.18-7.56,2.59.72,6.94-4,3.53-15.73,2.85-18.37.45-11.38.45-11.38.08-6.16,1.39-8.11,4.36-13.23,4.36-13.23.14-3.85,2.37-5.76,3.92-9.71,3.92-9.71a10.06,10.06,0,0,0,1.79-6.55c-.31-3.86,2.92-7.9,2.92-7.9l5.87-16.4,5.4-12.27,2.49,7.33s.12,16.95-.63,20.46-2,12.86-2,12.86,2.84,6.27,1.26,11.45-1.56,16.41-1.56,16.41-2.28,23.17-1.12,25.06.83,6.5.83,6.5-6.82,13.29-4.9,15.22,1.12,7,1.12,7-4.3-.17-2.53,1.75S193,849.68,193,849.68l18.51,2.87a39.17,39.17,0,0,0,4.46-7.69c2.68-5.59-.26-5.09-2.71-5.8s-.83-2.19,2.16-3.92,1.46-5.95,1.46-5.95-4.17-7.71-2.6-8.26,2.12-11.16,2.12-11.16,3.56-12.5,2.92-15.91,2.91-11.44,2.91-11.44l1.44-9.64a26.63,26.63,0,0,0,4.09-18.17l.58-14.92S233.78,711,235,696.36c.76-9.34,1.14-22.11,1.31-30.08.1-4.48.14-7.44.14-7.44l-66.17-9.48a54.61,54.61,0,0,1-1.59,9.82c-.81,3.63-2.06,8.31-4,14.15-5.42,16.73-3,29.45-3,29.45l-.21,21.4s-6.4,14.08-5.35,19.05a40.64,40.64,0,0,1,.88,9S142.77,782.91,143.81,792s-5.21,23.21-5.21,23.21S136.67,825.33,138.1,828.16Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#575988"
              }
            }),
            _c("path", {
              attrs: {
                d: "M179.17,749.5,159.05,746S170.06,758.16,179.17,749.5Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.05"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M162.73,726.39s-1,7.12,3.31,10C166,736.37,158.25,734.84,162.73,726.39Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M164.85,703.67s16.37,14.57,22.56,13.66S164.85,703.67,164.85,703.67Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M204,757s12.73,3.42,12.92,8.58S204,757,204,757Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M198.69,821s18,4.08,12.78,6.19-13.77,3.63-13.77,3.63S191.84,830.92,198.69,821Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.05"
              }
            }),
            _c("g", { attrs: { opacity: "0.05" } }, [
              _c("path", {
                attrs: {
                  d:
                    "M215,831a3.6,3.6,0,0,0,1.76-2.56l.17.33s1.54,4.21-1.46,6c-.34.19-.66.39-1,.58-.53-.12-1.11-.22-1.66-.38C210.37,834.22,212,832.74,215,831Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M191.66,828.88c-.48-.48-.41-1.66,0-3.17a8.59,8.59,0,0,1,.86,4.5A3.5,3.5,0,0,0,191.66,828.88Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M197.4,752.48a20.92,20.92,0,0,1,1,5.71,21.81,21.81,0,0,0-1.26-3.94S197.25,753.56,197.4,752.48Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M156.17,742.81a7.34,7.34,0,0,1-.11-1.69c.19,1.16.31,2.23.38,3.17C156.36,743.81,156.27,743.32,156.17,742.81Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M195.73,807.17a10.19,10.19,0,0,1-.32-3.43,11.57,11.57,0,0,1,.72,4.34A4.23,4.23,0,0,0,195.73,807.17Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M190.81,836a60.4,60.4,0,0,1,1.75,9.53l18.51,2.87a38.76,38.76,0,0,0,4.47-7.69c.24-.49.42-.93.58-1.33,1.09.55,1.49,1.73-.11,5.05a39.23,39.23,0,0,1-4.46,7.68L193,849.26s-1-9.74-2.79-11.65C189.38,836.66,190,836.23,190.81,836Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M216.44,809.35s-.56,10.61-2.12,11.16h0c-.71-1.79-1.17-3.47-.47-3.72,1.56-.56,2.13-11.16,2.13-11.16s3.56-12.49,2.92-15.91,2.9-11.43,2.9-11.43l1.45-9.65a26.63,26.63,0,0,0,4.09-18.17l.57-14.92s5.42-28.74,6.6-43.33c.75-9.34,1.13-22.11,1.31-30.08,0-1.44.06-2.72.08-3.8l.53.08s0,3-.14,7.43c-.17,8-.55,20.75-1.31,30.09-1.18,14.58-6.59,43.33-6.59,43.33l-.58,14.91a26.66,26.66,0,0,1-4.08,18.17L222.27,782s-3.55,8-2.91,11.44S216.44,809.35,216.44,809.35Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M160.35,842.31a18,18,0,0,0,3.22-7.19c1.83,1.78-.6,8.35-2.75,10.9s-18.32,3.76-21.2-1.43l.11-2.93C143.73,845.94,158.21,844.85,160.35,842.31Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M137.64,824a31.07,31.07,0,0,1,2,4.7l-.09,2.15a33.59,33.59,0,0,0-1.42-3.14,9.27,9.27,0,0,1-.52-3.83Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M160,827.32a30.07,30.07,0,0,1-1.38-3.71s2.59.71,6.93-4.05c3.16-3.47,3.59-10.22,3.33-14.66.68,2.65,1.49,13.61-2.85,18.37C163.17,826.39,161.08,827.16,160,827.32Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M169.31,793.52a82.23,82.23,0,0,0-.66,9.11,13,13,0,0,0-.26-1.44c-.67-2.65.44-11.38.44-11.38s.09-6.16,1.39-8.11,4.36-13.23,4.36-13.23.15-3.84,2.38-5.76,3.92-9.71,3.92-9.71a10.12,10.12,0,0,0,1.79-6.55c-.31-3.86,2.92-7.9,2.92-7.9l5.87-16.4,5.4-12.27,2.49,7.34s0,.9,0,2.34l-2-6-5.4,12.26-5.87,16.41s-3.23,4-2.92,7.9a10.06,10.06,0,0,1-1.79,6.55s-1.69,7.79-3.92,9.7-2.37,5.76-2.37,5.76-3.06,11.28-4.36,13.24S169.31,793.52,169.31,793.52Z",
                  transform: "translate(-28.43 -18.54)"
                }
              })
            ]),
            _c("path", {
              attrs: {
                d:
                  "M167.28,510.1l.94,5.66-.16,2.5-.12,1.84,6.39.91.77-1.3h0c1.42-2.35,4.36-7.14,5.29-7.86,1.22-.95,3.94-16.48,1.36-15.66a6.75,6.75,0,0,0-3.7,3.1S165.39,500.25,167.28,510.1Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#ffcdd3"
              }
            }),
            _c("path", {
              attrs: {
                d: "M167.94,520.1l6.39.91.77-1.3h0a5.67,5.67,0,0,0-7-1.44Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M166.2,523.08l8.39,2.29.22-1.26.61-3.37a5.83,5.83,0,0,0-8.15-1.43l-.48,1.71Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#dce6f2"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M303.74,516l8.84,5.2s.37-.71.89-1.68c.93-1.77,2.31-4.43,2.7-5.39.59-1.47,4.43-3.22,4.43-3.22,9.81-8.67-1.16-16.86-1.16-16.86-5.5-12.23-12.76,3.58-12.76,3.58s-1.25,8.43-.62,9,.54,2.91.54,2.91a34,34,0,0,0-2.38,5.08C303.91,515.45,303.74,516,303.74,516Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#ffcdd3"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M303.74,516l8.84,5.2s.37-.71.89-1.68c-1.24-1.11-5.62-5-7.11-4.84a10.73,10.73,0,0,1-2.14,0C303.91,515.45,303.74,516,303.74,516Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M302.71,518.67l10,5.39.28-2.18.2-1.5s-5.68-5.26-7.42-5.14a9.44,9.44,0,0,1-2.66-.11l-.18,1.82Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#dce6f2"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M190.45,548.34s44.07,6.7,35.9,3.7c-5.69-2.1-7.84-5.85-8.16-9.93a23.22,23.22,0,0,1,2-10.18,44.62,44.62,0,0,1,4.27-7.84s-33.12-19.91-27-2.73a27.14,27.14,0,0,1,1.61,8.09,22.8,22.8,0,0,1-1.18,8.08A24.2,24.2,0,0,1,190.45,548.34Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#ffcdd3"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M197.5,521.36a27.14,27.14,0,0,1,1.61,8.09c3.08,2.79,6.58,2.75,11.07,2.92,3.45.14,7.23,1.12,10-.44a44.62,44.62,0,0,1,4.27-7.84S191.38,504.18,197.5,521.36Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("circle", {
              attrs: { cx: "183.01", cy: "496.73", r: "18.31", fill: "#ffcdd3" }
            }),
            _c("path", {
              attrs: {
                d:
                  "M190.45,548.34s44.07,6.7,35.9,3.7c-5.69-2.1-7.84-5.85-8.16-9.93-2.11-2.47-6.47-4.36-9.28-5.39a13.33,13.33,0,0,0-8-.44,11,11,0,0,0-3,1.25A24.2,24.2,0,0,1,190.45,548.34Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M166.2,523.08l8.39,2.29.22-1.26a7.47,7.47,0,0,0-8-3.09Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M302.71,518.67l10,5.39.28-2.18A75.72,75.72,0,0,0,302.89,517Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M168.65,659.18c17,3.37,41.3,7.83,45.21,6.8,3.25-.85,13.5-.35,22.41.3.1-4.48.14-7.44.14-7.44l-66.17-9.48A54.61,54.61,0,0,1,168.65,659.18Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M151.72,654.5s56.06,11.86,62.19,10.25,37.15,1.58,37.15,1.58c13.63,9.92,8.32-4.14,8.32-4.14s1.51-7.18,0-13.09a80,80,0,0,1-1.81-13.16s.67-9.22-.94-11.43-3-17.68-3-17.68-1.13-10.51-.89-12.81-.12-8.79-.12-8.79l-1.59-10.84c11.59-1.09,47.48-21.27,47.48-21.27,2-7.16,15.69-23.58,15.69-23.58a17.76,17.76,0,0,1,1.24-4.11c1-2.42-12.63-7.87-12.63-7.87S292,529.77,289.76,533.07s-9.91,9.32-9.91,9.32a7.51,7.51,0,0,0-3.4.31l-.18,0h0a27.47,27.47,0,0,0-7,3.69,13.4,13.4,0,0,0-9.52,3.17s-6.27-1.16-7.38-.13-6.46-.25-6.46-.25-5-11.58-8.61-8.41-18.67,2.44-18.67,2.44c-1.89-2.74-6.69-4.83-9.69-5.93a13.25,13.25,0,0,0-8-.44,10.39,10.39,0,0,0-3.23,1.41l-9.44,8.56s-2.49-3.48-2.15-4.24-3-1.5-3-1.5-4.41-1.56-6.08-2.08-3.3,1.24-3.44,1.4a17.78,17.78,0,0,0,1-6.73c-.35-2.94,2.05-5.47,2.05-5.47-4.87-13.43-17.44-2.82-17.44-2.82s-1.67,7.17-.54,10-1.56,8.56-1.32,10.11-.77,4.13-.88,7.05,1.21,8.52,2,11,8,8.32,8,8.32.13,8.78,3.16,14,.37,22.5.37,22.5-3.6,13.41-7.61,17.57S151.72,654.5,151.72,654.5Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#656691"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M237.88,556.48s1.89-5,3.44-5.41a35.43,35.43,0,0,0,4.54-1.83l-.92-1.93s-5.84,1.37-6.82,3S237.88,556.48,237.88,556.48Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M269.22,546.45c.25,1.55,13.88,3.46,13.88,3.46l-6.65-7.21h0l-.17,0h0A27.47,27.47,0,0,0,269.22,546.45Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("circle", {
              attrs: { cx: "281.2", cy: "508.32", r: "1.23", fill: "#575988" }
            }),
            _c("circle", {
              attrs: { cx: "279.53", cy: "510.72", r: "1.23", fill: "#575988" }
            }),
            _c("circle", {
              attrs: { cx: "277.9", cy: "512.93", r: "1.23", fill: "#575988" }
            }),
            _c("circle", {
              attrs: { cx: "276.2", cy: "515.33", r: "1.23", fill: "#575988" }
            }),
            _c("circle", {
              attrs: { cx: "131.25", cy: "509.62", r: "1", fill: "#575988" }
            }),
            _c("circle", {
              attrs: { cx: "131.01", cy: "511.88", r: "1", fill: "#575988" }
            }),
            _c("circle", {
              attrs: { cx: "130.78", cy: "514.14", r: "1", fill: "#575988" }
            }),
            _c("path", {
              attrs: {
                d:
                  "M236.2,598.15c.15-.17-36.2,42.27-62.14,15.94C174.06,614.09,216.36,621.49,236.2,598.15Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M255.24,621.68s-20.77-.23-23.17,5.65l-.24,6.21a4,4,0,0,0,3.86.15c2.14-1.05,14.92-6.94,19.23-3.7Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M254.85,621.66s-19.85-.22-22.15,5.39l-.23,5.92a3.8,3.8,0,0,0,3.69.14c2-1,14.27-6.61,18.39-3.53Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#656691"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M245.65,576.2a67.4,67.4,0,0,1-8.57,13.49A54.07,54.07,0,0,1,224,601.37S245.19,579,245.65,576.2Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M253.36,552.36s-4,14.81-13.15,19.54Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M258.61,554.07c.1-.27,2.62,11.94-12.21,18.07C246.4,572.14,252.67,570.27,258.61,554.07Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M168.42,540.57c.23,0-7.37,4.45-9.47,6.56C159,547.13,164.05,540.09,168.42,540.57Z",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d:
                  "M215.75,532.05a3.93,3.93,0,0,1-1.53,2.42,3.77,3.77,0,0,1-1.74.31c-5.59.14-11.41.16-16.48-2.19a6.22,6.22,0,0,1-2.45-1.76c-.88-1.16-1-2.69-1.31-4.11-.62-2.76-2.07-5.25-3.08-7.9a26,26,0,0,1-1.27-14,9.37,9.37,0,0,1,1.55-4c1.56-2.05,4.29-2.8,6.31-4.41s3.38-4.13,5.72-5.31c2.1-1.06,4.61-.83,6.92-.34a36.32,36.32,0,0,1,12.7,5.33c1.29.87,2.71,1.86,4.25,1.63a5.92,5.92,0,0,0,3.26-2.3,17,17,0,0,1,1.06,8,3.45,3.45,0,0,0,0,1.2,3.65,3.65,0,0,0,.8,1.31c1.31,1.65,2.08,4.21.66,5.77-.62.68-1.55,1-2.15,1.73-1.08,1.24-.81,3.1-.85,4.75a2.5,2.5,0,0,1-.46,1.61,2.39,2.39,0,0,1-2.28.45,6.22,6.22,0,0,0-2.4-.32,4,4,0,0,0-2.15,1.52C218.12,524.58,217,528.15,215.75,532.05Z",
                transform: "translate(-28.43 -18.54)",
                fill: "#2d293d"
              }
            }),
            _c("g", { attrs: { opacity: "0.1" } }, [
              _c("path", {
                attrs: {
                  d:
                    "M193,529.39a6.14,6.14,0,0,0,2.45,1.77c5.07,2.35,10.89,2.32,16.48,2.19a3.65,3.65,0,0,0,1.74-.32,3.88,3.88,0,0,0,1.53-2.41c1.23-3.91,2.37-7.47,5.08-10.65a4,4,0,0,1,2.15-1.53,6.42,6.42,0,0,1,2.4.32,2.36,2.36,0,0,0,2.28-.45,2.46,2.46,0,0,0,.46-1.6c0-1.65-.23-3.51.85-4.76.6-.69,1.53-1,2.15-1.72a3.62,3.62,0,0,0,.49-3.66c.92,1.59,1.27,3.6.07,4.91-.62.68-1.54,1-2.15,1.73-1.08,1.24-.8,3.1-.84,4.75a2.45,2.45,0,0,1-.47,1.61,2.38,2.38,0,0,1-2.28.45,6.17,6.17,0,0,0-2.39-.32,4,4,0,0,0-2.16,1.53c-2.7,3.17-3.84,6.74-5.08,10.64a2.89,2.89,0,0,1-3.26,2.74c-5.59.13-11.41.15-16.49-2.2a6.26,6.26,0,0,1-2.45-1.76,4.8,4.8,0,0,1-.73-1.51A1.84,1.84,0,0,0,193,529.39Z",
                  transform: "translate(-28.43 -18.54)"
                }
              }),
              _c("path", {
                attrs: {
                  d:
                    "M229.62,504.1a2.47,2.47,0,0,1-.52-1,3.45,3.45,0,0,1,0-1.2,17.05,17.05,0,0,0-.6-6.66l.1-.11a16.87,16.87,0,0,1,1.07,8A5.43,5.43,0,0,0,229.62,504.1Z",
                  transform: "translate(-28.43 -18.54)"
                }
              })
            ]),
            _c("path", {
              attrs: {
                d: "M218.58,543.27s-23,2.15-24.9-1.37",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            }),
            _c("path", {
              attrs: {
                d: "M174.51,532.1s-12.71-.47-15.68,4.18",
                transform: "translate(-28.43 -18.54)",
                opacity: "0.1"
              }
            })
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row " }, [
      _c("div", { staticClass: "col-md-12 mt-3" }, [
        _c("div", { staticClass: "card card-widget widget-user" }, [
          _c(
            "div",
            {
              staticClass: "widget-user-header text-white",
              staticStyle: { "background-image": "url('./img/user-cover.png')" }
            },
            [
              _c("h3", { staticClass: "widget-user-username" }, [
                _vm._v(_vm._s(this.form.name))
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "widget-user-desc" }, [
                _vm._v(_vm._s(this.form.type))
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "widget-user-image" }, [
            _c("img", {
              staticClass: "img-circle",
              attrs: { src: _vm.getProfilePhoto(), alt: "User Avatar" }
            })
          ]),
          _vm._v(" "),
          _vm._m(0)
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: " card card-widget" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "tab-content" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "active tab-pane", attrs: { id: "settings" } },
                [
                  _c("form", { staticClass: "form-horizontal" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-2 control-label",
                          attrs: { for: "inputName" }
                        },
                        [_vm._v("Name")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-10" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("bio") },
                          attrs: {
                            type: "email",
                            id: "inputName",
                            placeholder: "Name"
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-2 control-label",
                          attrs: { for: "inputEmail" }
                        },
                        [_vm._v("Email")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-10" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("email")
                            },
                            attrs: {
                              type: "email",
                              id: "inputEmail",
                              placeholder: "Email"
                            },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "email" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-2 control-label",
                          attrs: { for: "inputExperience" }
                        },
                        [_vm._v("Experience")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-10" }, [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.bio,
                              expression: "form.bio"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("bio") },
                          attrs: {
                            id: "inputExperience",
                            placeholder: "Experience"
                          },
                          domProps: { value: _vm.form.bio },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "bio", $event.target.value)
                            }
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-2 control-label",
                          attrs: { for: "inputSkills" }
                        },
                        [_vm._v("Profile Photo")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-sm-12" }, [
                        _c("input", {
                          staticClass: "form-input",
                          attrs: { type: "file", name: "photo" },
                          on: { change: _vm.updateProfile }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "col-sm-5 control-label",
                          attrs: { for: "password" }
                        },
                        [_vm._v("Passport (leave empty if not changing)")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-sm-12" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.password,
                                expression: "form.password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "password",
                              id: "password",
                              placeholder: "Passport"
                            },
                            domProps: { value: _vm.form.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("has-error", {
                            attrs: { form: _vm.form, field: "password" }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { staticClass: "col-sm-offset-2 col-sm-10" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success",
                            attrs: { type: "submit" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.updateInfo($event)
                              }
                            }
                          },
                          [_vm._v("Update")]
                        )
                      ])
                    ])
                  ])
                ]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-4 border-right" }, [
          _c("div", { staticClass: "description-block" }, [
            _c("h5", { staticClass: "description-header" }, [_vm._v("3,200")]),
            _vm._v(" "),
            _c("span", { staticClass: "description-text" }, [_vm._v("SALES")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4 border-right" }, [
          _c("div", { staticClass: "description-block" }, [
            _c("h5", { staticClass: "description-header" }, [_vm._v("13,000")]),
            _vm._v(" "),
            _c("span", { staticClass: "description-text" }, [
              _vm._v("FOLLOWERS")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "description-block" }, [
            _c("h5", { staticClass: "description-header" }, [_vm._v("35")]),
            _vm._v(" "),
            _c("span", { staticClass: "description-text" }, [
              _vm._v("PRODUCTS")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-2" }, [
      _c("ul", { staticClass: "nav nav-pills" }, [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link ",
              attrs: { href: "#activity", "data-toggle": "tab" }
            },
            [_vm._v("Activity")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active",
              attrs: { href: "#settings", "data-toggle": "tab" }
            },
            [_vm._v("Settings")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "active tab-pane", attrs: { id: "activity" } },
      [_c("h2", [_vm._v("Display User Activity")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm.$gate.isAdminOrAuthor()
      ? _c("div", { staticClass: "row " }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card mt-5" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("h3", { staticClass: "card-title" }, [
                  _vm._v("Users Table")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-tools" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success ",
                      on: { click: _vm.newModal }
                    },
                    [
                      _vm._v("Add New\n                    "),
                      _c("i", { staticClass: "fas fa-user-plus fa-fw " })
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body table-responsive p-0" }, [
                _c("table", { staticClass: "table table-hover" }, [
                  _c(
                    "tbody",
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _vm._l(_vm.users.data, function(user) {
                        return _c("tr", { key: user.id }, [
                          _c("td", [_vm._v(_vm._s(user.id))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.name))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(user.username))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm._f("upText")(user.type)))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(_vm._f("myDate")(user.created_at)))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.editModal(user)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-edit blue" })]
                            ),
                            _vm._v(
                              "\n                    /\n                    "
                            ),
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteUser(user.id)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fa fa-trash red" })]
                            )
                          ])
                        ])
                      })
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-footer" },
                [
                  _c("pagination", {
                    attrs: { data: _vm.users },
                    on: { "pagination-change-page": _vm.getResults }
                  })
                ],
                1
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.$gate.isAdminOrAuthor() ? _c("div", [_c("not-found")], 1) : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "addNew",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "AddNewModalLabel",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered ",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.editmode,
                        expression: "!editmode"
                      }
                    ],
                    staticClass: "modal-title",
                    attrs: { id: "addNewLabel" }
                  },
                  [_vm._v("Add New")]
                ),
                _vm._v(" "),
                _c(
                  "h5",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.editmode,
                        expression: "editmode"
                      }
                    ],
                    staticClass: "modal-title",
                    attrs: { id: "addNewLabel" }
                  },
                  [_vm._v("Update User's Info")]
                ),
                _vm._v(" "),
                _vm._m(1)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        _vm.editmode ? _vm.updateUser() : _vm.createUser()
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("name") },
                          attrs: {
                            type: "text",
                            name: "name",
                            placeholder: "Name"
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "name" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.username,
                              expression: "form.username"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("email") },
                          attrs: {
                            type: "text",
                            name: "username",
                            placeholder: "Username"
                          },
                          domProps: { value: _vm.form.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "username",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "email" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.bio,
                              expression: "form.bio"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.form.errors.has("bio") },
                          attrs: {
                            name: "bio",
                            id: "bio",
                            placeholder: "Short bio for user (Optional)"
                          },
                          domProps: { value: _vm.form.bio },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "bio", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "bio" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.type,
                                expression: "form.type"
                              }
                            ],
                            staticClass: "form-control",
                            class: {
                              "is-invalid": _vm.form.errors.has("type")
                            },
                            attrs: { name: "type", id: "type" },
                            on: {
                              change: function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.$set(
                                  _vm.form,
                                  "type",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              }
                            }
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("Select User Role")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "admin" } }, [
                              _vm._v("Admin User")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "employee" } }, [
                              _vm._v("Employee User")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "manager" } }, [
                              _vm._v("Manager User")
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "type" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.form.errors.has("password")
                          },
                          attrs: {
                            name: "password",
                            id: "password",
                            type: "password",
                            placeholder: "Password"
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("has-error", {
                          attrs: { form: _vm.form, field: "password" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: { type: "button", "data-dismiss": "modal" }
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.editmode,
                              expression: "editmode"
                            }
                          ],
                          staticClass: "btn btn-success",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Update")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.editmode,
                              expression: "!editmode"
                            }
                          ],
                          staticClass: "btn btn-primary",
                          attrs: { type: "submit" }
                        },
                        [_vm._v("Create")]
                      )
                    ])
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("ID")]),
      _vm._v(" "),
      _c("th", [_vm._v("Name")]),
      _vm._v(" "),
      _c("th", [_vm._v("Username")]),
      _vm._v(" "),
      _c("th", [_vm._v("Type")]),
      _vm._v(" "),
      _c("th", [_vm._v("Registered At")]),
      _vm._v(" "),
      _c("th", [_vm._v("Modify")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.tokens.length > 0
      ? _c("div", [
          _c("div", { staticClass: "card card-default" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Authorized Applications")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("table", { staticClass: "table table-borderless mb-0" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.tokens, function(token) {
                    return _c("tr", [
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(token.client.name) +
                              "\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          token.scopes.length > 0
                            ? _c("span", [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(token.scopes.join(", ")) +
                                    "\n                                "
                                )
                              ])
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "action-link text-danger",
                              on: {
                                click: function($event) {
                                  return _vm.revoke(token)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    Revoke\n                                "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Scopes")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "card card-default" }, [
      _c("div", { staticClass: "card-header" }, [
        _c(
          "div",
          {
            staticStyle: {
              display: "flex",
              "justify-content": "space-between",
              "align-items": "center"
            }
          },
          [
            _c("span", [
              _vm._v("\n                    OAuth Clients\n                ")
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "action-link",
                attrs: { tabindex: "-1" },
                on: { click: _vm.showCreateClientForm }
              },
              [
                _vm._v(
                  "\n                    Create New Client\n                "
                )
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm.clients.length === 0
          ? _c("p", { staticClass: "mb-0" }, [
              _vm._v(
                "\n                You have not created any OAuth clients.\n            "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.clients.length > 0
          ? _c("table", { staticClass: "table table-borderless mb-0" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.clients, function(client) {
                  return _c("tr", [
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(client.id) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _vm._v(
                        "\n                            " +
                          _vm._s(client.name) +
                          "\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _c("code", [_vm._v(_vm._s(client.secret))])
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _c(
                        "a",
                        {
                          staticClass: "action-link",
                          attrs: { tabindex: "-1" },
                          on: {
                            click: function($event) {
                              return _vm.edit(client)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Edit\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { "vertical-align": "middle" } }, [
                      _c(
                        "a",
                        {
                          staticClass: "action-link text-danger",
                          on: {
                            click: function($event) {
                              return _vm.destroy(client)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Delete\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-create-client", tabindex: "-1", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.createForm.errors.length > 0
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "ul",
                      _vm._l(_vm.createForm.errors, function(error) {
                        return _c("li", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(error) +
                              "\n                            "
                          )
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("form", { attrs: { role: "form" } }, [
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-md-3 col-form-label" }, [
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.createForm.name,
                          expression: "createForm.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "create-client-name", type: "text" },
                      domProps: { value: _vm.createForm.name },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.store($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.createForm, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-text text-muted" }, [
                      _vm._v(
                        "\n                                    Something your users will recognize and trust.\n                                "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-md-3 col-form-label" }, [
                    _vm._v("Redirect URL")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.createForm.redirect,
                          expression: "createForm.redirect"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", name: "redirect" },
                      domProps: { value: _vm.createForm.redirect },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.store($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.createForm,
                            "redirect",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-text text-muted" }, [
                      _vm._v(
                        "\n                                    Your application's authorization callback URL.\n                                "
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.store }
                },
                [
                  _vm._v(
                    "\n                        Create\n                    "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-edit-client", tabindex: "-1", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.editForm.errors.length > 0
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "ul",
                      _vm._l(_vm.editForm.errors, function(error) {
                        return _c("li", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(error) +
                              "\n                            "
                          )
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("form", { attrs: { role: "form" } }, [
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-md-3 col-form-label" }, [
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editForm.name,
                          expression: "editForm.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "edit-client-name", type: "text" },
                      domProps: { value: _vm.editForm.name },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.update($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.editForm, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-text text-muted" }, [
                      _vm._v(
                        "\n                                    Something your users will recognize and trust.\n                                "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-md-3 col-form-label" }, [
                    _vm._v("Redirect URL")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editForm.redirect,
                          expression: "editForm.redirect"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text", name: "redirect" },
                      domProps: { value: _vm.editForm.redirect },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.update($event)
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.editForm,
                            "redirect",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "form-text text-muted" }, [
                      _vm._v(
                        "\n                                    Your application's authorization callback URL.\n                                "
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.update }
                },
                [
                  _vm._v(
                    "\n                        Save Changes\n                    "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Client ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Secret")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("\n                        Create Client\n                    ")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("strong", [_vm._v("Whoops!")]),
      _vm._v(" Something went wrong!")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("\n                        Edit Client\n                    ")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("strong", [_vm._v("Whoops!")]),
      _vm._v(" Something went wrong!")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c("div", { staticClass: "card card-default" }, [
        _c("div", { staticClass: "card-header" }, [
          _c(
            "div",
            {
              staticStyle: {
                display: "flex",
                "justify-content": "space-between",
                "align-items": "center"
              }
            },
            [
              _c("span", [
                _vm._v(
                  "\n                        Personal Access Tokens\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "action-link",
                  attrs: { tabindex: "-1" },
                  on: { click: _vm.showCreateTokenForm }
                },
                [
                  _vm._v(
                    "\n                        Create New Token\n                    "
                  )
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _vm.tokens.length === 0
            ? _c("p", { staticClass: "mb-0" }, [
                _vm._v(
                  "\n                    You have not created any personal access tokens.\n                "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.tokens.length > 0
            ? _c("table", { staticClass: "table table-borderless mb-0" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.tokens, function(token) {
                    return _c("tr", [
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(token.name) +
                              "\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticStyle: { "vertical-align": "middle" } },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "action-link text-danger",
                              on: {
                                click: function($event) {
                                  return _vm.revoke(token)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    Delete\n                                "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  }),
                  0
                )
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-create-token", tabindex: "-1", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _vm.form.errors.length > 0
                ? _c("div", { staticClass: "alert alert-danger" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c(
                      "ul",
                      _vm._l(_vm.form.errors, function(error) {
                        return _c("li", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(error) +
                              "\n                            "
                          )
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { role: "form" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.store($event)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c("label", { staticClass: "col-md-4 col-form-label" }, [
                      _vm._v("Name")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.name,
                            expression: "form.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          id: "create-token-name",
                          type: "text",
                          name: "name"
                        },
                        domProps: { value: _vm.form.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.scopes.length > 0
                    ? _c("div", { staticClass: "form-group row" }, [
                        _c(
                          "label",
                          { staticClass: "col-md-4 col-form-label" },
                          [_vm._v("Scopes")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-6" },
                          _vm._l(_vm.scopes, function(scope) {
                            return _c("div", [
                              _c("div", { staticClass: "checkbox" }, [
                                _c("label", [
                                  _c("input", {
                                    attrs: { type: "checkbox" },
                                    domProps: {
                                      checked: _vm.scopeIsAssigned(scope.id)
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.toggleScope(scope.id)
                                      }
                                    }
                                  }),
                                  _vm._v(
                                    "\n\n                                                " +
                                      _vm._s(scope.id) +
                                      "\n                                        "
                                  )
                                ])
                              ])
                            ])
                          }),
                          0
                        )
                      ])
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-secondary",
                  attrs: { type: "button", "data-dismiss": "modal" }
                },
                [_vm._v("Close")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { type: "button" },
                  on: { click: _vm.store }
                },
                [
                  _vm._v(
                    "\n                        Create\n                    "
                  )
                ]
              )
            ])
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal-access-token", tabindex: "-1", role: "dialog" }
      },
      [
        _c("div", { staticClass: "modal-dialog" }, [
          _c("div", { staticClass: "modal-content" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "modal-body" }, [
              _c("p", [
                _vm._v(
                  "\n                        Here is your new personal access token. This is the only time it will be shown so don't lose it!\n                        You may now use this token to make API requests.\n                    "
                )
              ]),
              _vm._v(" "),
              _c(
                "textarea",
                { staticClass: "form-control", attrs: { rows: "10" } },
                [_vm._v(_vm._s(_vm.accessToken))]
              )
            ]),
            _vm._v(" "),
            _vm._m(4)
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [_c("th", [_vm._v("Name")]), _vm._v(" "), _c("th")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v("\n                        Create Token\n                    ")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-0" }, [
      _c("strong", [_vm._v("Whoops!")]),
      _vm._v(" Something went wrong!")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h4", { staticClass: "modal-title" }, [
        _vm._v(
          "\n                        Personal Access Token\n                    "
        )
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-hidden": "true"
          }
        },
        [_vm._v("×")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12 col-sm-6 col-md-3" }, [
            _c("div", { staticClass: "info-box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "info-box-content" },
                [
                  _c("span", { staticClass: "info-box-text" }, [
                    _vm._v("TODO")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.cards, function(card, index) {
                    return index == 0
                      ? _c("span", { staticClass: "info-box-number" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(card.TODO) +
                              "\n                            "
                          ),
                          _c("small")
                        ])
                      : _vm._e()
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-6 col-md-3" }, [
            _c("div", { staticClass: "info-box mb-3" }, [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "info-box-content" },
                [
                  _c("span", { staticClass: "info-box-text" }, [
                    _vm._v("DOING")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.cards, function(card, index) {
                    return index == 1
                      ? _c("span", { staticClass: "info-box-number" }, [
                          _vm._v(_vm._s(card.DOING))
                        ])
                      : _vm._e()
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix hidden-md-up" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-6 col-md-3" }, [
            _c("div", { staticClass: "info-box mb-3" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "info-box-content" },
                [
                  _c("span", { staticClass: "info-box-text" }, [
                    _vm._v("REVIEW")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.cards, function(card, index) {
                    return index == 2
                      ? _c("span", { staticClass: "info-box-number" }, [
                          _vm._v(_vm._s(card.REVIEW))
                        ])
                      : _vm._e()
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 col-sm-6 col-md-3" }, [
            _c("div", { staticClass: "info-box mb-3" }, [
              _vm._m(4),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "info-box-content" },
                [
                  _c("span", { staticClass: "info-box-text" }, [
                    _vm._v("DONE")
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.cards, function(card, index) {
                    return index == 3
                      ? _c("span", { staticClass: "info-box-number" }, [
                          _vm._v(_vm._s(card.DONE))
                        ])
                      : _vm._e()
                  })
                ],
                2
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row mb-3" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0 text-dark" }, [_vm._v("Dashboard")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Dashboard")
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon bg-info elevation-1" }, [
      _c("i", {})
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon bg-warning elevation-1" }, [
      _c("i", {})
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon bg-danger elevation-1" }, [
      _c("i", {})
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "info-box-icon bg-success elevation-1" }, [
      _c("i", {})
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Developer.vue?vue&type=template&id=80c8f68a&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Developer.vue?vue&type=template&id=80c8f68a& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row justify-content-center" }, [
      _c(
        "div",
        { staticClass: "col-md-12" },
        [
          _c("passport-clients"),
          _vm._v(" "),
          _c("passport-authorized-clients"),
          _vm._v(" "),
          _c("passport-personal-access-tokens")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Add.vue?vue&type=template&id=24cc6ba0&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/Add.vue?vue&type=template&id=24cc6ba0& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "panel-body" },
          [
            _c("log-form"),
            _vm._v(" "),
            _c("div", { staticClass: "class-form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-save" }),
                  _vm._v(" Save\n                    ")
                ]
              )
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-tilte" }, [_vm._v("Buat Log Baru")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Edit.vue?vue&type=template&id=2087af9b&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/Edit.vue?vue&type=template&id=2087af9b& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "panel-body" },
          [
            _c("log-form"),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-save" }),
                  _vm._v(" Update\n                    ")
                ]
              )
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [_vm._v("Edit Log")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Form.vue?vue&type=template&id=45733d56&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/Form.vue?vue&type=template&id=45733d56& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "form-group required" }, [
          _c("label", { staticClass: "control-label", attrs: { for: "" } }, [
            _vm._v("Kategori")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.log.category_id,
                  expression: "log.category_id"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.errors.category_id },
              attrs: { disabled: _vm.$gate.isManager(), name: "no_po" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.log,
                    "category_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Kategori")]),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: category.id } },
                  [_vm._v(_vm._s(category.name))]
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.category_id
            ? _c("p", { staticClass: "text-danger" }, [
                _vm._v(_vm._s(_vm.errors.category_id[0]))
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "container card " }, [
        _c("div", [
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Date")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.date,
                      expression: "log.date"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.date },
                  attrs: {
                    disabled: _vm.$gate.isManager(),
                    type: "date",
                    placeholder: "Masukan Tanggal"
                  },
                  domProps: { value: _vm.log.date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "date", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.date
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.date[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Keterangan")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.description,
                      expression: "log.description"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.description },
                  attrs: {
                    disabled: _vm.$gate.isManager(),
                    type: "text",
                    placeholder: "Masukan Keterangan"
                  },
                  domProps: { value: _vm.log.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "description", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.description
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.description[0]))
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("No PO")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.no_po,
                      expression: "log.no_po"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.no_po },
                  attrs: {
                    disabled: _vm.$gate.isManager(),
                    type: "text",
                    placeholder: "Masukan No PO"
                  },
                  domProps: { value: _vm.log.no_po },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "no_po", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.no_po
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.no_po[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm.log.category_id != 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("No IST")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.no_ist,
                          expression: "log.no_ist"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.no_ist },
                      attrs: {
                        disabled: _vm.$gate.isManager(),
                        type: "text",
                        placeholder: "Masukan No IST"
                      },
                      domProps: { value: _vm.log.no_ist },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "no_ist", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.no_ist
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.no_ist[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("No Return")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.no_return,
                      expression: "log.no_return"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.no_return },
                  attrs: {
                    disabled: _vm.$gate.isManager(),
                    type: "text",
                    placeholder: "Masukan No Return"
                  },
                  domProps: { value: _vm.log.no_return },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "no_return", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.no_return
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.no_return[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Nama Suplier")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.suplier_name,
                      expression: "log.suplier_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.suplier_name },
                  attrs: {
                    disabled: _vm.$gate.isManager(),
                    type: "text",
                    placeholder: "Masukan Nama Suplier"
                  },
                  domProps: { value: _vm.log.suplier_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "suplier_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.suplier_name
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.suplier_name[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm.log.category_id != 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("Nama Store")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.store_name,
                          expression: "log.store_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.store_name },
                      attrs: {
                        disabled: _vm.$gate.isManager(),
                        type: "text",
                        placeholder: "Masukan Nama Store"
                      },
                      domProps: { value: _vm.log.store_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "store_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.store_name
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.store_name[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Intruksi Atasan")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.intruction,
                      expression: "log.intruction"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.intruction },
                  attrs: {
                    disabled: _vm.$gate.isEmployee(),
                    type: "text",
                    placeholder: "Masukan Inturkisi Atasan"
                  },
                  domProps: { value: _vm.log.intruction },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "intruction", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.intruction
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.intruction[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Status")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.log.status,
                        expression: "log.status"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.status },
                    attrs: { disabled: _vm.$gate.isEmployee(), name: "no_po" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.log,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [_vm._v("Status")]),
                    _vm._v(" "),
                    _vm._l(_vm.statuses, function(status, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: status.name } },
                        [_vm._v(_vm._s(status.name))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.errors.status
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.status[0]))
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/FormEdit.vue?vue&type=template&id=a1531002&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/FormEdit.vue?vue&type=template&id=a1531002& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "form-group required" }, [
          _c("label", { staticClass: "control-label", attrs: { for: "" } }, [
            _vm._v("Kategori")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.log.category_id,
                  expression: "log.category_id"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.errors.category_id },
              attrs: { name: "no_po" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.log,
                    "category_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Kategori")]),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: category.id } },
                  [_vm._v(_vm._s(category.name))]
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.category_id
            ? _c("p", { staticClass: "text-danger" }, [
                _vm._v(_vm._s(_vm.errors.category_id[0]))
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "container card " }, [
        _c("div", [
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Date")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.date,
                      expression: "log.date"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.date },
                  attrs: { type: "date", placeholder: "Masukan Tanggal" },
                  domProps: { value: _vm.log.date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "date", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.date
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.date[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Keterangan")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.description,
                      expression: "log.description"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.description },
                  attrs: { type: "text", placeholder: "Masukan Keterangan" },
                  domProps: { value: _vm.log.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "description", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.description
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.description[0]))
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("No PO")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.no_po,
                      expression: "log.no_po"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.no_po },
                  attrs: { type: "text", placeholder: "Masukan No PO" },
                  domProps: { value: _vm.log.no_po },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "no_po", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.no_po
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.no_po[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm.log.category_id != 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("No IST")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.no_ist,
                          expression: "log.no_ist"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.no_ist },
                      attrs: { type: "text", placeholder: "Masukan No IST" },
                      domProps: { value: _vm.log.no_ist },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "no_ist", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.no_ist
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.no_ist[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("No Return")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.no_return,
                      expression: "log.no_return"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.no_return },
                  attrs: { type: "text", placeholder: "Masukan No Return" },
                  domProps: { value: _vm.log.no_return },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "no_return", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.no_return
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.no_return[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Nama Suplier")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.suplier_name,
                      expression: "log.suplier_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.suplier_name },
                  attrs: { type: "text", placeholder: "Masukan Nama Suplier" },
                  domProps: { value: _vm.log.suplier_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "suplier_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.suplier_name
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.suplier_name[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm.log.category_id != 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("Nama Store")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.store_name,
                          expression: "log.store_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.store_name },
                      attrs: {
                        type: "text",
                        placeholder: "Masukan Nama Store"
                      },
                      domProps: { value: _vm.log.store_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "store_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.store_name
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.store_name[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Intruksi Atasan")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.intruction,
                      expression: "log.intruction"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.intruction },
                  attrs: {
                    disabled: _vm.$gate.isEmployee(),
                    type: "text",
                    placeholder: "Masukan Inturkisi Atasan"
                  },
                  domProps: { value: _vm.log.intruction },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "intruction", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.intruction
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.intruction[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Status")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.log.status,
                        expression: "log.status"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.status },
                    attrs: { disabled: _vm.$gate.isEmployee(), name: "no_po" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.log,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [_vm._v("Status")]),
                    _vm._v(" "),
                    _vm._l(_vm.statuses, function(status, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: status.name } },
                        [_vm._v(_vm._s(status.name))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.errors.status
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.status[0]))
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Index.vue?vue&type=template&id=3225fd91&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/Index.vue?vue&type=template&id=3225fd91& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "row" }, [_c("router-view")], 1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6 col-6" }, [
          _c("h2", [_vm._v("Log Book")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 mr-10 " })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Log.vue?vue&type=template&id=7da08cc3&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/logs/Log.vue?vue&type=template&id=7da08cc3& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c(
              "h3",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.$gate.isManager() && !_vm.$gate.isAdmin(),
                    expression: "!$gate.isManager() && !$gate.isAdmin()"
                  }
                ],
                staticClass: "card-title"
              },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary lg",
                    attrs: { to: { name: "logs.add" } }
                  },
                  [
                    _c("i", { staticClass: "fas fa-plus" }),
                    _vm._v(
                      "\n                            Tambah\n                        "
                    )
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-tools" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.search,
                    expression: "search"
                  }
                ],
                staticClass: "form-control form-control-navbar",
                attrs: { type: "text", placeholder: "Cari..." },
                domProps: { value: _vm.search },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.search = $event.target.value
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive p-0" }, [
            _c("table", { staticClass: "table table-striped" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm.log.logs.from == null
                    ? _c("tr", [
                        _c(
                          "th",
                          { attrs: { colspan: "9" } },
                          [
                            _c("center", [
                              _vm._v("There are no records to show")
                            ])
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.log.logs.data, function(log) {
                    return _c("tr", { key: log.id }, [
                      _c("td", [_vm._v(_vm._s(log.id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.category_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm._f("myDate")(log.date)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.description))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.no_po))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.no_ist))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.no_return))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.suplier_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.intruction))]),
                      _vm._v(" "),
                      _c("td", [
                        log.status == "TODO"
                          ? _c("span", { staticClass: "badge bg-primary" }, [
                              _vm._v(_vm._s(log.status))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        log.status == "DOING"
                          ? _c("span", { staticClass: "badge bg-warning" }, [
                              _vm._v(_vm._s(log.status))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        log.status == "REVIEW"
                          ? _c("span", { staticClass: "badge bg-danger" }, [
                              _vm._v(" " + _vm._s(log.status))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        log.status == "DONE"
                          ? _c("span", { staticClass: "badge bg-success" }, [
                              _vm._v(_vm._s(log.status))
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        log.user_id == _vm.$gate.isIdEmployee() ||
                        _vm.$gate.isIdAdmin() == 1 ||
                        _vm.$gate.isIdManager() == 2
                          ? _c(
                              "span",
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "logs.edit",
                                        params: { id: log.id }
                                      }
                                    }
                                  },
                                  [_c("i", { staticClass: "fa fa-edit blue" })]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        log.user_id == _vm.$gate.isIdEmployee() ||
                        _vm.$gate.isIdAdmin() == 1
                          ? _c("span", [
                              _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.$gate.isManager(),
                                      expression: "!$gate.isManager()"
                                    }
                                  ],
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteLog(log.id)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-trash red" })]
                              )
                            ])
                          : _vm._e()
                      ])
                    ])
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _vm.log.logs.data
                ? _c("p", [
                    _c("i", { staticClass: "fa fa-bars" }),
                    _vm._v(
                      " " +
                        _vm._s(_vm.log.logs.data.length) +
                        " item dari " +
                        _vm._s(_vm.log.logs.total) +
                        " total data"
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "pull-right" },
              [
                _vm.log.logs.data && _vm.log.logs.data.length > 0
                  ? _c("b-pagination", {
                      attrs: {
                        "total-rows": _vm.log.logs.total,
                        "per-page": _vm.log.logs.per_page,
                        "aria-controls": "log"
                      },
                      model: {
                        value: _vm.page,
                        callback: function($$v) {
                          _vm.page = $$v
                        },
                        expression: "page"
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "10px" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("CATEGORY")]),
        _vm._v(" "),
        _c("th", [_vm._v("DATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("DESCRIPTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("NO PO")]),
        _vm._v(" "),
        _c("th", [_vm._v("NO IST ")]),
        _vm._v(" "),
        _c("th", [_vm._v("NO RETURN")]),
        _vm._v(" "),
        _c("th", [_vm._v("SUPLIER NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("INTRUCTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("STATUS")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "30px" } }, [_vm._v("ACTIONS")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Add.vue?vue&type=template&id=73289f82&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/Add.vue?vue&type=template&id=73289f82& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "panel-body" },
          [
            _c("log-form"),
            _vm._v(" "),
            _c("div", { staticClass: "class-form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-save" }),
                  _vm._v(" Save\n                    ")
                ]
              )
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("h3", { staticClass: "panel-tilte" }, [_vm._v("Buat Log Baru")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Edit.vue?vue&type=template&id=c49c100e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/Edit.vue?vue&type=template&id=c49c100e& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-12" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-body" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "panel-body" },
          [
            _c("log-form"),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-save" }),
                  _vm._v(" Update\n                    ")
                ]
              )
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-heading" }, [
      _c("h3", { staticClass: "panel-title" }, [_vm._v("Edit Log")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Form.vue?vue&type=template&id=5a70a9b3&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/Form.vue?vue&type=template&id=5a70a9b3& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "form-group required" }, [
          _c("label", { staticClass: "control-label", attrs: { for: "" } }, [
            _vm._v("Kategori")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.log.category_id,
                  expression: "log.category_id"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.errors.category_id },
              attrs: { disabled: _vm.$gate.isManager(), name: "no_po" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.log,
                    "category_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Kategori")]),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: category.id } },
                  [_vm._v(_vm._s(category.name))]
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.category_id
            ? _c("p", { staticClass: "text-danger" }, [
                _vm._v(_vm._s(_vm.errors.category_id[0]))
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "container card " }, [
        _c("div", [
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Date")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.date,
                      expression: "log.date"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.date },
                  attrs: {
                    disabled: _vm.$gate.isManager(),
                    type: "date",
                    placeholder: "Masukan Tanggal"
                  },
                  domProps: { value: _vm.log.date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "date", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.date
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.date[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Keterangan")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.description,
                      expression: "log.description"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.description },
                  attrs: {
                    disabled: _vm.$gate.isManager(),
                    type: "text",
                    placeholder: "Masukan Keterangan"
                  },
                  domProps: { value: _vm.log.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "description", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.description
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.description[0]))
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("No PO")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.no_po,
                      expression: "log.no_po"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.no_po },
                  attrs: {
                    disabled: _vm.$gate.isManager(),
                    type: "text",
                    placeholder: "Masukan No PO"
                  },
                  domProps: { value: _vm.log.no_po },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "no_po", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.no_po
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.no_po[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm.log.category_id != 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("No IST")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.no_ist,
                          expression: "log.no_ist"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.no_ist },
                      attrs: {
                        disabled: _vm.$gate.isManager(),
                        type: "text",
                        placeholder: "Masukan No IST"
                      },
                      domProps: { value: _vm.log.no_ist },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "no_ist", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.no_ist
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.no_ist[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("No Return")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.no_return,
                      expression: "log.no_return"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.no_return },
                  attrs: {
                    disabled: _vm.$gate.isManager(),
                    type: "text",
                    placeholder: "Masukan No Return"
                  },
                  domProps: { value: _vm.log.no_return },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "no_return", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.no_return
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.no_return[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm.log.category_id == 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("Nama Suplier")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.suplier_name,
                          expression: "log.suplier_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.suplier_name },
                      attrs: {
                        disabled: _vm.$gate.isManager(),
                        type: "text",
                        placeholder: "Masukan Nama Suplier"
                      },
                      domProps: { value: _vm.log.suplier_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "suplier_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.suplier_name
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.suplier_name[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.log.category_id != 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("Nama Store")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.store_name,
                          expression: "log.store_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.store_name },
                      attrs: {
                        disabled: _vm.$gate.isManager(),
                        type: "text",
                        placeholder: "Masukan Nama Store"
                      },
                      domProps: { value: _vm.log.store_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "store_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.store_name
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.store_name[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Intruksi Atasan")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.intruction,
                      expression: "log.intruction"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.intruction },
                  attrs: {
                    type: "text",
                    placeholder: "Masukan Inturkisi Atasan"
                  },
                  domProps: { value: _vm.log.intruction },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "intruction", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.intruction
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.intruction[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Status")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.log.status,
                        expression: "log.status"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.status },
                    attrs: { name: "no_po" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.log,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [_vm._v("Status")]),
                    _vm._v(" "),
                    _vm._l(_vm.statuses, function(status, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: status.name } },
                        [_vm._v(_vm._s(status.name))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.errors.status
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.status[0]))
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/FormEdit.vue?vue&type=template&id=f96d3d46&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/FormEdit.vue?vue&type=template&id=f96d3d46& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "form-group required" }, [
          _c("label", { staticClass: "control-label", attrs: { for: "" } }, [
            _vm._v("Kategori")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.log.category_id,
                  expression: "log.category_id"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.errors.category_id },
              attrs: { name: "no_po" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.log,
                    "category_id",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("Kategori")]),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: category.id } },
                  [_vm._v(_vm._s(category.name))]
                )
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm.errors.category_id
            ? _c("p", { staticClass: "text-danger" }, [
                _vm._v(_vm._s(_vm.errors.category_id[0]))
              ])
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", [
      _c("div", { staticClass: "container card " }, [
        _c("div", [
          _c("div", { staticClass: "row mt-3" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Date")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.date,
                      expression: "log.date"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.date },
                  attrs: { type: "date", placeholder: "Masukan Tanggal" },
                  domProps: { value: _vm.log.date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "date", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.date
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.date[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c("label", { staticClass: "control-label" }, [
                  _vm._v("Keterangan")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.description,
                      expression: "log.description"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.description },
                  attrs: { type: "text", placeholder: "Masukan Keterangan" },
                  domProps: { value: _vm.log.description },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "description", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.description
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.description[0]))
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("No PO")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.no_po,
                      expression: "log.no_po"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.no_po },
                  attrs: { type: "text", placeholder: "Masukan No PO" },
                  domProps: { value: _vm.log.no_po },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "no_po", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.no_po
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.no_po[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm.log.category_id != 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("No IST")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.no_ist,
                          expression: "log.no_ist"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.no_ist },
                      attrs: { type: "text", placeholder: "Masukan No IST" },
                      domProps: { value: _vm.log.no_ist },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "no_ist", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.no_ist
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.no_ist[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("No Return")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.no_return,
                      expression: "log.no_return"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.no_return },
                  attrs: { type: "text", placeholder: "Masukan No Return" },
                  domProps: { value: _vm.log.no_return },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "no_return", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.no_return
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.no_return[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _vm.log.category_id == 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("Nama Suplier")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.suplier_name,
                          expression: "log.suplier_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.suplier_name },
                      attrs: {
                        type: "text",
                        placeholder: "Masukan Nama Suplier"
                      },
                      domProps: { value: _vm.log.suplier_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "suplier_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.suplier_name
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.suplier_name[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.log.category_id != 1
              ? _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group required" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "" } },
                      [_vm._v("Nama Store")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.log.store_name,
                          expression: "log.store_name"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.store_name },
                      attrs: {
                        type: "text",
                        placeholder: "Masukan Nama Store"
                      },
                      domProps: { value: _vm.log.store_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.log, "store_name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.errors.store_name
                      ? _c("p", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.store_name[0]))
                        ])
                      : _vm._e()
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Intruksi Atasan")]
                ),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.log.intruction,
                      expression: "log.intruction"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.errors.intruction },
                  attrs: {
                    type: "text",
                    placeholder: "Masukan Inturkisi Atasan"
                  },
                  domProps: { value: _vm.log.intruction },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.log, "intruction", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _vm.errors.intruction
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.intruction[0]))
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("div", { staticClass: "form-group required" }, [
                _c(
                  "label",
                  { staticClass: "control-label", attrs: { for: "" } },
                  [_vm._v("Status")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.log.status,
                        expression: "log.status"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.errors.status },
                    attrs: { name: "no_po" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.log,
                          "status",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "" } }, [_vm._v("Status")]),
                    _vm._v(" "),
                    _vm._l(_vm.statuses, function(status, index) {
                      return _c(
                        "option",
                        { key: index, domProps: { value: status.name } },
                        [_vm._v(_vm._s(status.name))]
                      )
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.errors.status
                  ? _c("p", { staticClass: "text-danger" }, [
                      _vm._v(_vm._s(_vm.errors.status[0]))
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Index.vue?vue&type=template&id=5a44c0f3&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/Index.vue?vue&type=template&id=5a44c0f3& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [
      _c("div", { staticClass: "row" }, [_c("router-view")], 1)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6 col-6" }, [
          _c("h2", [_vm._v("Log Book Report")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6 mr-10 " })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Report.vue?vue&type=template&id=37898063&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/reports/Report.vue?vue&type=template&id=37898063& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("div", { staticClass: "card-tools" }, [
              _c(
                "a",
                {
                  staticClass: "btn btn-default",
                  attrs: { href: "", target: "_blank" },
                  on: { click: _vm.print }
                },
                [_c("i", { staticClass: "fas fa-print" }), _vm._v(" Print")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive p-0" }, [
            _c("table", { staticClass: "table table-striped" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  _vm.log.logs.from == null
                    ? _c("tr", [
                        _c(
                          "th",
                          { attrs: { colspan: "9" } },
                          [
                            _c("center", [
                              _vm._v("There are no records to show")
                            ])
                          ],
                          1
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.log.logs.data, function(log) {
                    return _c("tr", { key: log.id }, [
                      _c("td", [_vm._v(_vm._s(log.id))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(_vm._f("myDate")(log.date)))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.user_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.category_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.description))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.no_po))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.no_ist))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.no_return))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.suplier_name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(log.intruction))]),
                      _vm._v(" "),
                      _c("td", [
                        log.status == "TODO"
                          ? _c("span", { staticClass: "badge bg-primary" }, [
                              _vm._v(_vm._s(log.status))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        log.status == "DOING"
                          ? _c("span", { staticClass: "badge bg-warning" }, [
                              _vm._v(_vm._s(log.status))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        log.status == "REVIEW"
                          ? _c("span", { staticClass: "badge bg-danger" }, [
                              _vm._v(" " + _vm._s(log.status))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        log.status == "DONE"
                          ? _c("span", { staticClass: "badge bg-success" }, [
                              _vm._v(_vm._s(log.status))
                            ])
                          : _vm._e()
                      ])
                    ])
                  })
                ],
                2
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _vm.log.logs.data
                ? _c("p", [
                    _c("i", { staticClass: "fa fa-bars" }),
                    _vm._v(
                      " " +
                        _vm._s(_vm.log.logs.data.length) +
                        " item dari " +
                        _vm._s(_vm.log.logs.total) +
                        " total data"
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "pull-right" },
              [
                _vm.log.logs.data && _vm.log.logs.data.length > 0
                  ? _c("b-pagination", {
                      attrs: {
                        "total-rows": _vm.log.logs.total,
                        "per-page": _vm.log.logs.per_page,
                        "aria-controls": "log"
                      },
                      model: {
                        value: _vm.page,
                        callback: function($$v) {
                          _vm.page = $$v
                        },
                        expression: "page"
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "10px" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("DATE")]),
        _vm._v(" "),
        _c("th", [_vm._v("USER")]),
        _vm._v(" "),
        _c("th", [_vm._v("CATEGORY")]),
        _vm._v(" "),
        _c("th", [_vm._v("DESCRIPTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("NO PO")]),
        _vm._v(" "),
        _c("th", [_vm._v("NO IST ")]),
        _vm._v(" "),
        _c("th", [_vm._v("NO RETURN ")]),
        _vm._v(" "),
        _c("th", [_vm._v("SUPLIER NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("INTRUCTION")]),
        _vm._v(" "),
        _c("th", [_vm._v("STATUS")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Gate.js":
/*!******************************!*\
  !*** ./resources/js/Gate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gate; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gate =
/*#__PURE__*/
function () {
  function Gate(user) {
    _classCallCheck(this, Gate);

    this.user = user;
  }

  _createClass(Gate, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.user.type === 'admin';
    }
  }, {
    key: "isIdAdmin",
    value: function isIdAdmin() {
      var id = this.user.id;
      return id;
    }
  }, {
    key: "isEmployee",
    value: function isEmployee() {
      return this.user.type === 'employee';
    }
  }, {
    key: "isIdEmployee",
    value: function isIdEmployee() {
      var id = this.user.id;
      return id;
    }
  }, {
    key: "isManager",
    value: function isManager() {
      return this.user.type === 'manager';
    }
  }, {
    key: "isIdManager",
    value: function isIdManager() {
      var id = this.user.id;
      return id;
    }
  }, {
    key: "isAdminOrAuthor",
    value: function isAdminOrAuthor() {
      if (this.user.type === 'admin' || this.user.type === 'author') {
        return true;
      }
    }
  }, {
    key: "isAuthorOrUser",
    value: function isAuthorOrUser() {
      if (this.user.type === 'user' || this.user.type === 'author') {
        return true;
      }
    }
  }]);

  return Gate;
}();



/***/ }),

/***/ "./resources/js/api.js":
/*!*****************************!*\
  !*** ./resources/js/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
 // import Nprogress from "nprogress";

var $axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "/api/v1",
  headers: {
    // Authorization: localStorage.getItem('token') != 'null' ? 'Bearer ' + localStorage.getItem('token'):'',
    "Content-Type": "application/json"
  }
}); // $axios.interceptors.request.use(config => {
//     Nprogress.start();
//     return config;
// });
//
// $axios.interceptors.response.use(response => {
//     Nprogress.done();
//     return response;
// });
// $axios.interceptors.request.use(
//     function(config) {
//         const token = store.state.token;
//         if (token) config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     },
//     function(error) {
//         return Promise.reject(error);
//     }
// );

/* harmony default export */ __webpack_exports__["default"] = ($axios);

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./resources/js/router.js");
/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store.js */ "./resources/js/store/store.js");
/* harmony import */ var _Gate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Gate.js */ "./resources/js/Gate.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-vue/dist/bootstrap-vue.css */ "./node_modules/bootstrap-vue/dist/bootstrap-vue.css");
/* harmony import */ var bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_dist_bootstrap_vue_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-progressbar */ "./node_modules/vue-progressbar/dist/vue-progressbar.js");
/* harmony import */ var vue_progressbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_progressbar__WEBPACK_IMPORTED_MODULE_10__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");


window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

 //import gate class

 //prototype biar bisa di akses di semua frontend/ui Vue

Vue.prototype.$gate = new _Gate_js__WEBPACK_IMPORTED_MODULE_4__["default"](window.user); //sheetalert2


window.swal = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a; //instans

var toast = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.toast = toast;
window.Form = vform__WEBPACK_IMPORTED_MODULE_1__["Form"];
Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["HasError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["HasError"]);
Vue.component(vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"].name, vform__WEBPACK_IMPORTED_MODULE_1__["AlertError"]); //register vue pagination

Vue.component('pagination', __webpack_require__(/*! laravel-vue-pagination */ "./node_modules/laravel-vue-pagination/dist/laravel-vue-pagination.common.js"));

Vue.use(vue_router__WEBPACK_IMPORTED_MODULE_6__["default"]);
 // Install BootstrapVue

Vue.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BootstrapVue"]); // Optionally install the BootstrapVue icon components plugin

Vue.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["IconsPlugin"]);

 //buat progress bar sbelumnya install npm install vue-progressbar


Vue.use(vue_progressbar__WEBPACK_IMPORTED_MODULE_10___default.a, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '3px'
}); // const routes = [
//     { path: '/dashboard', component: require('./components/Dashboard.vue').default },
//     { path: '/users', component: require('./components/Users.vue').default },
//     { path: '/Developer', component: require('./components/Developer.vue').default },
//     { path: '/profile', component: require('./components/Profile.vue').default },
//     { path: '*', component: require('./components/NotFound.vue').default },
// ]
// const router = new VueRouter({
//     mode: 'history',
//     routes // short for `routes: routes`
//
// })

Vue.filter('upText', function (text) {
  //return text.toUpperCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
});
Vue.filter('myDate', function (created) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(created).format('MMMM Do YYYY');
});
window.Fire = new Vue();
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('passport-clients', __webpack_require__(/*! ./components/passport/Clients.vue */ "./resources/js/components/passport/Clients.vue")["default"]);
Vue.component('passport-authorized-clients', __webpack_require__(/*! ./components/passport/AuthorizedClients.vue */ "./resources/js/components/passport/AuthorizedClients.vue")["default"]);
Vue.component('passport-personal-access-tokens', __webpack_require__(/*! ./components/passport/PersonalAccessTokens.vue */ "./resources/js/components/passport/PersonalAccessTokens.vue")["default"]); //notfound

Vue.component('not-found', __webpack_require__(/*! ./components/NotFound.vue */ "./resources/js/components/NotFound.vue")["default"]);
Vue.component('example-component', __webpack_require__(/*! ./components/ExampleComponent.vue */ "./resources/js/components/ExampleComponent.vue")["default"]);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_2__["default"],
  store: _store_store_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  data: {
    search: ''
  },
  methods: {
    //if searchit call ,wait for 2second and fire the searching
    searchit: _.debounce(function () {
      //console.log("searching..");
      //custom event
      Fire.$emit('searching');
    }, 1000),
    printme: function printme() {
      window.print();
    }
  }
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

  __webpack_require__(/*! admin-lte */ "./node_modules/admin-lte/dist/js/adminlte.min.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/NotFound.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/NotFound.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue?vue&type=template&id=2ce50e5a& */ "./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a&");
/* harmony import */ var _NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFound.vue?vue&type=script&lang=js& */ "./resources/js/components/NotFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NotFound.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NotFound.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/NotFound.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NotFound.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NotFound.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NotFound.vue?vue&type=template&id=2ce50e5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NotFound.vue?vue&type=template&id=2ce50e5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_2ce50e5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Profile.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Profile.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=3bd692e4& */ "./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=3bd692e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile.vue?vue&type=template&id=3bd692e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_3bd692e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Users.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Users.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=30c27aa6& */ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Users.vue?vue&type=template&id=30c27aa6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=30c27aa6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Users.vue?vue&type=template&id=30c27aa6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_30c27aa6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/passport/AuthorizedClients.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/passport/AuthorizedClients.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true& */ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true&");
/* harmony import */ var _AuthorizedClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthorizedClients.vue?vue&type=script&lang=js& */ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& */ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthorizedClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "397d14ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/passport/AuthorizedClients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizedClients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=style&index=0&id=397d14ca&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_style_index_0_id_397d14ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/AuthorizedClients.vue?vue&type=template&id=397d14ca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthorizedClients_vue_vue_type_template_id_397d14ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/passport/Clients.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/passport/Clients.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients.vue?vue&type=template&id=1552a5b6&scoped=true& */ "./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true&");
/* harmony import */ var _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.vue?vue&type=script&lang=js& */ "./resources/js/components/passport/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& */ "./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1552a5b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/passport/Clients.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/passport/Clients.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/passport/Clients.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=style&index=0&id=1552a5b6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_style_index_0_id_1552a5b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Clients.vue?vue&type=template&id=1552a5b6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/Clients.vue?vue&type=template&id=1552a5b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Clients_vue_vue_type_template_id_1552a5b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/passport/PersonalAccessTokens.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/passport/PersonalAccessTokens.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true& */ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true&");
/* harmony import */ var _PersonalAccessTokens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalAccessTokens.vue?vue&type=script&lang=js& */ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& */ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PersonalAccessTokens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49962cc0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/passport/PersonalAccessTokens.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalAccessTokens.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=style&index=0&id=49962cc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_style_index_0_id_49962cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/passport/PersonalAccessTokens.vue?vue&type=template&id=49962cc0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalAccessTokens_vue_vue_type_template_id_49962cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _views_Dashboard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Dashboard.vue */ "./resources/js/views/Dashboard.vue");
/* harmony import */ var _views_Developer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/Developer */ "./resources/js/views/Developer.vue");
/* harmony import */ var _components_Users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Users */ "./resources/js/components/Users.vue");
/* harmony import */ var _views_logs_Index_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/logs/Index.vue */ "./resources/js/views/logs/Index.vue");
/* harmony import */ var _views_logs_Log_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/logs/Log.vue */ "./resources/js/views/logs/Log.vue");
/* harmony import */ var _views_logs_Add_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/logs/Add.vue */ "./resources/js/views/logs/Add.vue");
/* harmony import */ var _views_logs_Edit_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/logs/Edit.vue */ "./resources/js/views/logs/Edit.vue");
/* harmony import */ var _views_reports_Index_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/reports/Index.vue */ "./resources/js/views/reports/Index.vue");
/* harmony import */ var _views_reports_Report_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/reports/Report.vue */ "./resources/js/views/reports/Report.vue");
/* harmony import */ var _views_reports_Add_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/reports/Add.vue */ "./resources/js/views/reports/Add.vue");
/* harmony import */ var _views_reports_Edit_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/reports/Edit.vue */ "./resources/js/views/reports/Edit.vue");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Profile */ "./resources/js/components/Profile.vue");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/NotFound */ "./resources/js/components/NotFound.vue");















vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);
var routes = [{
  path: "/dashboard",
  name: "dashboard",
  component: _views_Dashboard_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
  props: true
}, {
  path: "/users",
  name: "users",
  component: _components_Users__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  path: "/logs",
  component: _views_logs_Index_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
  // meta: { requiresAuth: true },
  children: [{
    path: "",
    name: "logs.data",
    component: _views_logs_Log_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, {
    path: "add",
    name: "logs.add",
    component: _views_logs_Add_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, {
    path: "edit/:id",
    name: "logs.edit",
    component: _views_logs_Edit_vue__WEBPACK_IMPORTED_MODULE_8__["default"]
  }]
}, {
  path: "/reports",
  component: _views_reports_Index_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
  // meta: { requiresAuth: true },
  children: [{
    path: "",
    name: "reports.data",
    component: _views_reports_Report_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, {
    path: "add",
    name: "reports.add",
    component: _views_reports_Add_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  }, {
    path: "edit/:id",
    name: "reports.edit",
    component: _views_reports_Edit_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  }]
}, {
  path: "/developer",
  name: "developers",
  component: _views_Developer__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  path: "*",
  component: _components_NotFound__WEBPACK_IMPORTED_MODULE_14__["default"]
}, {
  path: "/home",
  redirect: "/dashboard"
}];
var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: "history",
  //   base: process.env.BASE_URL,
  routes: routes
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/services/dashboardService.js":
/*!***************************************************!*\
  !*** ./resources/js/services/dashboardService.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ "./resources/js/api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getCards: function getCards(page, search) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/dashboard');
  },
  getReport: function getReport(page, search) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/dashboard/report');
  },
  getLogs: function getLogs(page, search) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("/task?page=".concat(page, "&q=").concat(search));
  },
  getLog: function getLog(id) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("/task/".concat(id));
  },
  postLog: function postLog(account) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post("/task", account);
  },
  deleteLog: function deleteLog(id) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/task/".concat(id));
  },
  updateLog: function updateLog(id, data) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].put("/task/".concat(id), data);
  },
  getCategories: function getCategories(type) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/category/category-name');
  },
  getSubCategories: function getSubCategories(type) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/sub_categories/name');
  }
});

/***/ }),

/***/ "./resources/js/services/logService.js":
/*!*********************************************!*\
  !*** ./resources/js/services/logService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ "./resources/js/api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getLogs: function getLogs(page, search) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("/task?page=".concat(page, "&q=").concat(search));
  },
  getLog: function getLog(id) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get("/task/".concat(id));
  },
  postLog: function postLog(account) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].post("/task", account);
  },
  deleteLog: function deleteLog(id) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/task/".concat(id));
  },
  updateLog: function updateLog(id, data) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].put("/task/".concat(id), data);
  },
  getCategories: function getCategories(type) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/category/category-name');
  },
  getSubCategories: function getSubCategories(type) {
    return _api_js__WEBPACK_IMPORTED_MODULE_0__["default"].get('/sub_categories/name');
  }
});

/***/ }),

/***/ "./resources/js/store/dashboard.js":
/*!*****************************************!*\
  !*** ./resources/js/store/dashboard.js ***!
  \*****************************************/
/*! exports provided: namespaced, state, mutations, actions, getters, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var _services_dashboardService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/dashboardService.js */ "./resources/js/services/dashboardService.js");

var namespaced = true;
var state = {
  cards: [],
  report: [],
  page: 1
};
var mutations = {
  ASSIGN_DATA: function ASSIGN_DATA(state, cards) {
    state.cards = cards;
  },
  ASSIGN_REPORT: function ASSIGN_REPORT(state, report) {
    state.report = report;
  },
  SET_PAGE: function SET_PAGE(state, payload) {
    state.page = payload;
  },
  DATA_CATEGORIES: function DATA_CATEGORIES(state, payload) {
    state.categories = payload;
  },
  DATA_SUB_CATEGORIES: function DATA_SUB_CATEGORIES(state, payload) {
    state.subcategories = payload;
  },
  ASSIGN_FORM: function ASSIGN_FORM(state, payload) {
    state.data = {};
  },
  CLEAR_FORM: function CLEAR_FORM(state) {
    state.data = {};
  }
};
var actions = {
  getCards: function getCards(_ref, payload) {
    var commit = _ref.commit,
        state = _ref.state;
    var search = typeof payload != "undefined" ? payload : "";
    return new Promise(function (resolve, reject) {
      _services_dashboardService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCards().then(function (response) {
        commit("ASSIGN_DATA", response.data.result);
        console.log(response.data.result);
        resolve(response.data);
      })["catch"](function (error) {
        var notification = {
          type: "error",
          message: "There was a problem fetching events: " + error.message
        }; // dispatch("notification/add", notification, { root: true });
      });
    });
  },
  getReport: function getReport(_ref2, payload) {
    var commit = _ref2.commit,
        state = _ref2.state;
    var search = typeof payload != "undefined" ? payload : "";
    return new Promise(function (resolve, reject) {
      _services_dashboardService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getReport().then(function (response) {
        commit("ASSIGN_REPORT", response.data.result);
        console.log(response.data.result);
        resolve(response.data);
      })["catch"](function (error) {
        var notification = {
          type: "error",
          message: "There was a problem fetching events: " + error.message
        }; // dispatch("notification/add", notification, { root: true });
      });
    });
  },
  getLogs: function getLogs(_ref3, payload) {
    var commit = _ref3.commit,
        state = _ref3.state;
    var search = typeof payload != "undefined" ? payload : "";
    return new Promise(function (resolve, reject) {
      logService.getLogs(state.page, search).then(function (response) {
        commit("ASSIGN_DATA", response.data.result);
        console.log(response.data.result);
        resolve(response.data);
      })["catch"](function (error) {
        var notification = {
          type: "error",
          message: "There was a problem fetching events: " + error.message
        }; // dispatch("notification/add", notification, { root: true });
      });
    });
  },
  submitLog: function submitLog(_ref4) {
    var dispatch = _ref4.dispatch,
        commit = _ref4.commit,
        state = _ref4.state;
    return new Promise(function (resolve, reject) {
      logService.postLog(state.log).then(function (response) {
        dispatch("getLogs").then(function () {
          resolve(response.data);
        });
        commit("SET_MESSAGE", response.data.message, {
          root: true
        });
      })["catch"](function (error) {
        if (error.response.status == 422) {
          commit("SET_ERRORS", error.response.data.errors, {
            root: true
          }); // console.log(error.response.data.errors)
        }
      });
    });
  },
  editLog: function editLog(_ref5, payload) {
    var commit = _ref5.commit,
        state = _ref5.state;
    return new Promise(function (resolve, reject) {
      logService.getLog(payload).then(function (response) {
        commit("ASSIGN_FORM", response.data.result);
        resolve(response.data); // console.log(response.data.result);
      })["catch"](function (error) {// console.log(error.message);
      });
    });
  },
  updateLog: function updateLog(_ref6, id) {
    var state = _ref6.state,
        commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      logService.updateLog(id, state.log).then(function (response) {
        commit("CLEAR_FORM");
        resolve(response.data);
        commit("SET_MESSAGE", response.data.message, {
          root: true
        });
      })["catch"](function (error) {
        console.log("error update: " + error.message);
      });
    });
  },
  removeLog: function removeLog(_ref7, id) {
    var dispatch = _ref7.dispatch;
    return new Promise(function (resolve, reject) {
      logService.deleteLog(id).then(function (response) {
        dispatch("getLogs").then(function () {
          return resolve();
        });
      });
    });
  },
  getCategories: function getCategories(_ref8) {
    var commit = _ref8.commit,
        state = _ref8.state;
    return new Promise(function (resolve, reject) {
      logService.getCategories().then(function (response) {
        commit("DATA_CATEGORIES", response.data.result);
      });
    });
  },
  getSubCategories: function getSubCategories(_ref9) {
    var commit = _ref9.commit,
        state = _ref9.state;
    return new Promise(function (resolve, reject) {
      logService.getSubCategories().then(function (response) {
        commit("DATA_SUB_CATEGORIES", response.data.result);
      });
    });
  }
};
var getters = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./resources/js/store/log.js":
/*!***********************************!*\
  !*** ./resources/js/store/log.js ***!
  \***********************************/
/*! exports provided: namespaced, state, mutations, actions, getters, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var _services_logService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/logService.js */ "./resources/js/services/logService.js");

var namespaced = true;
var state = {
  categories: [],
  subcategories: [],
  logs: [],
  log: {
    id: "",
    date: "",
    description: "",
    category_id: "",
    no_po: "",
    no_ist: "",
    no_return: "",
    suplier_name: "",
    store_name: "",
    intruction: "",
    user_id: "",
    status: ""
  },
  page: 1
};
var mutations = {
  ASSIGN_DATA: function ASSIGN_DATA(state, logs) {
    state.logs = logs;
  },
  SET_PAGE: function SET_PAGE(state, payload) {
    state.page = payload;
  },
  DATA_CATEGORIES: function DATA_CATEGORIES(state, payload) {
    state.categories = payload;
  },
  DATA_SUB_CATEGORIES: function DATA_SUB_CATEGORIES(state, payload) {
    state.subcategories = payload;
  },
  ASSIGN_FORM: function ASSIGN_FORM(state, payload) {
    state.log = {
      id: payload.id,
      date: payload.date,
      description: payload.description,
      category_id: payload.category_id,
      no_po: payload.no_po,
      no_ist: payload.no_ist,
      no_return: payload.no_return,
      suplier_name: payload.suplier_name,
      store_name: payload.store_name,
      intruction: payload.intruction,
      status: payload.status
    };
  },
  CLEAR_FORM: function CLEAR_FORM(state) {
    state.log = {
      id: "",
      date: "",
      description: "",
      category_id: "",
      no_po: "",
      no_ist: "",
      no_return: "",
      suplier_name: "",
      store_name: "",
      intruction: "",
      status: ""
    };
  }
};
var actions = {
  getLogs: function getLogs(_ref, payload) {
    var commit = _ref.commit,
        state = _ref.state;
    var search = typeof payload != "undefined" ? payload : "";
    return new Promise(function (resolve, reject) {
      _services_logService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogs(state.page, search).then(function (response) {
        commit("ASSIGN_DATA", response.data.result);
        console.log(response.data.result);
        resolve(response.data);
      })["catch"](function (error) {
        var notification = {
          type: "error",
          message: "There was a problem fetching events: " + error.message
        }; // dispatch("notification/add", notification, { root: true });
      });
    });
  },
  submitLog: function submitLog(_ref2) {
    var dispatch = _ref2.dispatch,
        commit = _ref2.commit,
        state = _ref2.state;
    return new Promise(function (resolve, reject) {
      _services_logService_js__WEBPACK_IMPORTED_MODULE_0__["default"].postLog(state.log).then(function (response) {
        dispatch("getLogs").then(function () {
          resolve(response.data);
        });
        commit("SET_MESSAGE", response.data.message, {
          root: true
        });
      })["catch"](function (error) {
        if (error.response.status == 422) {
          commit("SET_ERRORS", error.response.data.errors, {
            root: true
          }); // console.log(error.response.data.errors)
        }
      });
    });
  },
  editLog: function editLog(_ref3, payload) {
    var commit = _ref3.commit,
        state = _ref3.state;
    return new Promise(function (resolve, reject) {
      _services_logService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLog(payload).then(function (response) {
        commit("ASSIGN_FORM", response.data.result);
        resolve(response.data); // console.log(response.data.result);
      })["catch"](function (error) {// console.log(error.message);
      });
    });
  },
  updateLog: function updateLog(_ref4, id) {
    var state = _ref4.state,
        commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      _services_logService_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateLog(id, state.log).then(function (response) {
        commit("CLEAR_FORM");
        resolve(response.data);
        commit("SET_MESSAGE", response.data.message, {
          root: true
        });
      })["catch"](function (error) {
        console.log("error update: " + error.message);
      });
    });
  },
  removeLog: function removeLog(_ref5, id) {
    var dispatch = _ref5.dispatch;
    return new Promise(function (resolve, reject) {
      _services_logService_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteLog(id).then(function (response) {
        dispatch("getLogs").then(function () {
          return resolve();
        });
      });
    });
  },
  getCategories: function getCategories(_ref6) {
    var commit = _ref6.commit,
        state = _ref6.state;
    return new Promise(function (resolve, reject) {
      _services_logService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCategories().then(function (response) {
        commit("DATA_CATEGORIES", response.data.result);
      });
    });
  },
  getSubCategories: function getSubCategories(_ref7) {
    var commit = _ref7.commit,
        state = _ref7.state;
    return new Promise(function (resolve, reject) {
      _services_logService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getSubCategories().then(function (response) {
        commit("DATA_SUB_CATEGORIES", response.data.result);
      });
    });
  }
};
var getters = {};
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./resources/js/store/store.js":
/*!*************************************!*\
  !*** ./resources/js/store/store.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log.js */ "./resources/js/store/log.js");
/* harmony import */ var _dashboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.js */ "./resources/js/store/dashboard.js");

 // import user from "./user.js";



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    // user,
    log: _log_js__WEBPACK_IMPORTED_MODULE_2__["default"],
    dashboard: _dashboard_js__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  state: {
    errors: [],
    message: "",
    status: ""
  },
  actions: {
    toastSuccess: function toastSuccess(_ref) {
      var state = _ref.state;
      var Toast = swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: function onOpen(toast) {
          toast.addEventListener("mouseenter", swal.stopTimer);
          toast.addEventListener("mouseleave", swal.resumeTimer);
        }
      });
      Toast.fire({
        icon: "success",
        title: state.message
      });
    }
  },
  mutations: {
    SET_ERRORS: function SET_ERRORS(state, payload) {
      state.errors = payload;
    },
    CLEAR_ERRORS: function CLEAR_ERRORS(state) {
      state.errors = [];
    },
    SET_MESSAGE: function SET_MESSAGE(state, payload) {
      state.message = payload;
    },
    SET_STATUS: function SET_STATUS(state, payload) {
      state.status = payload;
    }
  }
}));

/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Developer.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Developer.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Developer_vue_vue_type_template_id_80c8f68a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Developer.vue?vue&type=template&id=80c8f68a& */ "./resources/js/views/Developer.vue?vue&type=template&id=80c8f68a&");
/* harmony import */ var _Developer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Developer.vue?vue&type=script&lang=js& */ "./resources/js/views/Developer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Developer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Developer_vue_vue_type_template_id_80c8f68a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Developer_vue_vue_type_template_id_80c8f68a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Developer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Developer.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Developer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Developer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Developer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Developer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Developer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Developer.vue?vue&type=template&id=80c8f68a&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Developer.vue?vue&type=template&id=80c8f68a& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Developer_vue_vue_type_template_id_80c8f68a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Developer.vue?vue&type=template&id=80c8f68a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Developer.vue?vue&type=template&id=80c8f68a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Developer_vue_vue_type_template_id_80c8f68a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Developer_vue_vue_type_template_id_80c8f68a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/logs/Add.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/logs/Add.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_24cc6ba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=24cc6ba0& */ "./resources/js/views/logs/Add.vue?vue&type=template&id=24cc6ba0&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/views/logs/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_24cc6ba0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_24cc6ba0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/logs/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/logs/Add.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/logs/Add.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/logs/Add.vue?vue&type=template&id=24cc6ba0&":
/*!************************************************************************!*\
  !*** ./resources/js/views/logs/Add.vue?vue&type=template&id=24cc6ba0& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_24cc6ba0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=24cc6ba0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Add.vue?vue&type=template&id=24cc6ba0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_24cc6ba0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_24cc6ba0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/logs/Edit.vue":
/*!******************************************!*\
  !*** ./resources/js/views/logs/Edit.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_2087af9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=2087af9b& */ "./resources/js/views/logs/Edit.vue?vue&type=template&id=2087af9b&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/logs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_2087af9b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_2087af9b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/logs/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/logs/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/logs/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/logs/Edit.vue?vue&type=template&id=2087af9b&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/logs/Edit.vue?vue&type=template&id=2087af9b& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2087af9b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=2087af9b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Edit.vue?vue&type=template&id=2087af9b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2087af9b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2087af9b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/logs/Form.vue":
/*!******************************************!*\
  !*** ./resources/js/views/logs/Form.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_45733d56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=45733d56& */ "./resources/js/views/logs/Form.vue?vue&type=template&id=45733d56&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/logs/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_45733d56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_45733d56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/logs/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/logs/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/logs/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/logs/Form.vue?vue&type=template&id=45733d56&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/logs/Form.vue?vue&type=template&id=45733d56& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_45733d56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=45733d56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Form.vue?vue&type=template&id=45733d56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_45733d56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_45733d56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/logs/FormEdit.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/logs/FormEdit.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormEdit_vue_vue_type_template_id_a1531002___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormEdit.vue?vue&type=template&id=a1531002& */ "./resources/js/views/logs/FormEdit.vue?vue&type=template&id=a1531002&");
/* harmony import */ var _FormEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/logs/FormEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormEdit_vue_vue_type_template_id_a1531002___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormEdit_vue_vue_type_template_id_a1531002___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/logs/FormEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/logs/FormEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/logs/FormEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/FormEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/logs/FormEdit.vue?vue&type=template&id=a1531002&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/logs/FormEdit.vue?vue&type=template&id=a1531002& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_template_id_a1531002___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEdit.vue?vue&type=template&id=a1531002& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/FormEdit.vue?vue&type=template&id=a1531002&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_template_id_a1531002___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_template_id_a1531002___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/logs/Index.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/logs/Index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_3225fd91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=3225fd91& */ "./resources/js/views/logs/Index.vue?vue&type=template&id=3225fd91&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Index_vue_vue_type_template_id_3225fd91___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_3225fd91___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/logs/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/logs/Index.vue?vue&type=template&id=3225fd91&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/logs/Index.vue?vue&type=template&id=3225fd91& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3225fd91___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=3225fd91& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Index.vue?vue&type=template&id=3225fd91&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3225fd91___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_3225fd91___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/logs/Log.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/logs/Log.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Log_vue_vue_type_template_id_7da08cc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Log.vue?vue&type=template&id=7da08cc3& */ "./resources/js/views/logs/Log.vue?vue&type=template&id=7da08cc3&");
/* harmony import */ var _Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Log.vue?vue&type=script&lang=js& */ "./resources/js/views/logs/Log.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Log_vue_vue_type_template_id_7da08cc3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Log_vue_vue_type_template_id_7da08cc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/logs/Log.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/logs/Log.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/logs/Log.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Log.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Log.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/logs/Log.vue?vue&type=template&id=7da08cc3&":
/*!************************************************************************!*\
  !*** ./resources/js/views/logs/Log.vue?vue&type=template&id=7da08cc3& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_7da08cc3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Log.vue?vue&type=template&id=7da08cc3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/logs/Log.vue?vue&type=template&id=7da08cc3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_7da08cc3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Log_vue_vue_type_template_id_7da08cc3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/reports/Add.vue":
/*!********************************************!*\
  !*** ./resources/js/views/reports/Add.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_73289f82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=73289f82& */ "./resources/js/views/reports/Add.vue?vue&type=template&id=73289f82&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/views/reports/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_73289f82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_73289f82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reports/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reports/Add.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/reports/Add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reports/Add.vue?vue&type=template&id=73289f82&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/reports/Add.vue?vue&type=template&id=73289f82& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_73289f82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=73289f82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Add.vue?vue&type=template&id=73289f82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_73289f82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_73289f82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/reports/Edit.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/reports/Edit.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_c49c100e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=c49c100e& */ "./resources/js/views/reports/Edit.vue?vue&type=template&id=c49c100e&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/reports/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_c49c100e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_c49c100e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reports/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reports/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/reports/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reports/Edit.vue?vue&type=template&id=c49c100e&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/reports/Edit.vue?vue&type=template&id=c49c100e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_c49c100e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=c49c100e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Edit.vue?vue&type=template&id=c49c100e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_c49c100e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_c49c100e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/reports/Form.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/reports/Form.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_5a70a9b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=5a70a9b3& */ "./resources/js/views/reports/Form.vue?vue&type=template&id=5a70a9b3&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/reports/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_5a70a9b3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_5a70a9b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reports/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reports/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/reports/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reports/Form.vue?vue&type=template&id=5a70a9b3&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/reports/Form.vue?vue&type=template&id=5a70a9b3& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5a70a9b3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=5a70a9b3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Form.vue?vue&type=template&id=5a70a9b3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5a70a9b3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_5a70a9b3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/reports/FormEdit.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/reports/FormEdit.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormEdit_vue_vue_type_template_id_f96d3d46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormEdit.vue?vue&type=template&id=f96d3d46& */ "./resources/js/views/reports/FormEdit.vue?vue&type=template&id=f96d3d46&");
/* harmony import */ var _FormEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/reports/FormEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormEdit_vue_vue_type_template_id_f96d3d46___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormEdit_vue_vue_type_template_id_f96d3d46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reports/FormEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reports/FormEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/reports/FormEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/FormEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reports/FormEdit.vue?vue&type=template&id=f96d3d46&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/reports/FormEdit.vue?vue&type=template&id=f96d3d46& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_template_id_f96d3d46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormEdit.vue?vue&type=template&id=f96d3d46& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/FormEdit.vue?vue&type=template&id=f96d3d46&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_template_id_f96d3d46___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormEdit_vue_vue_type_template_id_f96d3d46___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/reports/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/reports/Index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_5a44c0f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=5a44c0f3& */ "./resources/js/views/reports/Index.vue?vue&type=template&id=5a44c0f3&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Index_vue_vue_type_template_id_5a44c0f3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_5a44c0f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reports/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reports/Index.vue?vue&type=template&id=5a44c0f3&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/reports/Index.vue?vue&type=template&id=5a44c0f3& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5a44c0f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=5a44c0f3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Index.vue?vue&type=template&id=5a44c0f3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5a44c0f3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_5a44c0f3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/reports/Report.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/reports/Report.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Report_vue_vue_type_template_id_37898063___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Report.vue?vue&type=template&id=37898063& */ "./resources/js/views/reports/Report.vue?vue&type=template&id=37898063&");
/* harmony import */ var _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Report.vue?vue&type=script&lang=js& */ "./resources/js/views/reports/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Report_vue_vue_type_template_id_37898063___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Report_vue_vue_type_template_id_37898063___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/reports/Report.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/reports/Report.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/reports/Report.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Report.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/reports/Report.vue?vue&type=template&id=37898063&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/reports/Report.vue?vue&type=template&id=37898063& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_37898063___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Report.vue?vue&type=template&id=37898063& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/reports/Report.vue?vue&type=template&id=37898063&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_37898063___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Report_vue_vue_type_template_id_37898063___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /media/dikiharyadi/home/dikiharyadi19/project/Laravel/skripsiProject/logbook/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /media/dikiharyadi/home/dikiharyadi19/project/Laravel/skripsiProject/logbook/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);