$(function() {
  const socket = io();
  const chatDiv = document.getElementById('fullChat');
  chatDiv.scrollTop = chatDiv.scrollHeight;

  $('#chatBox').keyup(e => {
    e.preventDefault();
    const keycode = e.keyCode ? e.keyCode : e.which;
    if (keycode === 13) {
      const message = {
        text: $('#chatBox')
          .val()
          .trim(),
      };
      $.ajax({
        type: 'POST',
        url: '/api/chat',
        data: message,
      });
      socket.emit('newMessage', message);
      $('#chatBox').val('');
    }
  });

  socket.on('newMessage', message => {
    const newMessage = $(`<h5>${message.text}</h5>`);
    $('#fullChat').append(newMessage);
    chatDiv.scrollTop = chatDiv.scrollHeight;
  });

  $('#submitTestimonial').on('click', e => {
    e.preventDefault();
    const testimony = $('textarea#testimonialBox').val();
    const toSend = {
      testimony: testimony,
    };
    $.ajax({
      type: 'POST',
      url: '/api/testimony/user',
      data: toSend,
    });
    socket.emit('newTestimony', toSend);
    $('#testimonialBox').val('');
  });

  socket.on('newTestimony', testimony => {
    const newTestimony = $(`<h5>${testimony.testimony}</h5>`)
    $('#currentTestimony').html(newTestimony)
  })

  $('#saveBTN').on('click', e => {
    e.preventDefault();
    const note = $('textarea#notes-box').val();
    const toSend = {
      note: note,
    };
    $.ajax({
      type: 'POST',
      url: '/api/note',
      data: toSend,
    });
    socket.emit('newNote', toSend);
    $('#notes-box').val('');
  });

  socket.on('newNote', note => {
    const newNote = $(`<h4>${note.note}</h4>`);
    $('#allNotes').append(newNote);
  });
});
