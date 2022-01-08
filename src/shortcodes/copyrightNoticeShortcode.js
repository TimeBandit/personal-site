/**
 * 
 * @param {string} content the copyright owner
 * @returns 
 */
function copyrightNoticeShortcode(content) {
  const currentYear = new Date().getFullYear();

  return `<small>
        Copyright\&copy; 2022 ${content}. All Rights Reserved
      </small>`;
}

module.exports = copyrightNoticeShortcode;
