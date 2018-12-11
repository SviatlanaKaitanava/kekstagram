'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var COMMENTS_PICTURES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  var DESCRIPTION_PICTURES = ['Тестим новую камеру!', 'Затусили с друзьями на море', 'Как же круто тут кормят', 'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......', 'Вот это тачка!'];

  var random = function (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  var urlPictures = [];
  for (var i = 0; i < 25; i++) {
    urlPictures[i] = 'photos/' + (i + 1) + '.jpg';
  }

  var likesPictures = [];
  for (i = 0; i < 25; i++) {
    likesPictures[i] = random(200, 15);
  }

  var commentPicture = function () {
    var comment = [];
    for (var j = 0; j < random(10, 2); j++) {
      comment[j] = ' ' + COMMENTS_PICTURES[random(5, 0)];
    }
    return (comment);
  };

  var commentsPictures = [];
  for (i = 0; i < 25; i++) {
    commentsPictures[i] = commentPicture();
  }

  var descriptionPictures = [];
  for (i = 0; i < 25; i++) {
    descriptionPictures[i] = DESCRIPTION_PICTURES[random(5, 0)];
  }

  var pictures = [];

  window.data = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    random: random,
    picture: function (pictureNum) {
      for (i = 0; i < pictureNum; i++) {
        pictures[i] = {
          url: urlPictures[i],
          likes: likesPictures[i],
          comments: commentsPictures[i],
          description: descriptionPictures[i]
        };
      }
      return pictures;
    }
  };
})();